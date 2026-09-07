import { ImageResponse } from 'next/og';
export const alt = 'ConvertFast UI: Next.js landing pages, in your codebase';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(<div style={{ width: '100%', height: '100%', background: '#f8f6f1', padding: 72, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#222320' }}>
    <div style={{ display: 'flex', fontSize: 32, fontWeight: 700 }}>ConvertFast<span style={{ color: '#d4512a', marginLeft: 6 }}>UI</span></div>
    <div style={{ display: 'flex', flexDirection: 'column', fontSize: 78, fontWeight: 700, lineHeight: 1.08, maxWidth: 1020 }}><span>A landing page.</span><span>Already in your codebase.</span></div>
    <div style={{ display: 'flex', fontSize: 27, color: '#666862' }}>Next.js · shadcn · Open source · Two templates</div>
  </div>, size);
}
