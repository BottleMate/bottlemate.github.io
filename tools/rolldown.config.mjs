// Bundles the 3D code (three.js + add-ons + base3d.js) into one classic script, so the
// 3D also works when the pages are opened straight from disk (file://), where browsers block modules.
// three.js: the app's installed copy when present (smaller bundle, unused parts dropped),
// otherwise the site's vendored copy in assets/vendor (same release, r160).
// Build (from the BottelMate folder, using the app's installed rolldown):
//   node app/node_modules/rolldown/bin/cli.mjs -c website/tools/rolldown.config.mjs
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const site = (p) => fileURLToPath(new URL(`../${p}`, import.meta.url));
const appThree = fileURLToPath(new URL('../../app/node_modules/three/build/three.module.js', import.meta.url));

export default {
  input: site('assets/js/base3d.js'),
  resolve: { alias: { three: existsSync(appThree) ? appThree : site('assets/vendor/three.module.min.js') } },
  output: { file: site('assets/js/bm3d.js'), format: 'iife', name: 'BM3D', minify: true },
};
