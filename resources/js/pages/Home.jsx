import React, { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import RetornoMontagem from "./RetornoMontagem";

const styles = `
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

  .topbar-right {
    display: flex;
    align-items: center;
    gap: 12px;
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

  .btn-logout {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid rgba(224, 92, 26, 0.3);
    background: transparent;
    color: var(--danger);
    font-family: var(--font);
    transition: all 0.15s;
  }

  .btn-logout:hover {
    background: rgba(224, 92, 26, 0.1);
    border-color: var(--danger);
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
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
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

  .btn-primary { background: var(--accent); color: #000; }
  .btn-primary:hover { background: #d4920a; }
  .btn-sm { padding: 5px 10px; font-size: 12px; border-radius: 4px; }

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

  .btn-success { background: var(--success); color: #000; }
  .btn-success:hover { background: #27ae60; }

  table { width: 100%; border-collapse: collapse; }
  thead tr { background: var(--surface2); }

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

  tbody tr:last-child td { border-bottom: none; }
  tbody tr:hover td { background: rgba(255,255,255,0.02); }

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

  input.cell-input:focus { border-color: var(--accent); }

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

  .empty-icon { font-size: 40px; margin-bottom: 12px; opacity: 0.4; }
  .empty-text { font-size: 15px; margin-bottom: 4px; color: var(--text2); }
  .empty-sub { font-size: 13px; color: var(--text2); opacity: 0.6; }

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

  .add-row input:focus { border-color: var(--accent); }
  .add-row input::placeholder { color: var(--text2); }

  .input-erp { width: 80px; }
  .input-desc { flex: 1; min-width: 180px; }
  .input-qty { width: 80px; }

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

  .search-input:focus { border-color: var(--accent); }
  .search-input::placeholder { color: var(--text2); }

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

  .product-name { font-size: 16px; font-weight: 600; color: var(--text); }

  .product-qty {
    margin-left: auto;
    font-size: 13px;
    color: var(--text2);
  }

  .product-qty span { color: var(--text); font-weight: 600; }

  .status-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--success);
    display: inline-block;
    margin-right: 6px;
  }

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

  .overlay.open { display: block; }

  @media (max-width: 768px) {
    .hamburger { display: flex; align-items: center; justify-content: center; }
    .sidebar { transform: translateX(-100%); transition: transform 0.25s ease; }
    .sidebar.open { transform: translateX(0); }
    .main { margin-left: 0; }
    .topbar { padding: 0 16px; }
    .content { padding: 16px; }
    .add-row { flex-wrap: wrap; justify-content: center; }
    .add-row input { flex: 1 1 calc(50% - 8px); min-width: 120px; }
    table { font-size: 12px; }
    th, td { padding: 8px 10px; }
    .actions-cell { flex-direction: column; gap: 4px; }
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
`;

// Icons
const IconLaunch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

const IconSearch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const IconPlus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const IconEdit = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const IconSave = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
    <polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
  </svg>
);

const IconTrash = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
    <path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
  </svg>
);

const IconCancel = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const IconHamburger = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const IconClose = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const IconLogout = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const IconRetorno = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);

