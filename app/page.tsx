import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Drill, 
  Wrench, 
  Building, 
  Hammer, 
  Droplets,
  Shield,
  Award,
  Users,
  CheckCircle,
  Phone
} from 'lucide-react';
import { HeroSection } from '@/components/hero-section';
import { ServiceCard } from '@/components/service-card';
import { ProjectCard } from '@/components/project-card';
import { StatsSection } from '@/components/stats-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    title: 'Directional Boring',
    description: 'Advanced horizontal drilling technology for precise underground installations without surface disruption.',
    icon: Drill,
    href: '/services/directional-boring',
    features: [
      'Minimal surface disruption',
      'Precision drilling technology',
      'Environmental protection',
      'Cost-effective solutions'
    ]
  },
  {
    title: 'Utility Installation',
    description: 'Complete utility infrastructure installation including water, sewer, and electrical systems.',
    icon: Wrench,
    href: '/services/utility-installation',
    features: [
      'Water & sewer lines',
      'Electrical systems',
      'Gas line installation',
      'Telecommunications'
    ]
  },
  {
    title: 'Civil Construction',
    description: 'Comprehensive civil construction services for roads, bridges, and public infrastructure.',
    icon: Building,
    href: '/services/civil-construction',
    features: [
      'Road construction',
      'Bridge projects',
      'Public facilities',
      'Site development'
    ]
  },
  {
    title: 'Pile Installation',
    description: 'Deep foundation solutions and pile installation for structural support and stability.',
    icon: Hammer,
    href: '/services/pile-installation',
    features: [
      'Deep foundation work',
      'Structural support',
      'Soil stabilization',
      'Custom solutions'
    ]
  },
  {
    title: 'Water & Sewer Treatment',
    description: 'Design and construction of water and wastewater treatment facilities.',
    icon: Droplets,
    href: '/services/water-sewer-treatment',
    features: [
      'Treatment plant design',
      'System installation',
      'Upgrade projects',
      'Maintenance solutions'
    ]
  }
];

const featuredProjects = [
  {
    title: 'Chevron Refinery Expansion',
    description: 'Major infrastructure upgrade including utility installation and civil construction for refinery expansion project.',
    location: 'Geismar, Louisiana',
    completedDate: '2023',
    category: 'Industrial',
    image: 'https://images.pexels.com/photos/162568/oil-rig-sea-industry-water-162568.jpeg',
    href: '/projects/chevron-refinery'
  },
  {
    title: 'Downtown Zachary Revitalization',
    description: 'Complete underground utility upgrade and street reconstruction for downtown business district.',
    location: 'Zachary, Louisiana',
    completedDate: '2023',
    category: 'Municipal',
    image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg',
    href: '/projects/zachary-downtown'
  },
  {
    title: 'National Utility Upgrade',
    description: 'Multi-state directional boring project for telecommunications infrastructure across the Southeast.',
    location: 'Multi-State',
    completedDate: '2024',
    category: 'Telecommunications',
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg',
    href: '/projects/national-utility'
  }
];

const stats = [
  {
    number: '10+',
    label: 'Years Experience',
    description: 'Since 2015'
  },
  {
    number: '500+',
    label: 'Projects Completed',
    description: 'Across multiple states'
  },
  {
    number: '15',
    label: 'States Served',
    description: 'Nationwide coverage'
  },
  {
    number: '99.9%',
    label: 'Safety Record',
    description: 'Zero major incidents'
  }
];

const testimonials = [
  {
    quote: "Southern Underground delivered our utility upgrade project on time and under budget. Their directional boring expertise saved us significant costs.",
    author: "Mike Johnson",
    position: "City Engineer",
    company: "City of Zachary"
  },
  {
    quote: "Professional, reliable, and innovative. They handled our complex refinery infrastructure needs with precision and care.",
    author: "Sarah Williams",
    position: "Project Manager",
    company: "Chevron"
  },
  {
    quote: "Outstanding work on our multi-state telecommunications project. Their coordination and execution were flawless.",
    author: "David Chen",
    position: "Regional Director",
    company: "TeleComm Solutions"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Building the Foundations of Tomorrow"
        subtitle="Specializing in Directional Boring, Utility Installation, and Civil Construction Across the Nation"
        description="Since 2015, Southern Underground of Louisiana has been delivering innovative construction and infrastructure solutions that support community development and growth."
        backgroundImage="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg"
      />

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction and infrastructure solutions delivered with precision and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 5).map((service, index) => (
              <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Trusted Construction Partner Since 2015
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Southern Underground of Louisiana specializes in municipal construction and underground infrastructure. 
                We deliver reliable, efficient, and cutting-edge construction services that support and enhance community development.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0" />
                  <span>Licensed and insured with full certifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0" />
                  <span>Nationwide service capability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0" />
                  <span>Advanced directional boring technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0" />
                  <span>Zero major safety incidents</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-construction-500 hover:bg-construction-600">
                <Link href="/about" className="flex items-center space-x-2">
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg"
                alt="Construction team at work"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Featured Projects */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing our expertise through successful infrastructure and construction projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects" className="flex items-center space-x-2">
                <span>View All Projects</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Southern Underground
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with Louisiana's premier construction and infrastructure specialists
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-construction-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-construction-500" />
                </div>
                <CardTitle>Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  99.9% safety record with zero major incidents. We prioritize the safety of our team and your project.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-construction-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-construction-500" />
                </div>
                <CardTitle>Proven Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Over 500 completed projects across 15 states with consistent quality and customer satisfaction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-construction-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-construction-500" />
                </div>
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Experienced professionals with specialized expertise in directional boring and infrastructure.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by municipalities, corporations, and contractors across the nation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-construction-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get in touch with our team for a free consultation and project quote. 
            We're here to bring your infrastructure vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-construction-500 hover:bg-construction-600 text-white px-8 py-4">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Request Free Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
              <Link href="tel:(225) 555-0123" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(225) 555-0123</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}