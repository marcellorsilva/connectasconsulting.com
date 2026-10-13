#!/bin/sh
# Publishes connectasconsulting.com: static build → GitHub Pages (repo marcellorsilva/connectasconsulting.com).
# Run from the project folder: npm run publish:site
set -e
cd "$(dirname "$0")/.."
rm -rf dist-static
STATIC_SITE=1 npx astro build --config astro.static.config.mjs --outDir dist-static
echo "www.connectasconsulting.com" > dist-static/CNAME
touch dist-static/.nojekyll
printf '<!doctype html><meta charset="utf-8"><title>Connectas</title><meta http-equiv="refresh" content="0; url=/"><a href="/">connectasconsulting.com</a>\n' > dist-static/404.html
TMP=$(mktemp -d)
git clone -q --depth 1 https://github.com/marcellorsilva/connectasconsulting.com.git "$TMP/site"
find "$TMP/site" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R dist-static/. "$TMP/site/"
cd "$TMP/site"
git add -A
if git diff --cached --quiet; then echo "Nothing changed."; else git commit -qm "Update site $(date +%Y-%m-%d\ %H:%M)" && git push -q && echo "Published. Live in about a minute at https://www.connectasconsulting.com"; fi
rm -rf "$TMP"
