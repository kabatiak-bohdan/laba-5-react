import Header from './components/Header';
import AboutMe from './components/aboutme';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        
        <main className="space-y-6">
          <AboutMe />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Experience />
            <Education />
          </div>

          <Skills />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;