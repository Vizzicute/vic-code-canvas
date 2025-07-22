import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Zap,
  Target,
  Heart
} from "lucide-react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      technologies: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "text-blue-500"
    },
    {
      category: "Backend",
      icon: Server,
      technologies: ["PHP", "Node.js", "Express", "RESTful APIs", "GraphQL"],
      color: "text-green-500"
    },
    {
      category: "Database",
      icon: Database,
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Firebase"],
      color: "text-purple-500"
    },
    {
      category: "Tools & Others",
      icon: GitBranch,
      technologies: ["Git", "Docker", "AWS", "Vercel", "Linux", "Figma"],
      color: "text-orange-500"
    }
  ]

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Happy Clients" },
    { number: "100%", label: "Commitment" }
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer who loves creating digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Heart className="mr-3 h-6 w-6 text-red-500" />
              My Journey
            </h3>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hi! I'm Victor, but most people know me as <strong>CodeWithVic</strong>. 
                I'm a passionate full-stack developer with over 3 years of experience 
                building web applications and digital solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey began with curiosity about how websites work, and it quickly 
                evolved into a love for problem-solving and creating meaningful digital 
                experiences. I specialize in modern web technologies and enjoy working 
                on projects that challenge me to grow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>

            {/* What I Do */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Target className="mr-3 h-5 w-5 text-primary" />
                What I Do
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Web Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Mobile-First Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code2 className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Clean Code</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Server className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">API Development</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="text-gradient-accent">Tech Stack</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="card-hover bg-card p-6 rounded-lg border"
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className={`h-6 w-6 mr-3 ${skill.color}`} />
                    <h4 className="font-semibold text-lg">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About