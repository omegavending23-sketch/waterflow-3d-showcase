# AGENTS.md

## Rules

- Keep app-displayed images as real binary files under `src/assets` and import them directly. Why: the local dev server does not serve Lovable Assets pointer URLs (`/__l5e/assets-v1/...` returns the SPA HTML), so pointer imports render as broken images in the preview.
