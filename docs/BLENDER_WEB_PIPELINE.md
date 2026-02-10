# Blender → Web Export Pipeline (NFG 3D Scenes)

Step-by-step pipeline for building and exporting the Office Suite (and other ArchViz) scenes to the web: GLB, Draco, KTX2, and LODs.

---

## 1. Blender scene organization

### Collections and naming

- **Collections:** One per zone (e.g. `Reception`, `Corridor`, `Boardroom`, `OpenOffice`, `Utility`). Optional: `Props`, `Lights` (if not baked).
- **Naming:** `ObjectName` or `Zone_ObjectName` (e.g. `Reception_Desk`, `Corridor_Door_01`). No spaces in export-critical names.
- **Origin:** All exportable objects: origin at world zero or at object center; no random offsets.
- **Scale:** Apply Scale (Ctrl+A → Scale). Prefer 1 Blender unit = 1 meter.

### Before export

- Apply all modifiers (Subdivision, Mirror, etc.).
- Apply transforms (Object → Apply → All Transforms).
- Remove doubles, clean n-gons where possible.
- Ensure all materials use **Principled BSDF** (metallic-roughness).

---

## 2. Poly budgets

| LOD | Triangle budget | Use case |
|-----|------------------|----------|
| LOD0 | 300k–800k | Hero, desktop high quality |
| LOD1 | 150k–300k | Standard, mid-tier devices |
| LOD2 | 50k–150k | Low-end / mobile |

**LOD0:** Full detail, all touchpoint geometry present.  
**LOD1:** Simplified furniture, fewer subdivisions, same layout.  
**LOD2:** Blocky simplification; keep major shapes and hotspot anchors recognizable.

---

## 3. Texture rules

- **Resolution:** 2K max for most assets. 4K only for 1–2 hero-critical surfaces (e.g. floor, main wall).
- **Format for web:** Convert to **KTX2 (BasisU)** after export. Keep originals as PNG/JPG for Blender.
- **Maps:** Base Color (sRGB), Roughness, Metalness, Normal (optional). No unnecessary channels.

---

## 4. Baking (optional but recommended)

- **Ambient occlusion:** Bake to vertex colors or a texture; improves depth without realtime cost.
- **Indirect / light bake:** If using a single static light setup, bake to a lightmap or vertex colors to reduce realtime lights.
- **Output:** Same UV layout as final textures; 2K is enough for baked maps.

---

## 5. Export from Blender

### glTF 2.0 export (Blender)

- File → Export → glTF 2.0 (`.glb`).
- **Include:** Selected objects or full scene (depending on your collection setup).
- **Transform:** +Y up (glTF default).
- **Geometry:** Normals, Tangents (if normal maps).
- **Materials:** Export (will be Principled BSDF → metallic-roughness).
- **Compression:** Do **not** enable Draco in Blender; use **gltf-transform** in the next step for Draco + KTX2.

Export one “master” scene (e.g. `office_master.glb`) at full detail, then use gltf-transform for LODs and compression.

---

## 6. Post-processing with gltf-transform

Install:

```bash
npm install -g @gltf-transform/cli
```

### 6.1 Optimize (all LODs)

```bash
gltf-transform optimize office_master.glb office_opt.glb \
  --texture-compress webp \
  --keep-quads
```

### 6.2 Draco compression (geometry)

```bash
gltf-transform draco office_opt.glb office_draco.glb
```

### 6.3 Texture → KTX2 (BasisU)

Requires a KTX2-capable build of gltf-transform and Basis Universal. Example:

```bash
gltf-transform ktx office_draco.glb office_ktx.glb
```

(If `ktx` is not available, keep PNG/WebP and rely on GPU compression at runtime, or use a separate toktx/Basis pipeline.)

### 6.4 Generate LODs (simplify)

**LOD1 (e.g. ~40% of tris):**

```bash
gltf-transform simplify office_ktx.glb office_lod1.glb --ratio 0.4
```

**LOD2 (e.g. ~15% of tris):**

```bash
gltf-transform simplify office_ktx.glb office_lod2.glb --ratio 0.15
```

Rename/copy:

- `office_ktx.glb` → `office_lod0.glb` (hero)
- Keep `office_lod1.glb`, `office_lod2.glb`

### 6.5 Meshopt (optional)

If your pipeline supports it:

```bash
gltf-transform meshopt office_lod0.glb office_lod0_meshopt.glb
```

Then replace `office_lod0.glb` with the meshopt version. The site’s loader can use Meshopt decoder if available.

---

## 7. Where to place files

| File | Path |
|------|------|
| LOD0 (hero) | `/public/models/office/office_lod0.glb` |
| LOD1 | `/public/models/office/office_lod1.glb` |
| LOD2 | `/public/models/office/office_lod2.glb` |
| Fallback poster | `/public/images/posters/office.webp` |

Optional: duplicate poster as `office-poster.jpg` if the code references that path.

---

## 8. Fallback poster

- Render one frame from Blender (or your preferred tool) at the **same** hero camera (35–50 mm, eye level, corridor angle).
- Export as PNG, then convert to WebP (and optionally JPG) for `/public/images/posters/`.
- Resolution: 1200×1200 or 1600×1200 is sufficient.

---

## 9. Sample command set (copy-paste)

Assumes `office_master.glb` is in the current directory.

```bash
# 1. Optimize
gltf-transform optimize office_master.glb office_opt.glb --texture-compress webp

# 2. Draco
gltf-transform draco office_opt.glb office_draco.glb

# 3. LOD0 (rename)
cp office_draco.glb ../public/models/office/office_lod0.glb

# 4. LOD1
gltf-transform simplify office_draco.glb office_lod1.glb --ratio 0.4
cp office_lod1.glb ../public/models/office/office_lod1.glb

# 5. LOD2
gltf-transform simplify office_draco.glb office_lod2.glb --ratio 0.15
cp office_lod2.glb ../public/models/office/office_lod2.glb
```

Adjust paths and ratios to match your project root and poly budgets.

---

## 10. Verification

- Open each GLB in a glTF viewer (e.g. https://gltf-viewer.donmccurdy.com/).
- Confirm materials and textures load.
- Confirm LOD0/LOD1/LOD2 look correct and stay within triangle budgets.
- In the site: load the Office scene and confirm LOD switching and hotspot positions; adjust hotspot positions in code if the layout changes.
