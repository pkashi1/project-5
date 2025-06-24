import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProjectCard } from '@/components/project-card';

const projects = [
  {
    title: 'Chevron Refinery Expansion',
    description: 'Major infrastructure upgrade including utility installation and civil construction for refinery expansion project. Completed directional boring for new utility lines and upgraded existing water treatment facilities.',
    location: 'Geismar, Louisiana',
    completedDate: '2023',
    category: 'Industrial',
    image: 'https://images.pexels.com/photos/162568/oil-rig-sea-industry-water-162568.jpeg',
    href: '/projects/chevron-refinery',
    client: 'Chevron Corporation',
    value: '$2.5M',
    duration: '8 months',
    services: ['Directional Boring', 'Utility Installation', 'Civil Construction']
  },
  {
    title: 'Downtown Zachary Revitalization',
    description: 'Complete underground utility upgrade and street reconstruction for downtown business district. Modernized water and sewer infrastructure while preserving historic streetscape.',
    location: 'Zachary, Louisiana',
    completedDate: '2023',
    category: 'Municipal',
    image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg',
    href: '/projects/zachary-downtown',
    client: 'City of Zachary',
    value: '$1.8M',
    duration: '6 months',
    services: ['Utility Installation', 'Civil Construction', 'Water & Sewer Treatment']
  },
  {
    title: 'National Utility Upgrade',
    description: 'Multi-state directional boring project for telecommunications infrastructure across the Southeast. Installed fiber optic networks with minimal surface disruption.',
    location: 'Multi-State',
    completedDate: '2024',
    category: 'Telecommunications',
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg',
    href: '/projects/national-utility',
    client: 'TeleComm Solutions',
    value: '$4.2M',
    duration: '12 months',
    services: ['Directional Boring', 'Utility Installation']
  },
  {
    title: 'Industrial Water Treatment Facility',
    description: 'Design and construction of advanced water treatment facility for manufacturing complex. Included pile installation for foundation support and complete utility infrastructure.',
    location: 'Baton Rouge, Louisiana',
    completedDate: '2022',
    category: 'Industrial',
    image: 'https://images.pexels.com/photos/1216723/pexels-photo-1216723.jpeg',
    href: '/projects/water-treatment-facility',
    client: 'Industrial Manufacturing Corp',
    value: '$3.1M',
    duration: '10 months',
    services: ['Water & Sewer Treatment', 'Pile Installation', 'Civil Construction']
  },
  {
    title: 'Highway 61 Infrastructure Upgrade',
    description: 'Major highway infrastructure project including utility relocation, drainage improvements, and roadway reconstruction. Coordinated with DOTD for minimal traffic disruption.',
    location: 'St. Francisville, Louisiana',
    completedDate: '2022',
    category: 'Transportation',
    image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg',
    href: '/projects/highway-61-upgrade',
    client: 'Louisiana DOTD',
    value: '$5.7M',
    duration: '14 months',
    services: ['Civil Construction', 'Utility Installation', 'Directional Boring']
  },
  {
    title: 'Residential Subdivision Development',
    description: 'Complete utility infrastructure for new 200-home subdivision. Installed water, sewer, electrical, and telecommunications infrastructure using advanced directional boring techniques.',
    location: 'Prairieville, Louisiana',
    completedDate: '2021',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1216723/pexels-photo-1216723.jpeg',
    href: '/projects/residential-subdivision',
    client: 'Premier Development Group',
    value: '$2.8M',
    duration: '9 months',
    services: ['Directional Boring', 'Utility Installation', 'Civil Construction']
  }
];

const categories = ['All', 'Industrial', 'Municipal', 'Telecommunications', 'Transportation', 'Residential'];

const stats = [
  {
    number: '500+',
    label: 'Projects Completed',
    description: 'Since 2015'
  },
  {
    number: '15',
    label: 'States Served',
    description: 'Nationwide coverage'
  },
  {
    number: '$50M+',
    label: 'Project Value',
    description: 'Total completed'
  },
  {
    number: '99.9%',
    label: 'On-Time Delivery',
    description: 'Client satisfaction'
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Showcasing excellence in construction and infrastructure development across the nation
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-construction-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-sm opacity-80">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by category:</span>
              <Select defaultValue="All">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Spotlight */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Spotlight
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Highlighting our most significant infrastructure achievements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="bg-construction-500 text-white mb-4">Featured Project</Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Chevron Refinery Expansion
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our largest industrial project to date, involving comprehensive infrastructure upgrades 
                for Chevron's Geismar refinery. This complex project required advanced directional boring 
                techniques, utility installation, and civil construction work across 50+ acres.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm text-muted-foreground">Project Value</div>
                  <div className="text-lg font-semibold">$2.5 Million</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="text-lg font-semibold">8 Months</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-lg font-semibold">Geismar, LA</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                  <div className="text-lg font-semibold">2023</div>
                </div>
              </div>
              <Button asChild className="bg-construction-500 hover:bg-construction-600">
                <Link href="/projects/chevron-refinery" className="flex items-center space-x-2">
                  <span>View Project Details</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/162568/oil-rig-sea-industry-water-162568.jpeg"
                alt="Chevron Refinery Project"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Integration */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every project showcases our full range of construction and infrastructure capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: 'Directional Boring', href: '/services/directional-boring' },
              { name: 'Utility Installation', href: '/services/utility-installation' },
              { name: 'Civil Construction', href: '/services/civil-construction' },
              { name: 'Pile Installation', href: '/services/pile-installation' },
              { name: 'Water & Sewer Treatment', href: '/services/water-sewer-treatment' }
            ].map((service, index) => (
              <Card key={service.name} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading organizations across multiple industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Southern Underground delivered our refinery expansion project flawlessly. Their directional boring expertise and project management were exceptional.",
                author: "Sarah Williams",
                position: "Project Manager",
                company: "Chevron Corporation"
              },
              {
                quote: "The downtown revitalization project was completed on time and under budget. Their attention to preserving our historic district was remarkable.",
                author: "Mike Johnson",
                position: "City Engineer",
                company: "City of Zachary"
              },
              {
                quote: "Outstanding coordination on our multi-state telecommunications project. Professional execution across all phases of construction.",
                author: "David Chen",
                position: "Regional Director",
                company: "TeleComm Solutions"
              }
            ].map((testimonial, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who trust Southern Underground for their construction and infrastructure needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-construction-500 hover:bg-construction-600 text-white px-8 py-4">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Request Project Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
              <Link href="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}