// Bundles the 3D code (three.js + add-ons + base3d.js) into one classic script, so the
// 3D also works when the pages are opened straight from disk (file://), where browsers block modules.
// Build: node node_modules/rolldown/bin/cli.mjs -c website/tools/rolldown.config.mjs   (run from the repo root)
export default {
  input: 'website/assets/js/base3d.js',
  output: { file: 'website/assets/js/bm3d.js', format: 'iife', name: 'BM3D', minify: true },
};
