import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Twitter, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroBackground from "@/assets/hero-background.jpg"

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/80"></div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-gradient-primary">Victor</span>{" "}
            <span className="text-foreground">aka</span>{" "}
            <span className="text-gradient-accent">CodeWithVic</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Full-Stack Developer & Problem Solver
            <br />
            Building digital experiences with modern technologies
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="btn-primary text-lg px-8 py-6 hover:scale-105 transition-transform"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 hover:scale-105 transition-transform border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft"
            >
              <Twitter className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm mb-2 group-hover:text-primary transition-colors">
              Scroll Down
            </span>
            <ChevronDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero