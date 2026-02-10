# 3D Models

Place GLTF/GLB 3D models here, organized by property type.

## Directory Structure

```
/models
  /condo
    condo-lod0.glb    # High detail
    condo-lod1.glb    # Medium detail
    condo-lod2.glb    # Low detail
  /medical
    medical-lod0.glb
    medical-lod1.glb
    medical-lod2.glb
  /restaurant
    ...
  /warehouse
    ...
  /retail
    ...
  /office
    ...
```

## LOD Guidelines

- LOD0 (High): Full detail, up to 500K triangles
- LOD1 (Mid): ~50% triangles, ~100K
- LOD2 (Low): ~25% triangles, ~25K

## Optimization

Use gltf-transform for optimization:

```bash
# Install
npm install -g @gltf-transform/cli

# Create LODs
gltf-transform simplify model.glb model-lod1.glb --ratio 0.5
gltf-transform simplify model.glb model-lod2.glb --ratio 0.25

# Apply Draco compression
gltf-transform draco model.glb model-draco.glb

# Convert textures to KTX2
gltf-transform ktx model.glb model-ktx.glb
```

## Model Requirements

- Use glTF 2.0 format (.glb binary recommended)
- Baked lighting preferred for performance
- PBR materials (metallic-roughness workflow)
- Origin at floor level (Y=0)
- Scale: 1 unit = 1 meter
