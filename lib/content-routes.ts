import fs from 'node:fs';
import path from 'node:path';
export function getContentRoutes(): string[] {
  const root = path.join(process.cwd(), 'content');
  const routes: string[] = ['/', '/shadcn-color-picker'];
  function visit(directory: string) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) visit(file);
      else if (entry.name.endsWith('.mdx')) {
        let route = '/' + path.relative(root, file).replaceAll(path.sep, '/').replace(/\.mdx$/, '').replace(/\/index$/, '');
        if (route === '/index') route = '/';
        routes.push(route);
      }
    }
  }
  visit(root);
  return [...new Set(routes)].sort();
}
