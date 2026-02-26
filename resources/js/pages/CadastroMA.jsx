import React, { useState, useEffect } from "react";

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

export default function CadastroMA() {
  const [itens, setItens] = useState([]);
  const [newItem, setNewItem] = useState({ cod_prod: "", cod_erp: "", descricao: "" });
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetch('/api/materiais-auxiliares')
      .then(res => res.json())
      .then(data => setItens(data));
  }, []);

  const handleAdd = () => {
    if (!newItem.cod_prod.trim() || !newItem.cod_erp.trim() || !newItem.descricao.trim()) return;
    fetch('/api/materiais-auxiliares', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content
      },
      body: JSON.stringify(newItem)
    })
      .then(res => res.json())
      .then(data => {
        setItens(prev => [...prev, data]);
        setNewItem({ cod_prod: "", cod_erp: "", descricao: "" });
      });
  };

  const handleEdit = (item) => {
    setEditing(item.id);
    setEditData({ cod_prod: item.cod_prod, cod_erp: item.cod_erp, descricao: item.descricao });
  };

  const handleSave = (id) => {
    fetch(`/api/materiais-auxiliares/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content
      },
      body: JSON.stringify(editData)
    })
      .then(res => res.json())
      .then(data => {
        setItens(prev => prev.map(i => i.id === id ? data : i));
        setEditing(null);
      });
  };

  const handleDelete = (id) => {
    fetch(`/api/materiais-auxiliares/${id}`, {
      method: 'DELETE',
      headers: { 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content }
    }).then(() => {
      setItens(prev => prev.filter(i => i.id !== id));
    });
  };

  return (
    <div>
      <div className="module-header">
        <div className="module-title">
          <div className="module-number">2</div>
          Cadastro de M.A
        </div>
        <div className="module-desc">Cadastro global de Materiais Auxiliares</div>
      </div>

      <div className="table-card">
        <div className="table-toolbar">
          <div className="table-info">
            <strong>{itens.length}</strong> material{itens.length !== 1 ? "is" : ""} cadastrado{itens.length !== 1 ? "s" : ""}
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style={{ width: 40 }}>#</th>
              <th style={{ width: 120 }}>Cód. Prod.</th>
              <th style={{ width: 120 }}>Cód. ERP</th>
              <th>Descrição do Produto</th>
              <th style={{ width: 180 }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {itens.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  <div className="empty-state">
                    <div className="empty-icon">🧰</div>
                    <div className="empty-text">Nenhum material auxiliar cadastrado</div>
                    <div className="empty-sub">Adicione itens usando o formulário abaixo</div>
                  </div>
                </td>
              </tr>
            ) : (
              itens.map((item, i) => (
                <tr key={item.id}>
                  <td className="row-number">{String(i + 1).padStart(2, '0')}</td>
                  <td>
                    <input
                      className="cell-input"
                      value={editing === item.id ? editData.cod_prod : item.cod_prod}
                      disabled={editing !== item.id}
                      onChange={e => setEditData(p => ({ ...p, cod_prod: e.target.value }))}
                    />
                  </td>
                  <td>
                    <input
                      className="cell-input"
                      value={editing === item.id ? editData.cod_erp : item.cod_erp}
                      disabled={editing !== item.id}
                      onChange={e => setEditData(p => ({ ...p, cod_erp: e.target.value }))}
                    />
                  </td>
                  <td>
                    <input
                      className="cell-input"
                      value={editing === item.id ? editData.descricao : item.descricao}
                      disabled={editing !== item.id}
                      onChange={e => setEditData(p => ({ ...p, descricao: e.target.value }))}
                    />
                  </td>
                  <td>
                    <div className="actions-cell">
                      {editing === item.id ? (
                        <>
                          <button className="btn btn-success btn-sm" onClick={() => handleSave(item.id)}><IconSave /> Salvar</button>
                          <button className="btn btn-ghost btn-sm" onClick={() => setEditing(null)}><IconCancel /></button>
                        </>
                      ) : (
                        <>
                          <button className="btn btn-ghost btn-sm" onClick={() => handleEdit(item)}><IconEdit /> Editar</button>
                          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}><IconTrash /></button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* FORMULÁRIO DE CADASTRO */}
        <div className="add-row">
          <input
            style={{ width: 110 }}
            placeholder="Cód. Prod."
            value={newItem.cod_prod}
            onChange={e => setNewItem(p => ({ ...p, cod_prod: e.target.value }))}
            onKeyDown={e => e.key === 'Enter' && handleAdd()}
          />
          <input
            style={{ width: 110 }}
            placeholder="Cód. ERP"
            value={newItem.cod_erp}
            onChange={e => setNewItem(p => ({ ...p, cod_erp: e.target.value }))}
            onKeyDown={e => e.key === 'Enter' && handleAdd()}
          />
          <input
            className="input-desc"
            placeholder="Descrição do produto"
            value={newItem.descricao}
            onChange={e => setNewItem(p => ({ ...p, descricao: e.target.value }))}
            onKeyDown={e => e.key === 'Enter' && handleAdd()}
          />
          <button className="btn btn-primary" onClick={handleAdd}><IconPlus /> Adicionar</button>
        </div>
      </div>
    </div>
  );
}
