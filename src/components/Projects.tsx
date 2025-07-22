import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import projectEcommerce from "@/assets/project-ecommerce.jpg"
import projectDashboard from "@/assets/project-dashboard.jpg"
import projectSocial from "@/assets/project-social.jpg"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Next.js, and Stripe integration. Features include product management, shopping cart, payment processing, and admin dashboard.",
      image: projectEcommerce,
      technologies: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      category: "Full-Stack",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 2,
      title: "Project Management Dashboard",
      description: "A comprehensive dashboard for project management with real-time collaboration, task tracking, and team communication features built with React and Node.js.",
      image: projectDashboard,
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Chart.js"],
      category: "Full-Stack",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 3,
      title: "Social Media App",
      description: "A modern social media application with real-time messaging, post sharing, and user authentication. Built with React Native and Firebase.",
      image: projectSocial,
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      category: "Mobile",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      featured: false
    }
  ]

  const categories = ["All", "Full-Stack", "Frontend", "Mobile", "Backend"]

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`transition-all duration-300 ${
                  activeFilter === category 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`card-hover bg-card rounded-lg border overflow-hidden group ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary-glow transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-accent text-accent-foreground rounded-full hover:bg-accent-glow transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <Button
                    size="sm"
                    className="btn-primary flex-1"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-accent hover:text-accent-foreground border-accent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="btn-accent text-lg px-8 py-6"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects