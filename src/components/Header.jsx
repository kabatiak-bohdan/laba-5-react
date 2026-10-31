function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 text-white p-8 rounded-2xl shadow-xl mb-8 transform transition duration-300 hover:scale-[1.01]">
      <h1 className="text-4xl font-extrabold tracking-tight mb-2">
        Кабатяк Богдан
      </h1>
      <p className="text-xl font-medium text-blue-100 mb-4">
        Junior Frontend Developer
      </p>
      <div className="flex flex-wrap gap-4 text-sm font-light text-blue-50">
        <a 
          href="mailto:bohdan.kabatiak.kb.2025@lpnu.ua" 
          className="hover:underline hover:text-white transition"
        >
          Пошта:  bohdan.kabatiak.kb.2025@lpnu.ua
        </a>
        <span>•</span>
        <span>Телефон: +380 67 667 67 67</span>
      </div>
    </header>
  );
}

export default Header;