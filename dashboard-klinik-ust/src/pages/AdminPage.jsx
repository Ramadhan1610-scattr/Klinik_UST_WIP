import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { pasienDummy } from "../data/pasien";

/* ── Icons ──────────────────────────────────────────────────────────────── */
const IconDashboard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);
const IconLogout = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
  </svg>
);
const IconPlus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);
const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-slate-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);
const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconTotal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

/* ── Status Badge ───────────────────────────────────────────────────────── */
const StatusBadge = ({ status }) => {
  const map = {
    Menunggu:  { bg: "bg-amber-100",   text: "text-amber-700",   dot: "bg-amber-400",   label: "Menunggu"  },
    Dipanggil: { bg: "bg-blue-100",    text: "text-blue-700",    dot: "bg-blue-500",    label: "Dipanggil" },
    Selesai:   { bg: "bg-emerald-100", text: "text-emerald-700", dot: "bg-emerald-500", label: "Selesai"   },
  };
  const s = map[status] ?? map["Menunggu"];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${s.bg} ${s.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
};

/* ── Summary Card ───────────────────────────────────────────────────────── */
const SummaryCard = ({ label, value, icon, gradient, sub }) => (
  <div className={`relative overflow-hidden rounded-2xl p-5 text-white shadow-lg ${gradient}`}>
    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
    <div className="relative">
      <div className="flex items-start justify-between mb-3">
        <div className="bg-white/20 p-2.5 rounded-xl">{icon}</div>
      </div>
      <p className="text-4xl font-bold">{value}</p>
      <p className="text-sm font-medium mt-1 text-white/80">{label}</p>
      {sub && <p className="text-xs mt-1 text-white/60">{sub}</p>}
    </div>
  </div>
);

/* ── Modal Tambah Pasien ────────────────────────────────────────────────── */
const ModalTambahPasien = ({ onClose, onSubmit, nextNo }) => {
  const [form, setForm] = useState({
    nama: "", tanggal_lahir: "", jenis_kelamin: "Laki-laki", no_kontak: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.nama.trim())         e.nama = "Nama wajib diisi";
    if (!form.tanggal_lahir)       e.tanggal_lahir = "Tanggal lahir wajib diisi";
    if (!form.no_kontak.trim())    e.no_kontak = "Nomor kontak wajib diisi";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const now = new Date();
    const jam = now.toTimeString().slice(0, 5);
    onSubmit({
      id: Date.now(),
      ...form,
      status_antrian: "Menunggu",
      nomor_antrian: nextNo,
      jam_daftar: jam,
    });
    onClose();
  };

  const field = (key) => ({
    value: form[key],
    onChange: (e) => { setForm(f => ({ ...f, [key]: e.target.value })); setErrors(err => ({ ...err, [key]: "" })); },
  });

  const inputClass = (key) =>
    `w-full px-4 py-2.5 border-2 rounded-xl text-slate-700 text-sm focus:outline-none focus:ring-4 transition-all duration-200 bg-slate-50 focus:bg-white ${
      errors[key]
        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
        : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
    }`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal box */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white font-bold text-lg">Daftarkan Pasien Baru</h2>
              <p className="text-blue-200 text-sm mt-0.5">No. antrian: <strong>{nextNo}</strong></p>
            </div>
            <button onClick={onClose} className="text-blue-200 hover:text-white transition-colors p-1">
              <IconClose />
            </button>
          </div>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4" id="form-tambah-pasien">
          {/* Nama */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Nama Lengkap <span className="text-red-500">*</span></label>
            <input id="input-nama" type="text" placeholder="Masukkan nama lengkap" className={inputClass("nama")} {...field("nama")} />
            {errors.nama && <p className="text-red-500 text-xs mt-1">{errors.nama}</p>}
          </div>

          {/* Tanggal Lahir */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Tanggal Lahir <span className="text-red-500">*</span></label>
            <input id="input-tgl-lahir" type="date" className={inputClass("tanggal_lahir")} {...field("tanggal_lahir")} />
            {errors.tanggal_lahir && <p className="text-red-500 text-xs mt-1">{errors.tanggal_lahir}</p>}
          </div>

          {/* Jenis Kelamin */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Jenis Kelamin</label>
            <div className="flex gap-3">
              {["Laki-laki", "Perempuan"].map((jk) => (
                <label key={jk} className="flex-1 cursor-pointer">
                  <input type="radio" name="jenis_kelamin" value={jk} checked={form.jenis_kelamin === jk}
                    onChange={() => setForm(f => ({ ...f, jenis_kelamin: jk }))} className="sr-only" />
                  <div className={`text-center py-2.5 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                    form.jenis_kelamin === jk
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-slate-200 text-slate-500 hover:border-slate-300"
                  }`}>
                    {jk === "Laki-laki" ? "♂ Laki-laki" : "♀ Perempuan"}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* No Kontak */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Nomor Kontak <span className="text-red-500">*</span></label>
            <input id="input-no-kontak" type="tel" placeholder="08xxxxxxxxxx" className={inputClass("no_kontak")} {...field("no_kontak")} />
            {errors.no_kontak && <p className="text-red-500 text-xs mt-1">{errors.no_kontak}</p>}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border-2 border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-colors">
              Batal
            </button>
            <button id="btn-submit-pasien" type="submit"
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              Daftarkan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/* ── Main Page ──────────────────────────────────────────────────────────── */
export default function AdminPage() {
  const navigate = useNavigate();
  const userRaw  = localStorage.getItem("klinik_user");
  const user     = userRaw ? JSON.parse(userRaw) : { role: "Admin", username: "admin" };

  const [pasienList, setPasienList] = useState(pasienDummy);
  const [searchQuery, setSearchQuery]     = useState("");
  const [showModal, setShowModal]         = useState(false);
  const [sidebarOpen, setSidebarOpen]     = useState(false);

  /* ── Computed ── */
  const totalPasien   = pasienList.length;
  const menunggu      = pasienList.filter(p => p.status_antrian === "Menunggu").length;
  const dipanggil     = pasienList.filter(p => p.status_antrian === "Dipanggil").length;
  const selesai       = pasienList.filter(p => p.status_antrian === "Selesai").length;
  const nextNomor     = Math.max(...pasienList.map(p => p.nomor_antrian), 0) + 1;

  const filtered = useMemo(() =>
    pasienList.filter(p =>
      p.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nomor_antrian.toString().includes(searchQuery)
    ),
    [pasienList, searchQuery]
  );

  /* ── Handlers ── */
  const handleLogout = () => {
    localStorage.removeItem("klinik_user");
    navigate("/");
  };

  const handleStatusChange = (id, newStatus) => {
    setPasienList(list =>
      list.map(p => p.id === id ? { ...p, status_antrian: newStatus } : p)
    );
  };

  const handleTambahPasien = (data) => {
    setPasienList(list => [...list, data]);
  };

  /* ── Today string ── */
  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* ── SIDEBAR ──────────────────────────────────────────────────── */}
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-slate-900 to-blue-950 z-30
        flex flex-col shadow-2xl transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        {/* Brand */}
        <div className="px-5 py-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <rect x="9" y="2" width="6" height="20" rx="1" fill="white" />
                <rect x="2" y="9" width="20" height="6" rx="1" fill="white" fillOpacity="0.7" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">Klinik UST</p>
              <p className="text-blue-400 text-xs">Sistem Informasi</p>
            </div>
          </div>
        </div>

        {/* User info */}
        <div className="px-5 py-4 mx-3 mt-4 bg-white/5 rounded-xl border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {user.username?.[0]?.toUpperCase() ?? "A"}
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate">{user.username}</p>
              <p className="text-blue-300 text-xs">Admin / Pendaftaran</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 mt-6 space-y-1">
          <p className="text-blue-400/60 text-xs font-semibold uppercase tracking-widest px-3 mb-2">Menu</p>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-blue-600/30 text-white text-sm font-medium border border-blue-500/30">
            <IconDashboard />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">
            <IconUsers />
            Data Pasien
          </a>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <button id="btn-logout"
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-white hover:bg-red-500/20 text-sm font-medium transition-all duration-200 group"
          >
            <IconLogout />
            Keluar
          </button>
        </div>
      </aside>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-0">

        {/* Topbar */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            {/* Hamburger (mobile) */}
            <button onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <div>
              <h1 className="font-bold text-slate-700 text-lg leading-tight">Dashboard Admin</h1>
              <p className="text-slate-400 text-xs capitalize">{today}</p>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-emerald-200">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Sistem Aktif
            </div>
            <button onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-red-100 text-red-500 hover:bg-red-50 text-sm font-medium transition-colors">
              <IconLogout />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* Page body */}
        <main className="flex-1 p-6 space-y-6 overflow-auto">

          {/* ── Summary Cards ──────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <SummaryCard
              label="Total Pasien Hari Ini"
              value={totalPasien}
              gradient="bg-gradient-to-br from-blue-500 to-blue-700"
              icon={<IconTotal />}
              sub="Terdaftar hari ini"
            />
            <SummaryCard
              label="Sedang Menunggu"
              value={menunggu}
              gradient="bg-gradient-to-br from-amber-400 to-amber-600"
              icon={<IconClock />}
              sub="Belum dipanggil"
            />
            <SummaryCard
              label="Sedang Dipanggil"
              value={dipanggil}
              gradient="bg-gradient-to-br from-indigo-500 to-indigo-700"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              }
              sub="Dalam pemeriksaan"
            />
            <SummaryCard
              label="Sudah Selesai"
              value={selesai}
              gradient="bg-gradient-to-br from-emerald-500 to-emerald-700"
              icon={<IconCheck />}
              sub="Pemeriksaan selesai"
            />
          </div>

          {/* ── Tabel Antrian ──────────────────────────────────────── */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {/* Table header */}
            <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <h2 className="font-bold text-slate-700 text-base">Daftar Antrian Pasien</h2>
                <p className="text-slate-400 text-xs mt-0.5">{filtered.length} dari {totalPasien} pasien</p>
              </div>

              {/* Search */}
              <div className="relative flex-1 sm:max-w-xs">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <IconSearch />
                </span>
                <input
                  id="search-pasien"
                  type="text"
                  placeholder="Cari nama atau nomor antrian..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border-2 border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                />
              </div>

              {/* Add button */}
              <button
                id="btn-tambah-pasien"
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex-shrink-0"
              >
                <IconPlus />
                Daftarkan Pasien Baru
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider w-16">No.</th>
                    <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Nama Pasien</th>
                    <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">Jenis Kelamin</th>
                    <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden lg:table-cell">No. Kontak</th>
                    <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Jam Daftar</th>
                    <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                    <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-12 text-slate-400">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 mx-auto mb-2 text-slate-300" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <p className="text-sm">Pasien tidak ditemukan</p>
                      </td>
                    </tr>
                  ) : (
                    filtered.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50/70 transition-colors group">
                        {/* No antrian */}
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-50 text-blue-700 text-sm font-bold rounded-lg">
                            {p.nomor_antrian}
                          </span>
                        </td>

                        {/* Nama */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                              p.jenis_kelamin === "Perempuan" ? "bg-pink-100 text-pink-600" : "bg-blue-100 text-blue-600"
                            }`}>
                              {p.nama.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-700">{p.nama}</p>
                              <p className="text-xs text-slate-400">{p.tanggal_lahir}</p>
                            </div>
                          </div>
                        </td>

                        {/* Jenis Kelamin */}
                        <td className="px-6 py-4 hidden md:table-cell">
                          <span className={`text-xs px-2 py-1 rounded-md font-medium ${
                            p.jenis_kelamin === "Perempuan"
                              ? "bg-pink-50 text-pink-600"
                              : "bg-blue-50 text-blue-600"
                          }`}>
                            {p.jenis_kelamin}
                          </span>
                        </td>

                        {/* No kontak */}
                        <td className="px-6 py-4 hidden lg:table-cell">
                          <span className="text-sm text-slate-500 font-mono">{p.no_kontak}</span>
                        </td>

                        {/* Jam daftar */}
                        <td className="px-6 py-4">
                          <span className="text-sm text-slate-600 font-medium">{p.jam_daftar}</span>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4">
                          <StatusBadge status={p.status_antrian} />
                        </td>

                        {/* Aksi */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {p.status_antrian === "Menunggu" && (
                              <button
                                onClick={() => handleStatusChange(p.id, "Dipanggil")}
                                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 transition-colors"
                              >
                                Panggil
                              </button>
                            )}
                            {p.status_antrian === "Dipanggil" && (
                              <button
                                onClick={() => handleStatusChange(p.id, "Selesai")}
                                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                              >
                                Selesaikan
                              </button>
                            )}
                            {p.status_antrian === "Selesai" && (
                              <span className="text-xs text-slate-300 font-medium italic">—</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Table footer */}
            {filtered.length > 0 && (
              <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                <p className="text-xs text-slate-400">
                  Menampilkan <span className="font-semibold text-slate-600">{filtered.length}</span> pasien
                </p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5 text-amber-600">
                    <span className="w-2 h-2 rounded-full bg-amber-400" /> {menunggu} Menunggu
                  </span>
                  <span className="flex items-center gap-1.5 text-blue-600">
                    <span className="w-2 h-2 rounded-full bg-blue-500" /> {dipanggil} Dipanggil
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> {selesai} Selesai
                  </span>
                </div>
              </div>
            )}
          </div>

        </main>
      </div>

      {/* ── Modal ────────────────────────────────────────────────────── */}
      {showModal && (
        <ModalTambahPasien
          onClose={() => setShowModal(false)}
          onSubmit={handleTambahPasien}
          nextNo={nextNomor}
        />
      )}
    </div>
  );
}
