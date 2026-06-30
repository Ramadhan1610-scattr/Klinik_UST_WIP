import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users, validateLogin } from "../data/users";

/* ── SVG Icons ─────────────────────────────────────────────────────────── */
const IconAdmin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const IconDokter = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    <circle cx="12" cy="8" r="3" strokeLinecap="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 18.75a6 6 0 0112 0" />
  </svg>
);

const IconKasir = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
  </svg>
);

const IconKepala = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);

const IconMedical = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8 text-blue-400 opacity-60">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const IconEye = ({ show }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    {show ? (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </>
    ) : (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    )}
  </svg>
);

const IconArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-slate-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-slate-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

/* ── Role Card Config ───────────────────────────────────────────────────── */
const ROLES = [
  {
    role: "Admin",
    icon: <IconAdmin />,
    desc: "Manajemen sistem & pengguna",
    gradient: "from-blue-500 to-blue-700",
    shadow: "shadow-blue-200",
    ring: "ring-blue-500",
    bg: "bg-blue-50",
    text: "text-blue-700",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    role: "Dokter",
    icon: <IconDokter />,
    desc: "Rekam medis & pasien",
    gradient: "from-emerald-500 to-emerald-700",
    shadow: "shadow-emerald-200",
    ring: "ring-emerald-500",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    role: "Kasir",
    icon: <IconKasir />,
    desc: "Pembayaran & transaksi",
    gradient: "from-amber-500 to-amber-600",
    shadow: "shadow-amber-200",
    ring: "ring-amber-500",
    bg: "bg-amber-50",
    text: "text-amber-700",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    role: "Kepala Klinik",
    icon: <IconKepala />,
    desc: "Laporan & analitik klinik",
    gradient: "from-purple-500 to-purple-700",
    shadow: "shadow-purple-200",
    ring: "ring-purple-500",
    bg: "bg-purple-50",
    text: "text-purple-700",
    iconBg: "bg-purple-100 text-purple-600",
  },
];

