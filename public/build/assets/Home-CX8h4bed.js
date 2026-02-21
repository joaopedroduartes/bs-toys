import{r as x,j as e}from"./app-BQAhcElg.js";const D=`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a1628;
    --surface: #0f2040;
    --surface2: #162a52;
    --border: #1e3a6e;
    --accent: #f0a500;
    --accent2: #e05c1a;
    --text: #dce8f8;
    --text2: #6b8db5;
    --danger: #e05c1a;
    --success: #2ecc71;
    --font: 'Barlow', sans-serif;
    --font-cond: 'Barlow Condensed', sans-serif;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font);
    min-height: 100vh;
  }

  .app {
    display: flex;
    min-height: 100vh;
  }

  /* SIDEBAR */
  .sidebar {
    width: 240px;
    background: var(--surface);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0; left: 0; bottom: 0;
    z-index: 100;
  }

  .sidebar-logo {
    padding: 28px 24px 20px;
    border-bottom: 1px solid var(--border);
  }

  .logo-tag {
    font-family: var(--font-cond);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 4px;
  }

  .logo-name {
    font-family: var(--font-cond);
    font-size: 26px;
    font-weight: 700;
    color: var(--text);
    letter-spacing: 1px;
  }

  .logo-name span {
    color: var(--accent);
  }

  .sidebar-nav {
    padding: 16px 12px;
    flex: 1;
  }

  .nav-section {
    margin-bottom: 24px;
  }

  .nav-section-title {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--text2);
    padding: 0 12px;
    margin-bottom: 8px;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.15s;
    color: var(--text2);
    font-size: 14px;
    font-weight: 500;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
  }

  .nav-item:hover {
    background: var(--surface2);
    color: var(--text);
  }

  .nav-item.active {
    background: rgba(240, 165, 0, 0.12);
    color: var(--accent);
    border-left: 3px solid var(--accent);
    padding-left: 9px;
  }

  .nav-icon {
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sidebar-footer {
    padding: 16px 24px;
    border-top: 1px solid var(--border);
    font-size: 12px;
    color: var(--text2);
  }

  /* MAIN */
  .main {
    margin-left: 240px;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .topbar {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 0 32px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .topbar-title {
    font-family: var(--font-cond);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--text);
  }

  .topbar-badge {
    background: rgba(240, 165, 0, 0.15);
    color: var(--accent);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 4px;
    border: 1px solid rgba(240, 165, 0, 0.3);
  }

  .content {
    padding: 32px;
    flex: 1;
  }

  /* MODULE HEADER */
  .module-header {
    margin-bottom: 28px;
  }

  .module-title {
    font-family: var(--font-cond);
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: var(--text);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .module-number {
    background: var(--accent);
    color: #000;
    font-size: 13px;
    font-weight: 700;
    width: 28px;
    height: 28px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .module-desc {
    color: var(--text2);
    font-size: 14px;
    margin-top: 6px;
  }

  /* TABLE */
  .table-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    overflow: hidden;
  }

  .table-toolbar {
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
      justify-content: center;
  }

  .table-info {
    font-size: 13px;
    color: var(--text2);
  }

  .table-info strong {
    color: var(--text);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.15s;
    font-family: var(--font);
  }

  .btn-primary {
    background: var(--accent);
    color: #000;
  }

  .btn-primary:hover {
    background: #d4920a;
  }

  .btn-sm {
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 4px;
  }

  .btn-ghost {
    background: transparent;
    color: var(--text2);
    border: 1px solid var(--border);
  }

  .btn-ghost:hover {
    background: var(--surface2);
    color: var(--text);
    border-color: var(--text2);
  }

  .btn-danger {
    background: transparent;
    color: var(--danger);
    border: 1px solid rgba(224, 92, 26, 0.3);
  }

  .btn-danger:hover {
    background: rgba(224, 92, 26, 0.1);
    border-color: var(--danger);
  }

  .btn-success {
    background: var(--success);
    color: #000;
  }

  .btn-success:hover {
    background: #27ae60;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead tr {
    background: var(--surface2);
  }

  th {
    padding: 11px 16px;
    text-align: left;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--text2);
    border-bottom: 1px solid var(--border);
    white-space: nowrap;
  }

  td {
    padding: 12px 16px;
    font-size: 14px;
    color: var(--text);
    border-bottom: 1px solid var(--border);
    vertical-align: middle;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover td {
    background: rgba(255,255,255,0.02);
  }

  .row-number {
    font-family: var(--font-cond);
    font-size: 13px;
    font-weight: 600;
    color: var(--text2);
    width: 40px;
  }

  input.cell-input {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 5px;
    color: var(--text);
    padding: 7px 10px;
    font-size: 13px;
    font-family: var(--font);
    width: 100%;
    transition: border-color 0.15s;
    outline: none;
  }

  input.cell-input:focus {
    border-color: var(--accent);
  }

  input.cell-input:disabled {
    background: transparent;
    border-color: transparent;
    color: var(--text);
    cursor: default;
    padding-left: 0;
  }

  .actions-cell {
    display: flex;
    gap: 6px;
    align-items: center;
    white-space: nowrap;
  }

  .empty-state {
    padding: 60px 20px;
    text-align: center;
    color: var(--text2);
  }

  .empty-icon {
    font-size: 40px;
    margin-bottom: 12px;
    opacity: 0.4;
  }

  .empty-text {
    font-size: 15px;
    margin-bottom: 4px;
    color: var(--text2);
  }

  .empty-sub {
    font-size: 13px;
    color: var(--text2);
    opacity: 0.6;
  }

  /* ADD ROW */
  .add-row {
    padding: 14px 20px;
    border-top: 1px solid var(--border);
    background: var(--surface2);
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
  }

  .add-row input {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 5px;
    color: var(--text);
    padding: 8px 12px;
    font-size: 13px;
    font-family: var(--font);
    outline: none;
    transition: border-color 0.15s;
  }

  .add-row input:focus {
    border-color: var(--accent);
  }

  .add-row input::placeholder {
    color: var(--text2);
  }

  .input-erp { width: 80px; }
  .input-desc { flex: 1; min-width: 180px; }
  .input-qty { width: 80px; }

  /* SEARCH MODULE */
  .search-box {
    display: flex;
    gap: 10px;
    margin-bottom: 24px;
  }

  .search-input {
    flex: 1;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text);
    padding: 12px 16px;
    font-size: 14px;
    font-family: var(--font);
    outline: none;
    transition: border-color 0.15s;
  }

  .search-input:focus {
    border-color: var(--accent);
  }

  .search-input::placeholder {
    color: var(--text2);
  }

  /* PRODUCT CARD */
  .product-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 24px;
    animation: fadeIn 0.25s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .product-card-header {
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 16px;
    background: var(--surface2);
  }

  .product-erp {
    background: rgba(240, 165, 0, 0.12);
    color: var(--accent);
    font-family: var(--font-cond);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 4px 10px;
    border-radius: 4px;
    border: 1px solid rgba(240, 165, 0, 0.25);
  }

  .product-name {
    font-size: 16px;
    font-weight: 600;
    color: var(--text);
  }

  .product-qty {
    margin-left: auto;
    font-size: 13px;
    color: var(--text2);
  }

  .product-qty span {
    color: var(--text);
    font-weight: 600;
  }

  /* TAG */
  .status-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--success);
    display: inline-block;
    margin-right: 6px;
  }

  /* HAMBURGER */
  .hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
    color: var(--text);
    flex-shrink: 0;
  }

  .overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 99;
  }

  .overlay.open {
    display: block;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    .hamburger { display: flex; align-items: center; justify-content: center; }

    .sidebar {
      transform: translateX(-100%);
      transition: transform 0.25s ease;
    }

    .sidebar.open {
      transform: translateX(0);
    }

    .main {
      margin-left: 0;
    }

    .topbar {
      padding: 0 16px;
    }

    .content {
      padding: 16px;
    }

    .add-row {
      flex-wrap: wrap;
      justify-content: center;
    }

    .add-row input {
      flex: 1 1 calc(50% - 8px);
      min-width: 120px;
    }

    table {
      font-size: 12px;
    }

    th, td {
      padding: 8px 10px;
    }

    .actions-cell {
      flex-direction: column;
      gap: 4px;
    }
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
`,R=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),N=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),C=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),S=()=>e.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),z=()=>e.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),e.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),e.jsx("polyline",{points:"7 3 7 8 15 8"})]}),L=()=>e.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"M9 6V4h6v2"})]}),q=()=>e.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),B=()=>e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),I=()=>e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]});let A=1;function P({referencias:f,setReferencias:h}){const g=f,r=h,[d,l]=x.useState({erp:"",ref:"",desc:"",qty:""}),[o,p]=x.useState(null),[b,c]=x.useState({}),m=()=>{!d.erp.trim()||!d.desc.trim()||!d.qty.trim()||(r(a=>[...a,{id:A++,...d}]),l({erp:"",ref:"",desc:"",qty:""}))},j=a=>{p(a.id),c({erp:a.erp,ref:a.ref,desc:a.desc,qty:a.qty})},y=a=>{r(i=>i.map(s=>s.id===a?{...s,...b}:s)),p(null)},k=a=>{r(i=>i.filter(s=>s.id!==a))};return e.jsxs("div",{children:[e.jsxs("div",{className:"module-header",children:[e.jsxs("div",{className:"module-title",children:[e.jsx("div",{className:"module-number",children:"1"}),"Lançamentos"]}),e.jsx("div",{className:"module-desc",children:"Cadastro de códigos ERP por referência de brinquedo"})]}),e.jsxs("div",{className:"table-card",children:[e.jsx("div",{className:"table-toolbar",children:e.jsxs("div",{className:"table-info",children:[e.jsx("strong",{children:g.length})," referências cadastradas"]})}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:40},children:"#"}),e.jsx("th",{style:{width:80},children:"Cód. ERP"}),e.jsx("th",{style:{width:80},children:"Nº Ref."}),e.jsx("th",{children:"Descrição do Produto"}),e.jsx("th",{style:{width:80},children:"Qtd. Peças/Cx"}),e.jsx("th",{style:{width:160},children:"Ações"})]})}),e.jsx("tbody",{children:g.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:"📦"}),e.jsx("div",{className:"empty-text",children:"Nenhuma referência cadastrada"}),e.jsx("div",{className:"empty-sub",children:"Adicione uma referência usando o formulário abaixo"})]})})}):g.map((a,i)=>e.jsxs("tr",{children:[e.jsx("td",{className:"row-number",children:String(i+1).padStart(2,"0")}),e.jsx("td",{children:e.jsx("input",{className:"cell-input",value:o===a.id?b.erp:a.erp,disabled:o!==a.id,onChange:s=>c(v=>({...v,erp:s.target.value}))})}),e.jsx("td",{children:e.jsx("input",{className:"cell-input",value:o===a.id?b.ref:a.ref,disabled:o!==a.id,onChange:s=>c(v=>({...v,ref:s.target.value}))})}),e.jsx("td",{children:e.jsx("input",{className:"cell-input",value:o===a.id?b.desc:a.desc,disabled:o!==a.id,onChange:s=>c(v=>({...v,desc:s.target.value}))})}),e.jsx("td",{children:e.jsx("input",{className:"cell-input",value:o===a.id?b.qty:a.qty,disabled:o!==a.id,onChange:s=>c(v=>({...v,qty:s.target.value}))})}),e.jsx("td",{children:e.jsx("div",{className:"actions-cell",children:o===a.id?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"btn btn-success btn-sm",onClick:()=>y(a.id),children:[e.jsx(z,{})," Salvar"]}),e.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>p(null),children:e.jsx(q,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"btn btn-ghost btn-sm",onClick:()=>j(a),children:[e.jsx(S,{})," Editar"]}),e.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>k(a.id),children:e.jsx(L,{})})]})})})]},a.id))})]}),e.jsxs("div",{className:"add-row",children:[e.jsx("input",{className:"input-erp",placeholder:"Cód. ERP",value:d.erp,onChange:a=>l(i=>({...i,erp:a.target.value})),onKeyDown:a=>a.key==="Enter"&&m()}),e.jsx("input",{className:"input-erp",placeholder:"Nº Ref.",value:d.ref,onChange:a=>l(i=>({...i,ref:a.target.value})),onKeyDown:a=>a.key==="Enter"&&m()}),e.jsx("input",{className:"input-desc",placeholder:"Descrição do produto",value:d.desc,onChange:a=>l(i=>({...i,desc:a.target.value})),onKeyDown:a=>a.key==="Enter"&&m()}),e.jsx("input",{className:"input-qty",placeholder:"Qtd. peças/cx",value:d.qty,onChange:a=>l(i=>({...i,qty:a.target.value})),onKeyDown:a=>a.key==="Enter"&&m()}),e.jsxs("button",{className:"btn btn-primary",onClick:m,children:[e.jsx(C,{})," Adicionar"]})]})]})]})}let W=1;function H({referencias:f}){const[h,g]=x.useState(""),[r,d]=x.useState(null),[l,o]=x.useState({}),[p,b]=x.useState({codigo:"",descricao:"",quantidade:""}),[c,m]=x.useState(null),[j,y]=x.useState({}),k=f.filter(t=>t.erp.toLowerCase().includes(h.toLowerCase())||t.desc.toLowerCase().includes(h.toLowerCase())),a=t=>{d(t),g(t.erp+" — "+t.desc),l[t.id]||o(n=>({...n,[t.id]:[]}))},i=r?l[r.id]||[]:[],s=()=>{!p.codigo.trim()||!p.descricao.trim()||!p.quantidade.trim()||(o(t=>({...t,[r.id]:[...t[r.id]||[],{id:W++,...p}]})),b({codigo:"",descricao:"",quantidade:""}))},v=t=>{m(t.id),y({codigo:t.codigo,descricao:t.descricao,quantidade:t.quantidade})},E=t=>{o(n=>({...n,[r.id]:n[r.id].map(u=>u.id===t?{...u,...j}:u)})),m(null)},M=t=>{o(n=>({...n,[r.id]:n[r.id].filter(u=>u.id!==t)}))};return e.jsxs("div",{children:[e.jsxs("div",{className:"module-header",children:[e.jsxs("div",{className:"module-title",children:[e.jsx("div",{className:"module-number",children:"2"}),"Cadastros Ref."]}),e.jsx("div",{className:"module-desc",children:"Pesquise uma referência e cadastre os materiais utilizados por peça"})]}),e.jsxs("div",{style:{position:"relative"},children:[e.jsxs("div",{className:"search-box",children:[e.jsx("input",{className:"search-input",placeholder:"Pesquisar por Ref. ou descrição...",value:h,onChange:t=>{g(t.target.value),d(null)}}),e.jsxs("button",{className:"btn btn-primary",children:[e.jsx(N,{})," Pesquisar"]})]}),h&&!r&&k.length>0&&e.jsx("div",{style:{position:"absolute",top:54,left:0,right:80,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,zIndex:10,overflow:"hidden",boxShadow:"0 8px 32px rgba(0,0,0,0.4)"},children:k.map(t=>e.jsxs("div",{onClick:()=>a(t),style:{padding:"12px 16px",cursor:"pointer",display:"flex",alignItems:"center",gap:12,borderBottom:"1px solid var(--border)",transition:"background 0.1s"},onMouseEnter:n=>n.currentTarget.style.background="var(--surface2)",onMouseLeave:n=>n.currentTarget.style.background="transparent",children:[e.jsx("span",{className:"product-erp",children:t.erp}),e.jsx("span",{style:{fontSize:14},children:t.desc}),e.jsxs("span",{style:{marginLeft:"auto",fontSize:12,color:"var(--text2)"},children:[t.qty," pçs/cx"]})]},t.id))}),h&&!r&&k.length===0&&e.jsx("div",{style:{color:"var(--text2)",fontSize:14,padding:"12px 0"},children:"Nenhuma referência encontrada."})]}),r&&e.jsxs("div",{className:"product-card",children:[e.jsxs("div",{className:"product-card-header",children:[e.jsx("span",{className:"product-erp",children:r.erp}),e.jsx("span",{className:"product-name",children:r.desc}),e.jsxs("span",{className:"product-qty",children:[e.jsx("span",{className:"status-dot"}),e.jsx("span",{children:r.qty})," peças por caixa"]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:40},children:"#"}),e.jsx("th",{style:{width:140},children:"Cód. Item"}),e.jsx("th",{children:"Descrição do Material"}),e.jsx("th",{style:{width:130},children:"Qtd. por Peça"}),e.jsx("th",{style:{width:160},children:"Ações"})]})}),e.jsx("tbody",{children:i.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:"🔩"}),e.jsx("div",{className:"empty-text",children:"Nenhum material cadastrado"}),e.jsx("div",{className:"empty-sub",children:"Adicione os materiais usados para fabricar uma peça"})]})})}):i.map((t,n)=>e.jsxs("tr",{children:[e.jsx("td",{className:"row-number",children:String(n+1).padStart(2,"0")}),e.jsx("td",{children:e.jsx("input",{className:"cell-input",value:c===t.id?j.codigo:t.codigo,disabled:c!==t.id,onChange:u=>y(w=>({...w,codigo:u.target.value}))})}),e.jsx("td",{children:e.jsx("input",{className:"cell-input",value:c===t.id?j.descricao:t.descricao,disabled:c!==t.id,onChange:u=>y(w=>({...w,descricao:u.target.value}))})}),e.jsx("td",{children:e.jsx("input",{className:"cell-input",value:c===t.id?j.quantidade:t.quantidade,disabled:c!==t.id,onChange:u=>y(w=>({...w,quantidade:u.target.value}))})}),e.jsx("td",{children:e.jsx("div",{className:"actions-cell",children:c===t.id?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"btn btn-success btn-sm",onClick:()=>E(t.id),children:[e.jsx(z,{})," Salvar"]}),e.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>m(null),children:e.jsx(q,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"btn btn-ghost btn-sm",onClick:()=>v(t),children:[e.jsx(S,{})," Editar"]}),e.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>M(t.id),children:e.jsx(L,{})})]})})})]},t.id))})]}),e.jsxs("div",{className:"add-row",children:[e.jsx("input",{className:"input-erp",placeholder:"Cód. item",value:p.codigo,onChange:t=>b(n=>({...n,codigo:t.target.value})),onKeyDown:t=>t.key==="Enter"&&s()}),e.jsx("input",{className:"input-desc",placeholder:"Descrição do material",value:p.descricao,onChange:t=>b(n=>({...n,descricao:t.target.value})),onKeyDown:t=>t.key==="Enter"&&s()}),e.jsx("input",{className:"input-qty",placeholder:"Qtd. por peça",value:p.quantidade,onChange:t=>b(n=>({...n,quantidade:t.target.value})),onKeyDown:t=>t.key==="Enter"&&s()}),e.jsxs("button",{className:"btn btn-primary",onClick:s,children:[e.jsx(C,{})," Adicionar"]})]})]})]})}function K(){const[f,h]=x.useState("lancamentos"),[g,r]=x.useState([]),[d,l]=x.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:D}),e.jsxs("div",{className:"app",children:[e.jsx("div",{className:`overlay ${d?"open":""}`,onClick:()=>l(!1)}),e.jsxs("aside",{className:`sidebar ${d?"open":""}`,children:[e.jsxs("div",{className:"sidebar-logo",children:[e.jsx("div",{className:"logo-tag",children:"Sempre inovando."}),e.jsxs("div",{className:"logo-name",children:["BS ",e.jsx("span",{children:"Toys"})]})]}),e.jsx("nav",{className:"sidebar-nav",children:e.jsxs("div",{className:"nav-section",children:[e.jsx("div",{className:"nav-section-title",children:"Módulos"}),e.jsxs("button",{className:`nav-item ${f==="lancamentos"?"active":""}`,onClick:()=>{h("lancamentos"),l(!1)},children:[e.jsx("span",{className:"nav-icon",children:e.jsx(R,{})}),"Lançamentos"]}),e.jsxs("button",{className:`nav-item ${f==="cadastros"?"active":""}`,onClick:()=>{h("cadastros"),l(!1)},children:[e.jsx("span",{className:"nav-icon",children:e.jsx(N,{})}),"Cadastros Ref."]})]})}),e.jsx("div",{className:"sidebar-footer",children:"v1.0 · BS Toys © 2025"})]}),e.jsxs("main",{className:"main",children:[e.jsxs("div",{className:"topbar",children:[e.jsx("button",{className:"hamburger",onClick:()=>l(o=>!o),children:d?e.jsx(I,{}):e.jsx(B,{})}),e.jsx("div",{className:"topbar-title",children:f==="lancamentos"?"Módulo 1 — Lançamentos":"Módulo 2 — Cadastros Ref."}),e.jsxs("div",{className:"topbar-badge",children:[e.jsx("span",{className:"status-dot"}),"Sistema Ativo"]})]}),e.jsx("div",{className:"content",children:f==="lancamentos"?e.jsx(P,{onReferenciasChange:r,referencias:g,setReferencias:r}):e.jsx(H,{referencias:g})})]})]})]})}export{K as default};
