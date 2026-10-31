function Skills() {
  const skills = ["HTML", "C#", "JavaScript (ES6+)", "Python", "Git / GitHub", "React"];

  return (
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition duration-200">
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4">
        Навички
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-50 text-blue-700 font-semibold px-3 py-1.5 rounded-full text-sm border border-blue-200 hover:bg-blue-600 hover:text-white transition-colors duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;