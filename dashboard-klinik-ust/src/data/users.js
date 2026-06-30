// Data dummy akun untuk keperluan testing / development
export const users = [
  {
    role: "Admin",
    username: "admin",
    password: "admin123",
    route: "/admin",
    color: "blue",
  },
  {
    role: "Dokter",
    username: "dokter",
    password: "dokter123",
    route: "/dokter",
    color: "emerald",
  },
  {
    role: "Kasir",
    username: "kasir",
    password: "kasir123",
    route: "/kasir",
    color: "amber",
  },
  {
    role: "Kepala Klinik",
    username: "kepala",
    password: "kepala123",
    route: "/kepala-klinik",
    color: "purple",
  },
];

/**
 * Validasi login berdasarkan role, username, dan password.
 * @returns {object|null} user object jika cocok, null jika gagal
 */
export function validateLogin(role, username, password) {
  return (
    users.find(
      (u) =>
        u.role === role &&
        u.username === username &&
        u.password === password
    ) || null
  );
}
