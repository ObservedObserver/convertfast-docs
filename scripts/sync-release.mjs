import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const { SITE_URL } = require('../site.config.js');
const packageRoot = path.resolve(path.dirname(require.resolve('convertfast-ui')), '..');
const pkg = JSON.parse(await fs.readFile(path.join(packageRoot, 'package.json'), 'utf8'));
if (pkg.version !== '0.2.0') throw new Error(`Review release integration before changing ConvertFast ${pkg.version}.`);
const generated = path.join(root, 'components/generated');
const registry = path.join(root, 'public/r');
await fs.rm(generated, { recursive: true, force: true });
await fs.rm(registry, { recursive: true, force: true });
await fs.cp(path.join(packageRoot, 'registry'), registry, { recursive: true });
const index = JSON.parse(await fs.readFile(path.join(registry, 'registry.json'), 'utf8'));
index.homepage = SITE_URL;
await fs.writeFile(path.join(registry, 'registry.json'), JSON.stringify(index, null, 2) + '\n');
for (const template of ['default', 'editorial']) {
  const source = path.join(packageRoot, 'templates/src', ...(template === 'default' ? [] : ['editorial']), 'segments');
  const target = path.join(generated, template);
  await fs.mkdir(target, { recursive: true });
  for (const file of await fs.readdir(source)) {
    const code = (await fs.readFile(path.join(source, file), 'utf8')).replaceAll('https://ui.convertfa.st/', '/');
    await fs.writeFile(path.join(target, file), code);
  }
}
await fs.cp(path.join(packageRoot, 'assets/_convertfast'), path.join(root, 'public/_convertfast'), { recursive: true });
console.log(`Synced ${index.items.length} registry items and two previews from convertfast-ui@${pkg.version}.`);