// MODULE 1 - Lançamentos
function Lancamentos({ referencias, setReferencias }) {
  const rows = referencias;
  const setRows = setReferencias;
  const [newRow, setNewRow] = useState({ erp: "", ref: "", desc: "", qty: "" });
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({});

  const handleAdd = () => {
    if (!newRow.erp.trim() || !newRow.desc.trim() || !newRow.qty.trim()) return;
    fetch('/api/referencias', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content },
      body: JSON.stringify(newRow)
    })
      .then(res => res.json())
      .then(data => {
        setRows(prev => [...prev, data]);
        setNewRow({ erp: "", ref: "", desc: "", qty: "" });
      });
  };

  const handleEdit = (row) => {
    setEditing(row.id);
    setEditData({ erp: row.erp, ref: row.ref, desc: row.desc, qty: row.qty });
  };

  const handleSaveEdit = (id) => {
    fetch(`/api/referencias/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content },
      body: JSON.stringify(editData)
    })
      .then(res => res.json())
      .then(data => {
        setRows(prev => prev.map(r => r.id === id ? data : r));
        setEditing(null);
      });
  };

  const handleDelete = (id) => {
    fetch(`/api/referencias/${id}`, {
      method: 'DELETE',
      headers: { 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content }
    }).then(() => {
      setRows(prev => prev.filter(r => r.id !== id));
    });
  };

  return (
    <div>
      <div className="module-header">
        <div className="module-title">
          <div className="module-number">1</div>
          Lançamentos
        </div>
        <div className="module-desc">Cadastro de Referências e Lançamentos anuais.</div>
      </div>

      <div className="table-card">
        <div className="table-toolbar">
          <div className="table-info">
            <strong>{rows.length}</strong> referências cadastradas
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style={{width: 40}}>#</th>
              <th style={{width: 80}}>Cód. ERP</th>
              <th style={{width: 80}}>Nº Ref.</th>
              <th>Descrição do Produto</th>
              <th style={{width: 80}}>Qtd. Peças/Cx</th>
              <th style={{width: 160}}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={6}>
                  <div className="empty-state">
                    <div className="empty-icon">📦</div>
                    <div className="empty-text">Nenhuma referência cadastrada</div>
                    <div className="empty-sub">Adicione uma referência usando o formulário abaixo</div>
                  </div>
                </td>
              </tr>
            ) : (
              rows.map((row, i) => (
                <tr key={row.id}>
                  <td className="row-number">{String(i + 1).padStart(2, '0')}</td>
                  <td>
                    <input className="cell-input" value={editing === row.id ? editData.erp : row.erp} disabled={editing !== row.id} onChange={e => setEditData(p => ({ ...p, erp: e.target.value }))} />
                  </td>
                  <td>
                    <input className="cell-input" value={editing === row.id ? editData.ref : row.ref} disabled={editing !== row.id} onChange={e => setEditData(p => ({ ...p, ref: e.target.value }))} />
                  </td>
                  <td>
                    <input className="cell-input" value={editing === row.id ? editData.desc : row.desc} disabled={editing !== row.id} onChange={e => setEditData(p => ({ ...p, desc: e.target.value }))} />
                  </td>
                  <td>
                    <input className="cell-input" value={editing === row.id ? editData.qty : row.qty} disabled={editing !== row.id} onChange={e => setEditData(p => ({ ...p, qty: e.target.value }))} />
                  </td>
                  <td>
                    <div className="actions-cell">
                      {editing === row.id ? (
                        <>
                          <button className="btn btn-success btn-sm" onClick={() => handleSaveEdit(row.id)}><IconSave /> Salvar</button>
                          <button className="btn btn-ghost btn-sm" onClick={() => setEditing(null)}><IconCancel /></button>
                        </>
                      ) : (
                        <>
                          <button className="btn btn-ghost btn-sm" onClick={() => handleEdit(row)}><IconEdit /> Editar</button>
                          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(row.id)}><IconTrash /></button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="add-row">
          <input className="input-erp" placeholder="Cód. ERP" value={newRow.erp} onChange={e => setNewRow(p => ({ ...p, erp: e.target.value }))} onKeyDown={e => e.key === 'Enter' && handleAdd()} />
          <input className="input-erp" placeholder="Nº Ref." value={newRow.ref} onChange={e => setNewRow(p => ({ ...p, ref: e.target.value }))} onKeyDown={e => e.key === 'Enter' && handleAdd()} />
          <input className="input-desc" placeholder="Descrição do produto" value={newRow.desc} onChange={e => setNewRow(p => ({ ...p, desc: e.target.value }))} onKeyDown={e => e.key === 'Enter' && handleAdd()} />
          <input className="input-qty" placeholder="Qtd. peças/cx" value={newRow.qty} onChange={e => setNewRow(p => ({ ...p, qty: e.target.value }))} onKeyDown={e => e.key === 'Enter' && handleAdd()} />
          <button className="btn btn-primary" onClick={handleAdd}><IconPlus /> Adicionar</button>
        </div>
      </div>
    </div>
  );
}

// MODULE 2 - Cadastros Ref.
function CadastrosRef({ referencias, materiais, setMateriais }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [newMat, setNewMat] = useState({ codigo: "", descricao: "", quantidade: "" });
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({});

  const filtered = referencias.filter(r =>
    (r.ref && r.ref.toLowerCase().includes(search.toLowerCase())) ||
    r.desc.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (ref) => {
    setSelected(ref);
    setSearch(ref.ref + " — " + ref.desc);
    fetch(`/api/materiais/${ref.id}`)
      .then(res => res.json())
      .then(data => setMateriais(p => ({ ...p, [ref.id]: data })));
  };

  const mats = selected ? (materiais[selected.id] || []) : [];

  const handleAddMat = () => {
    if (!newMat.codigo.trim() || !newMat.descricao.trim() || !newMat.quantidade.trim()) return;
    fetch('/api/materiais', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content },
      body: JSON.stringify({ ...newMat, referencia_id: selected.id })
    })
      .then(res => res.json())
      .then(data => {
        setMateriais(p => ({ ...p, [selected.id]: [...(p[selected.id] || []), data] }));
        setNewMat({ codigo: "", descricao: "", quantidade: "" });
      });
  };

  const handleEditMat = (mat) => {
    setEditing(mat.id);
    setEditData({ codigo: mat.codigo, descricao: mat.descricao, quantidade: mat.quantidade });
  };

  const handleSaveMat = (matItemId) => {
    fetch(`/api/materiais/${matItemId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content },
      body: JSON.stringify(editData)
    })
      .then(res => res.json())
      .then(data => {
        setMateriais(p => ({ ...p, [selected.id]: p[selected.id].map(m => m.id === matItemId ? data : m) }));
        setEditing(null);
      });
  };

  const handleDeleteMat = (matItemId) => {
    fetch(`/api/materiais/${matItemId}`, {
      method: 'DELETE',
      headers: { 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content }
    }).then(() => {
      setMateriais(p => ({ ...p, [selected.id]: p[selected.id].filter(m => m.id !== matItemId) }));
    });
  };

  return (
    <div>
      <div className="module-header">
        <div className="module-title">
          <div className="module-number">2</div>
          Cadastros Ref.
        </div>
        <div className="module-desc">Pesquise uma referência e cadastre os materiais utilizados por peça</div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="search-box">
          <input className="search-input" placeholder="Pesquisar por Ref. ou descrição..." value={search} onChange={e => { setSearch(e.target.value); setSelected(null); }} />
          <button className="btn btn-primary"><IconSearch /> Pesquisar</button>
        </div>

        {search && !selected && filtered.length > 0 && (
          <div style={{ position: "absolute", top: 54, left: 0, right: 80, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, zIndex: 10, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
            {filtered.map(ref => (
              <div key={ref.id} onClick={() => handleSelect(ref)} style={{ padding: "12px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid var(--border)", transition: "background 0.1s" }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--surface2)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                <span className="product-erp">{ref.ref}</span>
                <span style={{ fontSize: 14 }}>{ref.desc}</span>
                <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--text2)" }}>{ref.qty} pçs/cx</span>
              </div>
            ))}
          </div>
        )}

        {search && !selected && filtered.length === 0 && (
          <div style={{ color: "var(--text2)", fontSize: 14, padding: "12px 0" }}>Nenhuma referência encontrada.</div>
        )}
      </div>

      {selected && (
        <div className="product-card">
          <div className="product-card-header">
            <span className="product-erp">{selected.ref}</span>
            <span className="product-name">{selected.desc}</span>
            <span className="product-qty">
              <span className="status-dot"></span>
              <span>{selected.qty}</span> peças por caixa
            </span>
          </div>

          <table>
            <thead>
              <tr>
                <th style={{width:40}}>#</th>
                <th style={{width:140}}>Cód. Item</th>
                <th>Descrição do Material</th>
                <th style={{width:130}}>Qtd. por Peça</th>
                <th style={{width:160}}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {mats.length === 0 ? (
                <tr>
                  <td colSpan={6}>
                    <div className="empty-state">
                      <div className="empty-icon">🔩</div>
                      <div className="empty-text">Nenhum material cadastrado</div>
                      <div className="empty-sub">Adicione os materiais usados para fabricar uma peça</div>
                    </div>
                  </td>
                </tr>
              ) : (
                mats.map((mat, i) => (
                  <tr key={mat.id}>
                    <td className="row-number">{String(i + 1).padStart(2, '0')}</td>
                    <td><input className="cell-input" value={editing === mat.id ? editData.codigo : mat.codigo} disabled={editing !== mat.id} onChange={e => setEditData(p => ({ ...p, codigo: e.target.value }))} /></td>
                    <td><input className="cell-input" value={editing === mat.id ? editData.descricao : mat.descricao} disabled={editing !== mat.id} onChange={e => setEditData(p => ({ ...p, descricao: e.target.value }))} /></td>
                    <td><input className="cell-input" value={editing === mat.id ? editData.quantidade : mat.quantidade} disabled={editing !== mat.id} onChange={e => setEditData(p => ({ ...p, quantidade: e.target.value }))} /></td>
                    <td>
                      <div className="actions-cell">
                        {editing === mat.id ? (
                          <>
                            <button className="btn btn-success btn-sm" onClick={() => handleSaveMat(mat.id)}><IconSave /> Salvar</button>
                            <button className="btn btn-ghost btn-sm" onClick={() => setEditing(null)}><IconCancel /></button>
                          </>
                        ) : (
                          <>
                            <button className="btn btn-ghost btn-sm" onClick={() => handleEditMat(mat)}><IconEdit /> Editar</button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteMat(mat.id)}><IconTrash /></button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="add-row">
            <input className="input-erp" placeholder="Cód. item" value={newMat.codigo} onChange={e => setNewMat(p => ({ ...p, codigo: e.target.value }))} onKeyDown={e => e.key === 'Enter' && handleAddMat()} />
            <input className="input-desc" placeholder="Descrição do material" value={newMat.descricao} onChange={e => setNewMat(p => ({ ...p, descricao: e.target.value }))} onKeyDown={e => e.key === 'Enter' && handleAddMat()} />
            <input className="input-qty" placeholder="Qtd. por peça" value={newMat.quantidade} onChange={e => setNewMat(p => ({ ...p, quantidade: e.target.value }))} onKeyDown={e => e.key === 'Enter' && handleAddMat()} />
            <button className="btn btn-primary" onClick={handleAddMat}><IconPlus /> Adicionar</button>
          </div>
        </div>
      )}
    </div>
  );
}

// MAIN APP
export default function Home() {
  const [module, setModule] = useState("lancamentos");
  const [referencias, setReferencias] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [materiais, setMateriais] = useState({});

  useEffect(() => {
    fetch('/api/referencias')
      .then(res => res.json())
      .then(data => setReferencias(data));
  }, []);

  const handleLogout = () => {
    router.post('/logout');
  };

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        <div className={`overlay ${sidebarOpen ? "open" : ""}`} onClick={() => setSidebarOpen(false)} />
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="sidebar-logo">
            <div className="logo-tag">Sempre inovando.</div>
            <div className="logo-name">BS <span>Toys</span></div>
          </div>
          <nav className="sidebar-nav">
            <div className="nav-section">
              <div className="nav-section-title">Módulos</div>
              <button className={`nav-item ${module === "lancamentos" ? "active" : ""}`} onClick={() => { setModule("lancamentos"); setSidebarOpen(false); }}>
                <span className="nav-icon"><IconLaunch /></span>
                Lançamentos
              </button>
              <button className={`nav-item ${module === "cadastros" ? "active" : ""}`} onClick={() => { setModule("cadastros"); setSidebarOpen(false); }}>
                <span className="nav-icon"><IconSearch /></span>
                Cadastros Ref.
              </button>
              <button
  className={`nav-item ${module === "retorno" ? "active" : ""}`}
  onClick={() => { setModule("retorno"); setSidebarOpen(false); }}
>
  <span className="nav-icon"><IconRetorno /></span>
  Retorno Montagem
</button>
            </div>
          </nav>
          <div className="sidebar-footer">
            v1.0 · BS Toys © 2026
          </div>
        </aside>

        <main className="main">
          <div className="topbar">
            <button className="hamburger" onClick={() => setSidebarOpen(o => !o)}>
              {sidebarOpen ? <IconClose /> : <IconHamburger />}
            </button>
            <div className="topbar-title">
{module === "lancamentos"
  ? "Módulo 1 — Lançamentos"
  : module === "cadastros"
    ? "Módulo 2 — Cadastros Ref."
    : "Módulo 3 — Retorno Montagem"}
            </div>
            <div className="topbar-right">
              <div className="topbar-badge">
                <span className="status-dot"></span>
                Sistema Ativo
              </div>
              <button className="btn-logout" onClick={handleLogout}>
                <IconLogout /> Sair
              </button>
            </div>
          </div>

<div className="content">
  <div style={{ display: module === "lancamentos" ? "block" : "none" }}>
    <Lancamentos referencias={referencias} setReferencias={setReferencias} />
  </div>
  <div style={{ display: module === "cadastros" ? "block" : "none" }}>
    <CadastrosRef referencias={referencias} materiais={materiais} setMateriais={setMateriais} />
  </div>
  <div style={{ display: module === "retorno" ? "block" : "none" }}>
    <RetornoMontagem referencias={referencias} />
  </div>
</div>

        </main>
      </div>
    </>
  );

}
