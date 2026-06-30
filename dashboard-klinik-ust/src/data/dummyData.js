// Data dummy untuk keperluan development
// Akan diisi lebih lengkap sesuai kebutuhan setiap dashboard

export const dummyPasien = [
  { id: 1, nama: "Budi Santoso", umur: 35, keluhan: "Demam", dokter: "dr. Andi" },
  { id: 2, nama: "Siti Aminah", umur: 28, keluhan: "Batuk", dokter: "dr. Rina" },
  { id: 3, nama: "Ahmad Fauzi", umur: 45, keluhan: "Sakit kepala", dokter: "dr. Andi" },
];

export const dummyDokter = [
  { id: 1, nama: "dr. Andi Wijaya", spesialis: "Umum", jadwal: "Senin - Jumat" },
  { id: 2, nama: "dr. Rina Kusuma", spesialis: "Anak", jadwal: "Selasa - Sabtu" },
];

export const dummyTransaksi = [
  { id: 1, pasien: "Budi Santoso", tanggal: "2024-01-15", total: 150000, status: "Lunas" },
  { id: 2, pasien: "Siti Aminah", tanggal: "2024-01-15", total: 200000, status: "Belum Lunas" },
  { id: 3, pasien: "Ahmad Fauzi", tanggal: "2024-01-14", total: 175000, status: "Lunas" },
];

export const dummyStatistik = [
  { bulan: "Jan", pasien: 120, pendapatan: 18000000 },
  { bulan: "Feb", pasien: 145, pendapatan: 21750000 },
  { bulan: "Mar", pasien: 132, pendapatan: 19800000 },
  { bulan: "Apr", pasien: 158, pendapatan: 23700000 },
  { bulan: "Mei", pasien: 170, pendapatan: 25500000 },
  { bulan: "Jun", pasien: 163, pendapatan: 24450000 },
];
