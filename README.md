# Moto Auto: Mechanic on Wheels

Mobile mechanic booking site for roadside and at-home auto repair requests.

## Run locally

```bash
python -m http.server 4173
```

The local server runs from the static project root. Open the URL printed by the command.

## Deploy

This project is ready for Vercel static hosting:

1. Import this GitHub repository in Vercel.
2. Use the default framework preset `Other`.
3. Leave the build command empty, or use `npm run build` if Vercel detects `package.json`.
4. Set output directory to `.`.

No environment variables are required for the current static booking MVP.

## Scripts

- `npm run dev` starts a local static server when `npm` is available.
- `npm run build` validates that required files exist when `npm` is available.
- `python scripts/build_check.py` validates the project without Node.
