import React, { useState, useEffect } from "react";

const printStyles = `
  @media print {
    body * { visibility: hidden; }
    .print-area, .print-area * { visibility: visible; }
    .print-area { position: fixed; top: 0; left: 0; width: 100%; }
    .no-print { display: none !important; }
  }
`;

export default function RetornoMontagem({ referencias }) {
  const [retornos, setRetornos] = useState([]);
  const [visiveis, setVisiveis] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ montagem: "", num_omr: "", num_pedido: "", qtd_caixas: "", responsavel: "" });
  const [copiado, setCopiado] = useState(null);

  useEffect(() => {
  fetch('/api/retorno-montagem').then(res => res.json()).then(data => {
    setRetornos(data);
    setVisiveis([]);  // ← começa vazio, só aparece ao lançar
  });
}, []);

  const filtered = referencias.filter(r =>
    (r.ref && r.ref.toLowerCase().includes(search.toLowerCase())) ||
    r.erp.toLowerCase().includes(search.toLowerCase()) ||
    r.desc.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (ref) => { setSelected(ref); setSearch(ref.ref + " — " + ref.desc); };

  const qtdPecas = selected ? Number(selected.qty) : 0;
  const qtdCaixas = Number(form.qtd_caixas) || 0;
  const totalPecas = qtdPecas * qtdCaixas;

  const handleAdd = () => {
    if (!selected || !form.montagem.trim() || !form.num_omr.trim() || !form.num_pedido.trim() || !form.qtd_caixas || !form.responsavel.trim()) return;
    fetch('/api/retorno-montagem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content },
      body: JSON.stringify({ referencia_id: selected.id, montagem: form.montagem, num_omr: form.num_omr, num_pedido: form.num_pedido, qtd_pecas: totalPecas, qtd_caixas: form.qtd_caixas, responsavel: form.responsavel })
    }).then(res => res.json()).then(data => {
      setRetornos(prev => [data, ...prev]);
      setVisiveis(prev => [data.id, ...prev]);
      setForm({ montagem: "", num_omr: "", num_pedido: "", qtd_caixas: "", responsavel: "" });
      setSelected(null); setSearch("");
    });
  };

  const handleLimpar = (id) => setVisiveis(prev => prev.filter(v => v !== id));

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('pt-BR');
  const border = "1px solid var(--border)";
  const retornosVisiveis = retornos.filter(r => visiveis.includes(r.id));

  // ── FUNÇÃO COPIAR CARD ──────────────────────────────────────────────────────
  // Substitua os valores abaixo pelas cores reais do seu CSS:
  //   --accent  → cor amarela/laranja do tema
  //   --success → cor verde do tema
  const ACCENT       = "#f5c518"; // amarelo do cabeçalho
  const SUCCESS      = "#4caf50"; // verde Total de Peças
  const BORDER_COLOR = "#cccccc"; // borda neutra para email
  const TEXT2        = "#888888"; // labels cinza
  const BG_LABEL     = "#f5f5f5"; // fundo leve nas células de label

  const copiarCard = (r) => {
    const html = `
      <table style="border-collapse:collapse;font-family:Arial,sans-serif;width:480px;border:1px solid ${BORDER_COLOR};">
        <tr>
          <td colspan="3" style="background:${ACCENT};color:#000;padding:10px 14px;font-weight:700;font-size:14px;text-align:center;text-transform:uppercase;letter-spacing:1px;">
            ${r.montagem}
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:8px 12px;border:1px solid ${BORDER_COLOR};width:50%;background:#fff;">
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;color:${TEXT2};margin-bottom:3px;">Responsável</div>
            <div style="font-size:13px;font-weight:600;color:#111;">${r.responsavel}</div>
          </td>
          <td style="padding:8px 12px;border:1px solid ${BORDER_COLOR};background:#fff;">
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;color:${TEXT2};margin-bottom:3px;">Data</div>
            <div style="font-size:13px;font-weight:600;color:#111;">${formatDate(r.created_at)}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 10px;border:1px solid ${BORDER_COLOR};width:80px;text-align:center;background:#fff;">
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;color:${TEXT2};margin-bottom:3px;">Nº Ref.</div>
            <div style="font-size:13px;font-weight:700;color:#111111;">${r.referencia?.ref || r.referencia?.erp}</div>
          </td>
          <td style="padding:8px 10px;border:1px solid ${BORDER_COLOR};text-align:center;background:#fff;">
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;color:${TEXT2};margin-bottom:3px;">Descrição</div>
            <div style="font-size:12px;font-weight:600;color:#111;">${r.referencia?.desc}</div>
          </td>
          <td style="padding:8px 8px;border:1px solid ${BORDER_COLOR};width:65px;text-align:center;background:#fff;">
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;color:${TEXT2};margin-bottom:3px;">Pçs/Cx</div>
            <div style="font-size:13px;font-weight:700;color:#111;">${r.referencia?.qty}</div>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:8px 12px;border:1px solid ${BORDER_COLOR};background:#fff;">
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;color:${TEXT2};margin-bottom:3px;">Quant. de CX</div>
            <div style="font-size:18px;font-weight:700;color:#111;">${r.qtd_caixas}</div>
          </td>
          <td style="padding:8px 12px;border:1px solid ${BORDER_COLOR};background:#fff;">
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;color:${TEXT2};margin-bottom:3px;">Total de Peças</div>
            <div style="font-size:18px;font-weight:700;color:${SUCCESS};">${r.qtd_pecas}</div>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:8px 12px;border:1px solid ${BORDER_COLOR};background:#fff;">
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;color:${TEXT2};margin-bottom:3px;">Nº Pedido</div>
            <div style="font-size:13px;font-weight:600;color:#111;">${r.num_pedido}</div>
          </td>
          <td style="padding:8px 12px;border:1px solid ${BORDER_COLOR};background:#fff;">
            <div style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;color:${TEXT2};margin-bottom:3px;">Nº OMR</div>
            <div style="font-size:13px;font-weight:600;color:#111;">${r.num_omr}</div>
          </td>
        </tr>
      </table>
    `;

    const blob = new Blob([html], { type: "text/html" });
    const clipboardItem = new ClipboardItem({ "text/html": blob });
    navigator.clipboard.write([clipboardItem]).then(() => {
      setCopiado(r.id);
      setTimeout(() => setCopiado(null), 2000);
    });
  };
  // ───────────────────────────────────────────────────────────────────────────

  return (
    <div>
      <style>{printStyles}</style>

      <div className="module-header">
        <div className="module-title"><div className="module-number">3</div>Retorno Montagem</div>
        <div className="module-desc">Registro de retorno de produto acabado das montagens internas</div>
      </div>

      {/* LAYOUT PRINCIPAL - duas colunas alinhadas */}
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>

        {/* COLUNA ESQUERDA - Formulário + Cards */}
        <div style={{ width: "50%", display: "flex", flexDirection: "column", gap: 16 }}>

          {/* FORMULÁRIO */}
          <div className="table-card no-print">
            <div className="table-toolbar" style={{ justifyContent: "flex-start" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text2)", letterSpacing: 1, textTransform: "uppercase" }}>Novo Lançamento</span>
            </div>
            <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text2)" }}>Montagem</label>
                <input className="search-input" placeholder="Nome da montagem..." value={form.montagem} onChange={e => setForm(p => ({ ...p, montagem: e.target.value }))} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6, position: "relative" }}>
                <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text2)" }}>Referência</label>
                <input className="search-input" placeholder="Pesquisar por Ref. ou descrição..." value={search} onChange={e => { setSearch(e.target.value); setSelected(null); }} />
                {search && !selected && filtered.length > 0 && (
                  <div style={{ position: "absolute", top: 70, left: 0, right: 0, background: "var(--surface)", border, borderRadius: 8, zIndex: 10, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                    {filtered.map(ref => (
                      <div key={ref.id} onClick={() => handleSelect(ref)}
                        style={{ padding: "12px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, borderBottom: border }}
                        onMouseEnter={e => e.currentTarget.style.background = "var(--surface2)"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                        <span className="product-erp">{ref.ref}</span>
                        <span style={{ fontSize: 14 }}>{ref.desc}</span>
                        <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--text2)" }}>{ref.qty} pçs/cx</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { label: "Nº OMR", key: "num_omr", placeholder: "Nº OMR" },
                  { label: "Nº Pedido", key: "num_pedido", placeholder: "Nº Pedido" },
                  { label: "Quant. de CX", key: "qtd_caixas", placeholder: "Qtd. caixas", type: "number" },
                  { label: "Responsável", key: "responsavel", placeholder: "Nome do responsável" },
                ].map(({ label, key, placeholder, type }) => (
                  <div key={key} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text2)" }}>{label}</label>
                    <input className="search-input" type={type || "text"} placeholder={placeholder} value={form[key]} onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))} />
                  </div>
                ))}
              </div>

              {selected && (
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ flex: 1, background: "var(--surface2)", border, borderRadius: 8, padding: "10px 14px" }}>
                    <div style={{ fontSize: 10, color: "var(--text2)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Qtd. Peças/Cx</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "var(--accent)" }}>{qtdPecas}</div>
                  </div>
                  <div style={{ flex: 1, background: "var(--surface2)", border, borderRadius: 8, padding: "10px 14px" }}>
                    <div style={{ fontSize: 10, color: "var(--text2)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Total de Peças</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "var(--success)" }}>{totalPecas}</div>
                  </div>
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="btn btn-primary" style={{ width: "25%", justifyContent: "center" }} onClick={handleAdd}>+ Lançar Retorno</button>
              </div>
            </div>
          </div>

          {/* CARDS DE RETORNO */}
          {retornosVisiveis.length === 0 && retornos.length > 0 ? (
            <div style={{ background: "var(--surface)", border, borderRadius: 8, padding: 24, textAlign: "center", color: "var(--text2)", fontSize: 13 }}>
              Todos os cards foram limpos.
            </div>
          ) : retornosVisiveis.map((r) => (
            <div key={r.id} className="print-area" style={{ border, borderRadius: 8, overflow: "hidden", background: "var(--surface)" }}>
              <div style={{ background: "var(--accent)", color: "#000", padding: "8px 14px", fontFamily: "var(--font-cond)", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", textAlign: "center" }}>
                {r.montagem}
              </div>
              <div style={{ display: "flex", borderBottom: border }}>
                <div style={{ flex: 1, padding: "8px 12px", borderRight: border }}>
                  <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text2)", marginBottom: 2 }}>Responsável</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{r.responsavel}</div>
                </div>
                <div style={{ flex: 1, padding: "8px 12px" }}>
                  <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text2)", marginBottom: 2 }}>Data</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{formatDate(r.created_at)}</div>
                </div>
              </div>
              <div style={{ display: "flex", borderBottom: border }}>
                <div style={{ width: 70, flexShrink: 0, padding: "8px 10px", borderRight: border, textAlign: "center" }}>
                  <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text2)", marginBottom: 2 }}>Nº Ref.</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--accent)" }}>{r.referencia?.ref || r.referencia?.erp}</div>
                </div>
                <div style={{ flex: 1, padding: "8px 10px", borderRight: border, textAlign: "center" }}>
                  <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text2)", marginBottom: 2 }}>Descrição</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text)" }}>{r.referencia?.desc}</div>
                </div>
                <div style={{ width: 60, flexShrink: 0, padding: "8px 8px", textAlign: "center" }}>
                  <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text2)", marginBottom: 2 }}>Pçs/Cx</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{r.referencia?.qty}</div>
                </div>
              </div>
              <div style={{ display: "flex", borderBottom: border }}>
                <div style={{ flex: 1, padding: "8px 12px", borderRight: border }}>
                  <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text2)", marginBottom: 2 }}>Quant. de CX</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text)" }}>{r.qtd_caixas}</div>
                </div>
                <div style={{ flex: 1, padding: "8px 12px" }}>
                  <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text2)", marginBottom: 2 }}>Total de Peças</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "var(--success)" }}>{r.qtd_pecas}</div>
                </div>
              </div>
              <div style={{ display: "flex", borderBottom: border }}>
                <div style={{ flex: 1, padding: "8px 12px", borderRight: border }}>
                  <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text2)", marginBottom: 2 }}>Nº Pedido</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{r.num_pedido}</div>
                </div>
                <div style={{ flex: 1, padding: "8px 12px" }}>
                  <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text2)", marginBottom: 2 }}>Nº OMR</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{r.num_omr}</div>
                </div>
              </div>

              {/* BOTÕES - Copiar + Limpar */}
              <div className="no-print" style={{ padding: "6px 12px", display: "flex", justifyContent: "flex-end", gap: 8 }}>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => copiarCard(r)}
                  style={{ color: copiado === r.id ? "var(--success)" : undefined }}
                >
                  {copiado === r.id ? "✔ Copiado!" : "📋 Copiar"}
                </button>
                <button className="btn btn-ghost btn-sm" onClick={() => handleLimpar(r.id)}>✕ Limpar</button>
              </div>
            </div>
          ))}
        </div>

        {/* COLUNA DIREITA - Resumo permanente */}
        <div style={{ width: "50%" }}>
          <div style={{ border, borderRadius: 8, overflow: "hidden", background: "var(--surface)" }}>
            <div style={{ background: "var(--surface2)", padding: "10px 16px", borderBottom: border, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text2)" }}>Resumo dos Retornos</span>
              <span style={{ fontSize: 11, color: "var(--text2)" }}>{retornos.length} lançamento{retornos.length !== 1 ? "s" : ""}</span>
            </div>
            {retornos.length === 0 ? (
              <div style={{ padding: 24, textAlign: "center", color: "var(--text2)", fontSize: 13 }}>Nenhum retorno ainda.</div>
            ) : (
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "var(--surface2)" }}>
                    {["Nº Pedido", "Nº Ref.", "Qtd. CX", "Total Peças", "Nº OMR"].map(h => (
                      <th key={h} style={{ padding: "8px 12px", fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text2)", borderBottom: border, textAlign: "left" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {retornos.map((r, i) => (
                    <tr key={r.id} style={{ borderBottom: i < retornos.length - 1 ? border : "none" }}>
                      <td style={{ padding: "10px 12px", fontSize: 13, color: "var(--text)" }}>{r.num_pedido}</td>
                      <td style={{ padding: "10px 12px", fontSize: 13, color: "var(--accent)", fontWeight: 700 }}>{r.referencia?.ref || r.referencia?.erp}</td>
                      <td style={{ padding: "10px 12px", fontSize: 13, color: "var(--text)", fontWeight: 600 }}>{r.qtd_caixas}</td>
                      <td style={{ padding: "10px 12px", fontSize: 13, color: "var(--success)", fontWeight: 700 }}>{r.qtd_pecas}</td>
                      <td style={{ padding: "10px 12px", fontSize: 13, color: "var(--text)" }}>{r.num_omr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
