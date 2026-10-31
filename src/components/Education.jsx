function Education() {
  return (
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition duration-200">
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-3">
        Освіта
      </h2>
      <div className="border-l-4 border-blue-600 pl-4 py-1">
        <h3 className="text-xl font-semibold text-slate-800">
          Бакалавр з Кібербезпеки
        </h3>
        <p className="text-slate-600 font-medium">
          Національний Університет «Львівська Політехніка»
        </p>
        <p className="text-sm text-slate-400 mt-1">
          Період навчання: 2025 — 2029
        </p>
      </div>
    </section>
  );
}

export default Education;