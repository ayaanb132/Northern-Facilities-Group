# Office Suite — 3D Scene Production Brief

**Scene name:** Office Suite  
**Purpose:** Show NFG’s controlled, measurable, repeatable standards in an office environment.  
**Vibe:** Apple product-page restraint + architectural minimalism. Quiet, confident, spatial. No gaming look, no low-poly, no cartoon shading, no neon. Cinematic daylight, clean materials, precise geometry.

---

## 1. Asset list

| Asset | Description | Notes |
|-------|-------------|--------|
| Reception desk | Clean desk surface, minimal counter | Single continuous surface, no clutter |
| Reception seating | 1–2 chairs (optional) | Subtle fabric, neutral |
| Corridor | Hallway with 2–3 door openings | Doors closed or ajar; clear sightline |
| Open office | 2–4 desks (minimal) | Monitors/keyboards optional; keep sparse |
| Boardroom | Table + 4–6 chairs | Light oak veneer table, fabric chairs |
| Janitor closet | Single door (closed) | No signage overload; “utility” feel |
| Door hardware | Handles, push plates | Brushed aluminum, 2–3 instances |
| Access panel / elevator | One panel or elevator bank | Single touchpoint |
| Kitchenette | Counter only (or with sink) | One clean counter as touchpoint |
| Boardroom table edge | Visible table rim | Touchpoint for “reporting” |
| Corridor clock or signage | One clock or small signage area | For “after-hours schedule” |
| QA marker | Clipboard or discrete marker | One element for “Supervisor QA” |
| Tablet on desk | One tablet on reception or desk | For “Reporting log” |

**Geometry:** Precise, clean. No organic or hand-sculpted look. Prefer beveled edges (small bevels) on furniture.

---

## 2. Space layout

- **Reception zone** — Foreground or near camera. Clean desk surface, optional screen/tablet.
- **Hallway / corridor** — Leads away from reception; reveals depth. Doors to boardroom, open office, utility.
- **Open office area** — Visible through opening or glass; 2–4 minimal desks.
- **Boardroom** — Through doorway or glass; table + chairs, visible but not dominant.
- **Utility / janitor closet** — One closed door in corridor (subtle).
- **Touchpoint surfaces (must be present):**
  - Door handles or push plates
  - Elevator or access panel
  - Kitchenette counter
  - Boardroom table edge
  - Corridor clock or signage area
  - Clipboard or QA marker
  - Tablet on desk

Coordinate with hotspot positions in code so each hotspot aligns with one of these elements.

---

## 3. Materials (PBR)

| Surface | Material | Roughness | Notes |
|---------|----------|-----------|--------|
| Walls | Matte paint (off-white) | 0.4–0.6 | Slight roughness variation per wall |
| Floor | Polished concrete or high-end vinyl | 0.2–0.4 | Subtle normal map only |
| Glass | Low-iron glass | 0.0 + Fresnel | Clean, minimal reflections |
| Metal (handles, trim) | Brushed aluminum | 0.3–0.5 | Anisotropy if available |
| Boardroom table | Light oak veneer | 0.3–0.5 | Wood grain subtle |
| Chairs | Fabric | 0.7–0.9 | Neutral, desaturated |
| Reception desk | Same as walls or light wood | 0.4–0.5 | Matte, no shine |

All materials: **metallic-roughness workflow**. sRGB for base color. No emissive except optional very soft screen on tablet.

---

## 4. Lighting

- **Primary:** Daylight HDRI (soft north light). No harsh sun; overcast or indirect preferred.
- **Supplement:** 1–2 large area/rect lights to shape highlights (e.g. window fill, ceiling bounce). No dramatic rim or spotlight look.
- **Shadows:** Minimal. Prefer **baked** lighting/AO where possible. If realtime shadows are used, keep them soft and low resolution.
- **No:** Harsh spotlights, colored lights, neon, or “studio” drama.

---

## 5. Camera

- **Default hero camera:** 35–50 mm equivalent. Eye level (~1.6 m). Slight angle down corridor so it reveals reception and boardroom depth in one frame.
- **Micro motion:** Slow, almost imperceptible camera drift (e.g. very slight pan or dolly). **Disabled** when `prefers-reduced-motion: reduce` is set (then static).

---

## 6. Hotspots (5 total)

Must be tied to NFG operations and to the touchpoint list above.

| # | Hotspot ID | Label | Tied to | Dialog CTA |
|---|------------|--------|---------|-------------|
| 1 | `office-daily-touchpoints` | Daily touchpoints | Door handle / push plate | Book a walkthrough |
| 2 | `office-after-hours` | After-hours schedule | Corridor clock / signage area | Book a walkthrough |
| 3 | `office-supervisor-qa` | Supervisor QA | Clipboard / QA marker | Book a walkthrough |
| 4 | `office-reporting-log` | Reporting log | Tablet on desk | Book a walkthrough |
| 5 | `office-supply-control` | Supply control | Janitor closet door | Book a walkthrough |

**Dialog content (Apple-style):**  
Each hotspot opens a shadcn Dialog with:
- **Title:** Same as hotspot label (or short variant).
- **Body:** 2–3 lines of calm, operational copy (NFG standards, no jargon).
- **CTA button:** “Book a walkthrough” (links to `/get-walkthrough`).

---

## 7. Export requirements (summary)

- **Format:** GLB.
- **LODs:** LOD0 (hero), LOD1, LOD2 — see Blender pipeline doc for poly budgets.
- **Compression:** Draco for geometry; KTX2 (BasisU) for textures.
- **File names:** `office_lod0.glb`, `office_lod1.glb`, `office_lod2.glb`.
- **Placement:** `/public/models/office/` and poster at `/public/images/posters/office.webp` (or equivalent).

See `docs/BLENDER_WEB_PIPELINE.md` for the full Blender → web export pipeline.
