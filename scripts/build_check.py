from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REQUIRED_FILES = [
    "index.html",
    "src/main.js",
    "src/styles.css",
    "src/data/services.js",
    "vercel.json",
]

missing = [file for file in REQUIRED_FILES if not (ROOT / file).exists()]

if missing:
    raise SystemExit(f"Missing required files: {', '.join(missing)}")

print("Build check passed.")
