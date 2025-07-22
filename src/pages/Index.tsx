import { ThemeProvider } from "@/components/ThemeProvider"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="codewithvic-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
