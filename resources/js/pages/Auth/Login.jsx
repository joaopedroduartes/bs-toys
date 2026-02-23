import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const loginStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #0a1628;
  }

  .login-page {
    height: 100vh;
    background: #0a1628;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Barlow', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .login-bg-glow {
    position: absolute;
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(240,165,0,0.06) 0%, transparent 70%);
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .login-bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(30,58,110,0.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(30,58,110,0.3) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  .login-card {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 420px;
    padding: 48px 40px;
    background: #0f2040;
    border: 1px solid #1e3a6e;
    border-radius: 16px;
    box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(240,165,0,0.05);
    animation: loginFadeIn 0.4s ease;
    margin: 16px;
  }

  @keyframes loginFadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .login-logo-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
  }

  .login-logo-tag {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #f0a500;
    margin-bottom: 6px;
  }

  .login-logo-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 42px;
    font-weight: 700;
    color: #dce8f8;
    letter-spacing: 2px;
    line-height: 1;
  }

  .login-logo-name span { color: #f0a500; }

  .login-tagline {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #3a5a8a;
    margin-top: 6px;
  }

  .login-divider {
    height: 1px;
    background: #1e3a6e;
    margin-bottom: 28px;
  }

  .login-heading {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #6b8db5;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 24px;
    text-align: center;
  }

  .login-field { margin-bottom: 16px; }

  .login-label {
    display: block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #6b8db5;
    margin-bottom: 8px;
  }

  .login-input-wrap { position: relative; }

  .login-input {
    width: 100%;
    background: #162a52;
    border: 1px solid #1e3a6e;
    border-radius: 8px;
    color: #dce8f8;
    padding: 12px 16px;
    font-size: 14px;
    font-family: 'Barlow', sans-serif;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
    box-sizing: border-box;
  }

  .login-input.has-toggle { padding-right: 44px; }

  .login-input:focus {
    border-color: #f0a500;
    box-shadow: 0 0 0 3px rgba(240,165,0,0.1);
  }

  .login-input::placeholder { color: #3a5a8a; }

  .login-input.error { border-color: #e05c1a; }

  .login-toggle-pw {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #3a5a8a;
    padding: 4px;
    display: flex;
    align-items: center;
    transition: color 0.15s;
  }

  .login-toggle-pw:hover { color: #6b8db5; }

  .login-error {
    background: rgba(224,92,26,0.1);
    border: 1px solid rgba(224,92,26,0.3);
    border-radius: 6px;
    color: #e05c1a;
    font-size: 13px;
    padding: 10px 14px;
    margin-bottom: 16px;
    text-align: center;
  }

  .login-field-error {
    color: #e05c1a;
    font-size: 12px;
    margin-top: 6px;
  }

  .login-btn {
    width: 100%;
    background: #f0a500;
    color: #000;
    border: none;
    border-radius: 8px;
    padding: 13px;
    font-size: 14px;
    font-weight: 700;
    font-family: 'Barlow', sans-serif;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .login-btn:hover:not(:disabled) { background: #d4920a; }
  .login-btn:active:not(:disabled) { transform: scale(0.99); }
  .login-btn:disabled { opacity: 0.6; cursor: not-allowed; }

  .login-spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(0,0,0,0.3);
    border-top-color: #000;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  .login-footer {
    text-align: center;
    margin-top: 24px;
    font-size: 12px;
    color: #3a5a8a;
  }
`;

const IconEye = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const IconEyeOff = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

export default function Login() {
  const [showPw, setShowPw] = useState(false);

  const { data, setData, post, processing, errors } = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    post("/login");
  };

  return (
    <>
      <style>{loginStyles}</style>
      <div className="login-page">
        <div className="login-bg-grid" />
        <div className="login-bg-glow" />

        <div className="login-card">
          <div className="login-logo-wrap">
            <div className="login-logo-tag">Sempre inovando.</div>
            <div className="login-logo-name">BS <span>Toys</span></div>
            <div className="login-tagline">Sistema de Gestão</div>
          </div>

          <div className="login-divider" />
          <div className="login-heading">Acesso ao Sistema</div>

          <div className="login-field">
            <label className="login-label">Nome de usuário</label>
            <input
              className={`login-input ${errors.username ? "error" : ""}`}
              type="text"
              placeholder="seu_usuario"
              value={data.username}
              onChange={e => setData("username", e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
              autoComplete="username"
            />
            {errors.username && <div className="login-field-error">{errors.username}</div>}
          </div>

          <div className="login-field">
            <label className="login-label">Senha</label>
            <div className="login-input-wrap">
              <input
                className={`login-input has-toggle ${errors.password ? "error" : ""}`}
                type={showPw ? "text" : "password"}
                placeholder="••••••••"
                value={data.password}
                onChange={e => setData("password", e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                autoComplete="current-password"
              />
              <button
                className="login-toggle-pw"
                onClick={() => setShowPw(p => !p)}
                type="button"
                tabIndex={-1}
              >
                {showPw ? <IconEyeOff /> : <IconEye />}
              </button>
            </div>
            {errors.password && <div className="login-field-error">{errors.password}</div>}
          </div>

          <button className="login-btn" onClick={handleSubmit} disabled={processing}>
            {processing ? <><div className="login-spinner" /> Entrando...</> : "Entrar"}
          </button>

          <div className="login-footer">BS Toys © 2025 · v1.0</div>
        </div>
      </div>
    </>
  );
}
