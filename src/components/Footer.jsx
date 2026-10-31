function Footer() {
  return (
    <footer className="mt-12 bg-slate-900 text-slate-300 text-center p-6 rounded-xl shadow-inner">
      <p className="mb-2">© {new Date().getFullYear()} Кабатяк Богдан. Усі права захищено.</p>
      <a
        href="https://github.com/kabatiak-bohdan"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-slate-800 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition duration-200 shadow"
      >
        <span>Профіль GitHub</span>
        <span>→</span>
      </a>
    </footer>
  );
}

export default Footer;