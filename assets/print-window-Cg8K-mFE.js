const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/server.browser-Bg64BdFB.js","assets/react-DlU9tEAh.js"])))=>i.map(i=>d[i]);
import{i as e}from"./react-DlU9tEAh.js";import{g as t}from"./utils-DXD8f_I-.js";import{t as n}from"./index-BaIfgutq.js";var r=t();function i({title:e,companyHeader:t=`PHONG THÀNH — Sửa chữa điện tử điện lạnh`,signatures:n,children:i}){return(0,r.jsxs)(`div`,{className:`print-doc`,children:[(0,r.jsxs)(`header`,{style:{textAlign:`center`,marginBottom:16},children:[(0,r.jsx)(`div`,{style:{fontWeight:700},children:t}),(0,r.jsx)(`h1`,{style:{fontSize:18,marginTop:8},children:e})]}),(0,r.jsx)(`main`,{children:i}),n&&n.length>0&&(0,r.jsx)(`div`,{className:`print-signatures`,children:n.map(e=>(0,r.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,r.jsx)(`div`,{style:{fontWeight:600},children:e}),(0,r.jsx)(`div`,{style:{marginTop:48,fontStyle:`italic`},children:`(Ký, ghi rõ họ tên)`})]},e))})]})}var a=`
  @page { size: A4; margin: 14mm; }
  * { box-sizing: border-box; }
  body {
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
    color: #000; background: #fff; margin: 0; padding: 16px;
    font-size: 13px; line-height: 1.4;
  }
  table { width: 100%; border-collapse: collapse; }
  th, td { border: 1px solid #333; padding: 6px 8px; text-align: left; }
  thead th { background: #f0f0f0; }
  h1, h2, h3 { margin: 0 0 8px; }
  .print-signatures { display: flex; justify-content: space-around; margin-top: 40px; }
  @media print {
    body { padding: 0; }
    .no-print { display: none !important; }
  }
`;async function o(t,r){let{renderToStaticMarkup:i}=await n(async()=>{let{renderToStaticMarkup:t}=await import(`./server.browser-Bg64BdFB.js`).then(t=>e(t.default,1));return{renderToStaticMarkup:t}},__vite__mapDeps([0,1])),o=i(r),s=window.open(``,`_blank`,`noopener,noreferrer,width=900,height=700`);if(!s)return null;let c=s.document;return c.open(),c.write(`<!doctype html><html><head><meta charset="utf-8"><style>${a}</style></head><body>${o}</body></html>`),c.close(),c.title=t,s.setTimeout(()=>{s.focus(),s.print()},200),s}export{i as n,o as t};