/* ── Main Component ─────────────────────────────────────────────────────── */
export default function LoginPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1 = pilih role, 2 = form login
  const [selectedRole, setSelectedRole] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const selectedConfig = ROLES.find((r) => r.role === selectedRole);

  /* Pilih role → lanjut ke step 2 */
  const handleSelectRole = (role) => {
    setSelectedRole(role);
    setUsername("");
    setPassword("");
    setError("");
    setStep(2);
  };

  /* Kembali ke pemilihan role */
  const handleBack = () => {
    setStep(1);
    setSelectedRole(null);
    setError("");
  };

  /* Submit login */
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulasi delay jaringan kecil
    setTimeout(() => {
      const user = validateLogin(selectedRole, username, password);
      if (user) {
        localStorage.setItem(
          "klinik_user",
          JSON.stringify({ role: user.role, username: user.username })
        );
        navigate(user.route);
      } else {
        setError("Username atau password salah");
        setIsLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-blue-600 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-indigo-500 opacity-15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-[-120px] w-64 h-64 bg-cyan-400 opacity-10 rounded-full blur-3xl pointer-events-none" />

      {/* Cross pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.07) 30px, rgba(255,255,255,0.07) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,0.07) 30px, rgba(255,255,255,0.07) 31px)",
        }}
      />

      <div className="relative w-full max-w-4xl">
        {/* ── Header / Brand ─────────────────────────────────────── */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-4 shadow-lg">
            <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9">
              <rect x="9" y="2" width="6" height="20" rx="1" fill="#60a5fa" />
              <rect x="2" y="9" width="20" height="6" rx="1" fill="#93c5fd" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Dashboard Klinik UST
          </h1>
          <p className="text-blue-300 mt-1 text-sm">
            Sistem Informasi Manajemen Klinik
          </p>
        </div>

        {/* ── Main Card ──────────────────────────────────────────── */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            {/* ── Left Panel ─────────────────────────────────────── */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:w-72 flex flex-col justify-between">
              <div>
                <h2 className="text-white font-semibold text-lg mb-1">
                  {step === 1 ? "Selamat Datang" : `Masuk sebagai`}
                </h2>
                {step === 2 && selectedConfig && (
                  <p className="text-blue-200 font-bold text-xl">{selectedRole}</p>
                )}
                <p className="text-blue-200 text-sm mt-3 leading-relaxed">
                  {step === 1
                    ? "Pilih peran Anda untuk melanjutkan ke sistem dashboard klinik."
                    : "Masukkan kredensial Anda untuk mengakses dashboard."}
                </p>

                {/* Step indicator */}
                <div className="flex items-center gap-2 mt-6">
                  <div className={`h-2 rounded-full transition-all duration-300 ${step === 1 ? "w-8 bg-white" : "w-4 bg-blue-400"}`} />
                  <div className={`h-2 rounded-full transition-all duration-300 ${step === 2 ? "w-8 bg-white" : "w-4 bg-blue-400"}`} />
                </div>
                <p className="text-blue-300 text-xs mt-2">Langkah {step} dari 2</p>
              </div>

              {/* Demo credentials box */}
              <div className="mt-8 bg-white/10 rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-white text-xs font-semibold uppercase tracking-wider">
                    Akun Demo untuk Testing
                  </p>
                </div>
                <div className="space-y-2">
                  {users.map((u) => (
                    <div key={u.role} className="text-xs text-blue-100">
                      <span className="text-white font-medium">{u.role}:</span>{" "}
                      <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-blue-100">
                        {u.username}
                      </span>{" "}
                      /{" "}
                      <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-blue-100">
                        {u.password}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right Panel ────────────────────────────────────── */}
            <div className="flex-1 p-8 lg:p-10">

              {/* STEP 1: Pilih Role */}
              {step === 1 && (
                <div>
                  <h3 className="text-slate-700 font-bold text-xl mb-1">
                    Pilih Peran Anda
                  </h3>
                  <p className="text-slate-400 text-sm mb-7">
                    Klik salah satu kartu di bawah sesuai peran Anda
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ROLES.map((r) => (
                      <button
                        key={r.role}
                        id={`role-btn-${r.role.toLowerCase().replace(" ", "-")}`}
                        onClick={() => handleSelectRole(r.role)}
                        className="group relative text-left p-5 rounded-2xl border-2 border-slate-100 hover:border-transparent bg-white hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden"
                      >
                        {/* hover gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${r.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-200 rounded-2xl`} />

                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${r.iconBg} group-hover:scale-110 transition-transform duration-200`}>
                          {r.icon}
                        </div>
                        <h4 className={`font-bold text-slate-700 group-hover:${r.text} transition-colors`}>
                          {r.role}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">{r.desc}</p>

                        {/* Arrow indicator */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-200">
                          <svg viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ${r.text}`}>
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Form Login */}
              {step === 2 && selectedConfig && (
                <div>
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 mb-6 transition-colors group"
                  >
                    <span className="group-hover:-translate-x-0.5 transition-transform">
                      <IconArrowLeft />
                    </span>
                    Ganti peran
                  </button>

                  {/* Role badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-5 ${selectedConfig.bg} ${selectedConfig.text}`}>
                    <span className="w-5 h-5">{selectedConfig.icon}</span>
                    {selectedRole}
                  </div>

                  <h3 className="text-slate-700 font-bold text-xl mb-1">
                    Masuk ke Dashboard
                  </h3>
                  <p className="text-slate-400 text-sm mb-7">
                    Gunakan kredensial akun {selectedRole} Anda
                  </p>

                  <form onSubmit={handleLogin} className="space-y-5" id="login-form">
                    {/* Username */}
                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-1.5" htmlFor="username">
                        Username
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2">
                          <IconUser />
                        </span>
                        <input
                          id="username"
                          type="text"
                          autoComplete="username"
                          autoFocus
                          value={username}
                          onChange={(e) => {
                            setUsername(e.target.value);
                            setError("");
                          }}
                          placeholder={`Username ${selectedRole.toLowerCase()}`}
                          className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-xl text-slate-700 placeholder-slate-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-slate-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-1.5" htmlFor="password">
                        Password
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2">
                          <IconLock />
                        </span>
                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setError("");
                          }}
                          placeholder="••••••••"
                          className="w-full pl-10 pr-12 py-3 border-2 border-slate-200 rounded-xl text-slate-700 placeholder-slate-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-slate-50 focus:bg-white"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                          tabIndex={-1}
                        >
                          <IconEye show={showPassword} />
                        </button>
                      </div>
                    </div>

                    {/* Error message */}
                    {error && (
                      <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm animate-pulse">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        {error}
                      </div>
                    )}

                    {/* Submit button */}
                    <button
                      id="btn-login-submit"
                      type="submit"
                      disabled={isLoading || !username || !password}
                      className={`w-full py-3 rounded-xl text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg
                        ${isLoading || !username || !password
                          ? "bg-slate-300 cursor-not-allowed shadow-none"
                          : `bg-gradient-to-r ${selectedConfig.gradient} hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0`
                        }
                      `}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                          Memverifikasi...
                        </span>
                      ) : (
                        "Masuk ke Dashboard"
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-blue-400/60 text-xs mt-6">
          &copy; {new Date().getFullYear()} Klinik UST — Sistem Informasi Manajemen Klinik
        </p>
      </div>
    </div>
  );
}
