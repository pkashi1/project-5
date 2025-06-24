import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Target, Users, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const timeline = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Southern Underground of Louisiana established in Zachary, focusing on directional boring and utility installation.'
  },
  {
    year: '2017',
    title: 'Regional Expansion',
    description: 'Expanded services to neighboring states, establishing our reputation for quality municipal construction.'
  },
  {
    year: '2019',
    title: 'Major Contract Wins',
    description: 'Secured contracts with major industrial clients including Chevron refinery infrastructure projects.'
  },
  {
    year: '2021',
    title: 'Technology Advancement',
    description: 'Invested in state-of-the-art directional boring equipment and precision drilling technology.'
  },
  {
    year: '2023',
    title: 'Nationwide Service',
    description: 'Achieved nationwide service capability, operating across 15 states with consistent quality standards.'
  },
  {
    year: '2024',
    title: 'Continued Growth',
    description: 'Celebrating 500+ completed projects and maintaining our 99.9% safety record.'
  }
];

const team = [
  {
    name: 'Robert Thibodaux',
    position: 'Founder & CEO',
    experience: '25+ years',
    specialty: 'Municipal Construction & Business Development',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
  },
  {
    name: 'Michelle Rodriguez',
    position: 'Operations Manager',
    experience: '15+ years',
    specialty: 'Project Management & Quality Control',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg'
  },
  {
    name: 'James Boudreaux',
    position: 'Chief Engineer',
    experience: '20+ years',
    specialty: 'Directional Boring & Infrastructure Design',
    image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg'
  },
  {
    name: 'Sarah Landry',
    position: 'Safety Director',
    experience: '12+ years',
    specialty: 'Safety Management & OSHA Compliance',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg'
  }
];

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices in every project and relationship.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We embrace cutting-edge technology and methods to deliver superior results and efficiency.'
  },
  {
    icon: Users,
    title: 'Safety',
    description: 'Safety is our top priority, protecting our team, clients, and communities in everything we do.'
  },
  {
    icon: Heart,
    title: 'Community Engagement',
    description: 'We are committed to supporting and enhancing the communities where we live and work.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              About Southern Underground
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Building Louisiana's infrastructure and supporting community development since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To deliver reliable, efficient, and cutting-edge underground construction services that support 
                and enhance community development across the nation.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Since our founding in 2015, Southern Underground of Louisiana has been dedicated to building 
                the critical infrastructure that communities depend on. From directional boring to utility 
                installation, we combine Louisiana craftsmanship with innovative technology to deliver 
                exceptional results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0" />
                  <span>Founded in Zachary, Louisiana in 2015</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0" />
                  <span>Nationwide service across 15 states</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0" />
                  <span>500+ successfully completed projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-500 flex-shrink-0" />
                  <span>99.9% safety record with zero major incidents</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg"
                alt="Construction site overview"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-construction-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-construction-500" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A decade of growth, innovation, and excellence in construction and infrastructure
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-construction-500"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-construction-500 rounded-full border-4 border-background"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Badge className="bg-construction-500 text-white">{item.year}</Badge>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals leading the way in construction and infrastructure excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-construction-500 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Proudly Louisiana-Based
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our headquarters in Zachary, Louisiana serves as the foundation for our nationwide operations. 
                We're proud to call Louisiana home while serving communities across the nation.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Corporate Headquarters</h3>
                  <p className="text-muted-foreground">
                    4922 Rankin Street<br />
                    Zachary, Louisiana 70791
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Service Area</h3>
                  <p className="text-muted-foreground">
                    Nationwide coverage across 15 states with local project management and support
                  </p>
                </div>
              </div>
              <Button asChild size="lg" className="bg-construction-500 hover:bg-construction-600">
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Contact Our Team</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="animate-fade-in">
              <div className="bg-muted rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Visit Our Office</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation at our Zachary headquarters or arrange an on-site project meeting.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                  <p>Saturday: 8:00 AM - 12:00 PM</p>
                  <p>Sunday: Emergency calls only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work with Louisiana's Best?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who trust Southern Underground for their construction and infrastructure needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-construction-500 hover:bg-construction-600 text-white px-8 py-4">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
              <Link href="/projects">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}