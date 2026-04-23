import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../../context/AuthContext';

// VITE_API_URL is like "http://localhost:5000/api"
// The settings route is at /admin/header-visibility (not under /api)
// So we derive the base by stripping the trailing /api segment
const RAW = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_BASE = RAW.replace(/\/api$/, ''); // → "http://localhost:5000"

// ─── Toggle Row ──────────────────────────────────────────────────────────────
const ToggleRow = ({ id, label, desc, checked, onChange, disabled = false }) => (
  <div className={`flex items-start justify-between py-5 px-6 bg-gray-50 rounded-2xl border border-gray-100 transition-opacity ${disabled ? 'opacity-40 pointer-events-none' : ''}`}>
    <div>
      <div className="font-semibold text-gray-800 text-[15px]">{label}</div>
      {desc && <div className="text-gray-400 text-[13px] mt-0.5">{desc}</div>}
    </div>
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${checked ? 'bg-blue-600' : 'bg-gray-300'}`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${checked ? 'translate-x-5' : 'translate-x-0'}`}
      />
    </button>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const AdminSettings = () => {
  const { user } = useAuth();

  const [settings, setSettings] = useState({
    showHeader: true,
    showLogo: true,
    allowModelSearch: true,
    allowCompleteSetup: true,
    allowInstallationFailed: true,
  });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const debounceRef = useRef(null);

  // ── Fetch current settings on mount ──────────────────────────────────────
  useEffect(() => {
    fetch(`${API_BASE}/admin/header-visibility`)
      .then(r => r.json())
      .then(data => {
        setSettings({
          showHeader:              data.showHeader !== false,
          showLogo:                data.showLogo !== false,
          allowModelSearch:        data.allowModelSearch !== false,
          allowCompleteSetup:      data.allowCompleteSetup !== false,
          allowInstallationFailed: data.allowInstallationFailed === true,
        });
        setLoading(false);
      })
      .catch(() => {
        setStatus({ type: 'error', msg: 'Failed to load settings from server.' });
        setLoading(false);
      });
  }, []);

  // ── Auto-save with debounce ───────────────────────────────────────────────
  const handleChange = (key, value) => {
    const next = { ...settings, [key]: value };
    setSettings(next);
    setStatus({ type: '', msg: '' });
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => saveSettings(next), 800);
  };

  const saveSettings = async (s) => {
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE}/admin/header-visibility`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify(s),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', msg: '✓ Settings saved successfully.' });
      } else {
        setStatus({ type: 'error', msg: data.message || 'Failed to save settings.' });
      }
    } catch {
      setStatus({ type: 'error', msg: 'Network error. Could not save settings.' });
    } finally {
      setSaving(false);
    }
  };

  // ── Skeleton while loading ────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="space-y-4 animate-pulse pb-20 max-w-2xl">
        <div className="h-8 bg-gray-100 rounded-2xl w-1/3" />
        <div className="h-4 bg-gray-100 rounded-xl w-1/2" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-16 bg-gray-100 rounded-2xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20 max-w-2xl">
      
      {/* ── Header ── */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Setup Guide Settings</h1>
          <p className="text-gray-400 text-sm mt-1">
            Control visibility and behaviour of the printer setup guide flow for all users.
          </p>
        </div>
        {saving && (
          <span className="flex items-center gap-2 text-blue-600 text-sm font-medium">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Saving…
          </span>
        )}
      </div>

      {/* ── Status banner ── */}
      {status.msg && (
        <div className={`px-5 py-3 rounded-xl text-sm font-medium ${
          status.type === 'success'
            ? 'bg-green-50 text-green-700 border border-green-200'
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {status.msg}
        </div>
      )}

      {/* ── Section: Header & Branding ── */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">
          Header &amp; Branding
        </h2>
        <ToggleRow
          id="showHeader"
          label="Show Header"
          desc="Display the site-wide navigation header to all users."
          checked={settings.showHeader}
          onChange={v => handleChange('showHeader', v)}
        />
        <ToggleRow
          id="showLogo"
          label="Show Brand Logo in Header"
          desc="Show or hide the brand logo inside the setup guide header."
          checked={settings.showLogo}
          onChange={v => handleChange('showLogo', v)}
          disabled={!settings.showHeader}
        />
      </div>

      {/* ── Section: Setup Flow ── */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">
          Setup Flow Controls
        </h2>
        <ToggleRow
          id="allowModelSearch"
          label="Allow Model Search &amp; Next Button"
          desc="Let users search for their printer model and proceed to the next step."
          checked={settings.allowModelSearch}
          onChange={v => handleChange('allowModelSearch', v)}
        />
        <ToggleRow
          id="allowCompleteSetup"
          label="Show Complete Setup Page"
          desc="Display the full brand-specific setup completion page (/complete-setup/:brand)."
          checked={settings.allowCompleteSetup}
          onChange={v => handleChange('allowCompleteSetup', v)}
        />
        <ToggleRow
          id="allowInstallationFailed"
          label="Show Installation Error Page"
          desc="Allow the installation failed (error 1603) page to be shown to users."
          checked={settings.allowInstallationFailed}
          onChange={v => handleChange('allowInstallationFailed', v)}
        />
      </div>

      {/* ── Info note ── */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl px-6 py-4 text-[13px] text-blue-700 leading-relaxed">
        <strong>Note:</strong> Changes are saved automatically within ~1 second and take effect for
        all users within ~10 seconds (the client polling interval).
      </div>
    </div>
  );
};

export default AdminSettings;
