"use client"

import { Award, Users, Globe, Headphones } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { icon: Users, label: "Happy Customers", value: "1M+" },
  { icon: Globe, label: "Countries", value: "50+" },
  { icon: Headphones, label: "Products Sold", value: "5M+" },
  { icon: Award, label: "Awards Won", value: "25+" },
]

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Passionate about bringing premium audio experiences to everyone.",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Design",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creating beautiful and functional audio products for modern lifestyles.",
  },
  {
    name: "Mike Chen",
    role: "Chief Technology Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Leading innovation in wireless audio technology and sound engineering.",
  },
  {
    name: "Emily Davis",
    role: "Head of Marketing",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Connecting our brand with customers worldwide through authentic storytelling.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in">About QCY</h1>
          <p className="text-xl opacity-90 animate-fade-in-delay">Pioneering Premium Audio Since 2009</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, QCY began with a simple mission: to make premium audio accessible to everyone. What
                  started as a small team of audio enthusiasts has grown into a global brand trusted by millions.
                </p>
                <p>
                  We believe that great sound shouldn't be a luxury. Through innovative design, cutting-edge technology,
                  and meticulous attention to detail, we create products that deliver exceptional audio experiences at
                  prices that make sense.
                </p>
                <p>
                  Today, QCY products are enjoyed by music lovers, athletes, gamers, and professionals in over 50
                  countries. Our commitment to quality, innovation, and customer satisfaction drives everything we do.
                </p>
              </div>
            </div>
            <div className="animate-slide-right">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="QCY Story"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-slide-left">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To democratize premium audio by creating innovative, high-quality products that deliver exceptional
                  sound experiences at accessible prices. We strive to enhance how people connect with their music,
                  calls, and digital content.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-slide-right">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the world's most trusted audio brand, known for innovation, quality, and customer-centricity. We
                  envision a future where everyone can experience the joy of premium audio, regardless of their budget.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The passionate individuals behind QCY's success</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="opacity-90">Constantly pushing boundaries to create cutting-edge audio solutions</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="opacity-90">Never compromising on build quality and sound performance</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
              <p className="opacity-90">Making premium audio experiences available to everyone</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
