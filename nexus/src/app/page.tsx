"use client"
import { motion } from "framer-motion"
import type React from "react"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import dynamic from "next/dynamic"
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconArrowRight,
  IconStar,
  IconUsers,
  IconShield,
} from "@tabler/icons-react"

const World = dynamic(() => import("../components/ui/globe").then((m) => m.World), {
  ssr: false,
})

export default function Hero() {
  const features = [
    {
      title: "Built for everyone",
      description: "Designed with neurodiversity in mind, creating spaces where all minds can flourish and connect.",
      icon: <IconTerminal2 className="w-6 h-6" />,
    },
    {
      title: "Gentle interactions",
      description: "Soft, calming interface designed to reduce sensory overwhelm and promote comfortable browsing.",
      icon: <IconEaseInOut className="w-6 h-6" />,
    },
    {
      title: "Transparent pricing",
      description: "Clear, honest pricing with no hidden fees. Accessibility should never come at a premium.",
      icon: <IconCurrencyDollar className="w-6 h-6" />,
    },
    {
      title: "Always available",
      description: "Reliable platform that's there when you need it, with consistent uptime and performance.",
      icon: <IconCloud className="w-6 h-6" />,
    },
    {
      title: "Safe spaces",
      description: "Moderated communities with strong privacy controls and inclusive community guidelines.",
      icon: <IconRouteAltLeft className="w-6 h-6" />,
    },
    {
      title: "Caring support",
      description: "Understanding support team trained in neurodiversity awareness and accessibility needs.",
      icon: <IconHelp className="w-6 h-6" />,
    },
    {
      title: "Satisfaction promise",
      description: "If Nexus doesn't feel right for you, we'll work together to make it better.",
      icon: <IconAdjustmentsBolt className="w-6 h-6" />,
    },
    {
      title: "Community first",
      description: "Built by and for the neurodivergent community, celebrating our unique perspectives.",
      icon: <IconHeart className="w-6 h-6" />,
    },
  ]

  const globeConfig = {
    pointSize: 4,
    globeColor: "#e0e7ff",
    showAtmosphere: true,
    atmosphereColor: "#f3e8ff",
    atmosphereAltitude: 0.15,
    emissive: "#e0e7ff",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(32, 20, 79, 0.3)",
    ambientLight: "#513ab7ff",
    directionalLeftLight: "#f3e8ff",
    directionalTopLight: "#fae8ff",
    pointLight: "#e0e7ff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  }

  const colors = ["#c4b5fd", "#a5b4fc", "#fbbf24"]
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ]

  const testimonials = [
    {
      quote:
        "I love gaming and peaceful environments. If quiet, cozy nights sound perfect to you, let's connect and share our favorite games.",
      name: "Michael Rodriguez",
      designation: "He/him • Gamer",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Music is my language - Rock and R&B speak to my soul. I also love cooking and trying new recipes from different cultures.",
      name: "Sarah Chen",
      designation: "She/her • Music lover",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Books and films are my escape and passion. I love deep conversations about stories that move us. Coffee dates welcome!",
      name: "Emily Johnson",
      designation: "She/her • Bookworm",
      src: "https://cdn2.stylecraze.com/wp-content/uploads/2013/05/Most-Beautiful-Women-In-India.jpg.webp",
    },
    {
      quote:
        "Technology fascinates me, and I love exploring new innovations. Always up for geeking out over the latest developments!",
      name: "David Smith",
      designation: "He/him • Tech enthusiast",
      src: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29vZCUyMGxvb2tpbmclMjBndXl8ZW58MHx8MHx8fDA%3D",
    },
    {
      quote:
        "Nature photography is my meditation. I love capturing quiet moments and sharing the beauty I find in unexpected places.",
      name: "Lisa Thompson",
      designation: "She/her • Photographer",
      src: "https://www.hdwallpapers.in/download/nice_looking_girl_model_is_standing_in_blur_background_wearing_brown_woolen_knitted_dress_hd_girls-HD.jpg",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden gradient-bg-soft-dark">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 rounded-full blur-2xl floating-orb-1 animate-pulse-soft"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-60 right-20 w-32 h-32 rounded-full blur-2xl floating-orb-2 animate-pulse-soft"
          animate={{
            y: [0, 25, 0],
            x: [0, -12, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/3 w-28 h-28 rounded-full blur-2xl floating-orb-3 animate-pulse-soft"
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Section - Redesigned */}
      <section className="min-h-screen w-full flex items-center justify-center px-4 relative z-10">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-card-dark mb-6">
                <IconStar className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm soft-text">Trusted by 10,000+ neurodivergent individuals</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="soft-text-dark">Welcome to </span>
                <br />
                <span className="gradient-text">Nexus</span>
              </h1>

              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto soft-text">
                A gentle, inclusive space where neurodivergent minds connect, share experiences, and build meaningful
                relationships at their own pace.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                <motion.button
                  className="px-10 py-4 text-white rounded-2xl font-semibold soft-shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-200 gradient-purple-light flex items-center group"
                  whileHover={{
                    y: -3,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Journey
                  <IconArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  className="px-10 py-4 glass-card-dark rounded-2xl font-semibold soft-text-dark transition-all duration-300 hover:bg-white/10"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
                <motion.div
                  className="text-center hero-card rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <IconUsers className="w-8 h-8 mx-auto mb-3 text-purple-500" />
                  <div className="text-3xl font-bold soft-text-dark">10K+</div>
                  <div className="text-sm soft-text">Active Members</div>
                </motion.div>

                <motion.div
                  className="text-center hero-card rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <IconHeart className="w-8 h-8 mx-auto mb-3 text-pink-500" />
                  <div className="text-3xl font-bold soft-text-dark">50K+</div>
                  <div className="text-sm soft-text">Connections Made</div>
                </motion.div>

                <motion.div
                  className="text-center hero-card rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <IconShield className="w-8 h-8 mx-auto mb-3 text-green-500" />
                  <div className="text-3xl font-bold soft-text-dark">100%</div>
                  <div className="text-sm soft-text">Safe & Secure</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 soft-text-dark">
            Stories from our <span className="gradient-text">community</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed soft-text">
            Real experiences from neurodivergent individuals who found their people through Nexus
          </p>
        </motion.div>
        <AnimatedTestimonials testimonials={testimonials} />
      </section>

      {/* Globe Section */}
      <section className="py-20 relative z-10">
        <div className="flex flex-row items-center justify-center h-screen md:h-auto relative w-full">
          <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 soft-text-dark">
                Connect across the <span className="gradient-text">globe</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed soft-text">
                Join a worldwide community that celebrates neurodiversity and fosters meaningful connections across
                cultures and continents.
              </p>
            </motion.div>
            <div
              className="absolute w-full bottom-0 inset-x-0 h-40 pointer-events-none select-none z-40"
              style={{
                background: "linear-gradient(to bottom, transparent, rgba(248, 250, 252, 0.9))",
              }}
            />
            <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 soft-text-dark">
            Built with <span className="gradient-text">care</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed soft-text">
            Every feature is thoughtfully designed with neurodivergent needs in mind
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto px-4">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-gradient text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-4">Nexus</h3>
                <p className="text-gray-300 leading-relaxed">
                  Creating inclusive spaces where neurodivergent minds connect, grow, and thrive together.
                </p>
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconBrandTwitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconBrandInstagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconBrandLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconBrandGithub className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["About Us", "Features", "Community", "Blog", "Help Center"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {["Contact Us", "Privacy Policy", "Terms of Service", "Accessibility", "Safety Guidelines"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <IconMail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">hello@nexus.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <IconPhone className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <IconMapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8">
                <h5 className="font-medium mb-3">Stay Updated</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400"
                  />
                  <motion.button
                    className="px-4 py-2 gradient-purple-light rounded-r-lg hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Nexus. All rights reserved. Made with ❤️ for the neurodivergent community.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Accessibility Statement
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <motion.div
      className="flex flex-col py-10 px-6 relative feature-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="mb-6 relative z-10 feature-icon">{icon}</div>
      <div className="text-lg font-semibold mb-3 relative z-10">
        <div className="absolute left-0 top-1 h-6 w-1 rounded-full feature-bar" />
        <span className="inline-block ml-4 feature-title">{title}</span>
      </div>
      <p className="text-sm leading-relaxed relative z-10 ml-4 soft-text">{description}</p>
    </motion.div>
  )
}
