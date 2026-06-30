// Navbar component - akan dikembangkan lebih lanjut
const Navbar = ({ title = "Dashboard Klinik UST" }) => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md">
      <h1 className="text-xl font-semibold">{title}</h1>
    </nav>
  );
};

export default Navbar;
