#!/usr/bin/env bash
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
OUT="${1:-/tmp/site}"
BASE="/vitrine"
APPS="salon-jamila snack-lmoumen riad-nour hammam-salam auto-ecole-najah meilou"

rm -rf "$OUT"; mkdir -p "$OUT/demos" "$OUT/meilou-assets"
cp "$ROOT/index.html" "$OUT/"
touch "$OUT/.nojekyll"
for a in salon-jamila snack-lmoumen riad-nour hammam-salam auto-ecole-najah; do
  mkdir -p "$OUT/apps/$a/public"; cp -R "$ROOT/apps/$a/public/images" "$OUT/apps/$a/public/images"
done
cp "$ROOT/meilou-assets/grok-image-27a4f351-d0c3-4dda-8843-e6b60467f963.jpg" "$OUT/meilou-assets/"

# Build every demo as a static export under $BASE/demos/<app>
for a in $APPS; do
  echo "==> building $a"
  ( cd "$ROOT/apps/$a" && NEXT_PUBLIC_BASE_PATH="$BASE/demos/$a" npx next build )
  cp -R "$ROOT/apps/$a/out" "$OUT/demos/$a"
done

# Legacy absolute image paths -> $BASE/demos/<app>/images
for a in $APPS; do
  find "$OUT/demos/$a" -type f \( -name "*.html" -o -name "*.js" -o -name "*.txt" -o -name "*.css" \) -exec sed -i '' -E "s#([\"'(])/images/#\1$BASE/demos/$a/images/#g" {} +
done
echo "==> site ready in $OUT"
