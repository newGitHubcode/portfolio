import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <main className="min-h-screen px-5">
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <Footer />
    </main>
  );
}
