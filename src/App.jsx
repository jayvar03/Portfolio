import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Stack } from "./sections/Stack";
import { Projects } from "./sections/Projects";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";

const App = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      <div className="fixed inset-0 radial-fade" />
      <div className="noise fixed inset-0 pointer-events-none" />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

