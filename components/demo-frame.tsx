'use client';
import { useState } from 'react';
export default function DemoFrame({ template = 'default', section }: { template?: 'default' | 'editorial'; section?: string }) {
  const [loaded, setLoaded] = useState(false);
  const url = `/demo/${template}${section ? `?section=${encodeURIComponent(section)}` : ''}`;
  return <figure style={{ margin: '1.5rem 0', border: '1px solid #d4d4d4', borderRadius: 12, overflow: 'hidden' }}>
    <figcaption style={{ padding: '12px 16px', fontSize: 13, background: '#f5f5f5', color: '#404040' }}>Interactive template preview. All product names, claims, and prices inside are sample content.</figcaption>
    {loaded ? <iframe title={`${template} ${section || 'landing page'} template preview`} src={url} loading="lazy" style={{ width: '100%', height: 600, border: 0, background: 'white' }} sandbox="allow-scripts allow-same-origin" />
      : <div style={{ padding: 32, textAlign: 'center' }}><button type="button" onClick={() => setLoaded(true)} style={{ cursor: 'pointer', border: '1px solid currentColor', padding: '10px 18px', borderRadius: 8 }}>Load interactive preview</button></div>}
  </figure>;
}
export { DemoFrame };
