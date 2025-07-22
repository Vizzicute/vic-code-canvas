import { motion } from "framer-motion"
import { ChevronUp, Code2, Heart, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
  ]

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient-primary">
                CodeWithVic
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Building digital experiences with passion, creativity, and clean code. 
              Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>victor@codewithvic.com</p>
              <p>San Francisco, CA</p>
              <p>Available for freelance work</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} CodeWithVic. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and lots of coffee</span>
          </div>

          {/* Scroll to Top Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer