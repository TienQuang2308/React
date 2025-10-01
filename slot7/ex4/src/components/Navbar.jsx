export default function Navbar() {
  return (
    <nav
      className="text-center py-2"
      style={{ backgroundColor: "#EA8F2E" }}
    >
      <a href="#home" className="mx-2 text-white text-decoration-none">
        Home
      </a>
      <a href="#about" className="mx-2 text-white text-decoration-none">
        About
      </a>
      <a href="#contact" className="mx-2 text-white text-decoration-none">
        Contact
      </a>
    </nav>
  );
}
