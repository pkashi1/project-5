import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Drill, Target, Shield, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const benefits = [
  {
    icon: Target,
    title: 'Precision Drilling',
    description: 'Advanced GPS and steering technology ensures accurate placement of utilities and infrastructure.'
  },
  {
    icon: Shield,
    title: 'Minimal Surface Disruption',
    description: 'Preserve landscaping, roads, and existing structures while installing underground utilities.'
  },
  {
    icon: Gauge,
    title: 'Cost-Effective',
    description: 'Reduce project costs by eliminating the need for extensive excavation and surface restoration.'
  },
  {
    icon: Drill,
    title: 'Versatile Applications',
    description: 'Suitable for utilities, telecommunications, gas lines, and various underground installations.'
  }
];

const applications = [
  'Telecommunications Infrastructure',
  'Water and Sewer Lines',
  'Electrical Power Lines',
  'Natural Gas Distribution',
  'Fiber Optic Networks',
  'Steam and Heating Lines',
  'Conduit Installation',
  'Environmental Remediation'
];

const projectTypes = [
  {
    title: 'Municipal Projects',
    description: 'City water and sewer upgrades, street lighting, and public utility installations.',
    image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg'
  },
  {
    title: 'Industrial Applications',
    description: 'Refinery utilities, chemical plant infrastructure, and industrial facility connections.',
    image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg'
  },
  {
    title: 'Commercial Development',
    description: 'Shopping centers, office buildings, and residential subdivision utilities.',
    image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg'
  }
];

export default function DirectionalBoringPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="bg-construction-500 text-white mb-4">Service Spotlight</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Directional Boring
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Advanced horizontal drilling technology for precise underground installations without surface disruption. 
                Our state-of-the-art equipment and experienced operators deliver accurate, efficient results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-construction-500 hover:bg-construction-600 text-white">
                  <Link href="/contact" className="flex items-center space-x-2">
                    <span>Request Quote</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg"
                alt="Directional boring equipment"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Directional Boring */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg"
                alt="Directional boring process"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is Directional Boring?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Directional boring, also known as horizontal directional drilling (HDD), is a trenchless method 
                of installing underground utilities. This advanced technique allows us to place pipes, cables, 
                and conduits beneath obstacles like roads, rivers, and buildings without surface excavation.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our process begins with a small pilot hole that follows a predetermined path. Once the path 
                is established, we expand the hole to the required size and pull the utility line through. 
                This method preserves the surface environment while delivering precise, efficient installations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0" />
                  <span>GPS-guided precision drilling technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0" />
                  <span>Minimal environmental impact</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0" />
                  <span>Faster project completion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0" />
                  <span>Reduced restoration costs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Directional Boring?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of trenchless technology for your underground utility installations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-construction-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-construction-500" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Directional Boring Applications
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our directional boring services are suitable for a wide range of underground utility installations. 
                From telecommunications infrastructure to municipal water systems, we have the expertise and 
                equipment to handle projects of any size and complexity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div key={application} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <CheckCircle className="h-4 w-4 text-construction-500 flex-shrink-0" />
                    <span className="text-sm">{application}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Project Specifications</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bore Diameter Range:</span>
                    <span className="font-medium">2" - 48"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Maximum Distance:</span>
                    <span className="font-medium">5,000+ feet</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Depth Capability:</span>
                    <span className="font-medium">3' - 100' underground</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Soil Types:</span>
                    <span className="font-medium">Clay, sand, rock</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Guidance System:</span>
                    <span className="font-medium">GPS + electromagnetic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Types We Handle
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From municipal infrastructure to industrial installations, we deliver precision directional boring services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={project.title} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              State-of-the-Art Equipment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our modern fleet of directional boring equipment ensures precision, efficiency, and safety on every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Technology Features</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">GPS Guidance Systems</h4>
                    <p className="text-sm text-muted-foreground">Real-time positioning and path tracking for maximum accuracy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Electromagnetic Locating</h4>
                    <p className="text-sm text-muted-foreground">Precise underground utility detection and avoidance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Variable Speed Control</h4>
                    <p className="text-sm text-muted-foreground">Adaptive drilling speeds for different soil conditions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Environmental Controls</h4>
                    <p className="text-sm text-muted-foreground">Mud recycling systems and containment protocols</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg"
                alt="Directional boring equipment technology"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Precision Directional Boring?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our directional boring specialists for a free consultation and detailed project quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-construction-500 hover:bg-construction-600 text-white px-8 py-4">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Get Free Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
              <Link href="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}