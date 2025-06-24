"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, DollarSign, CheckCircle, Globe, Users, Heart, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface JobListing {
  id: string;
  title: string;
  titleEs: string;
  department: string;
  departmentEs: string;
  location: string;
  type: string;
  typeEs: string;
  salary: string;
  description: string;
  descriptionEs: string;
  requirements: string[];
  requirementsEs: string[];
  benefits: string[];
  benefitsEs: string[];
}

const jobListings: JobListing[] = [
  {
    id: 'project-manager',
    title: 'Project Manager',
    titleEs: 'Gerente de Proyecto',
    department: 'Operations',
    departmentEs: 'Operaciones',
    location: 'Zachary, LA',
    type: 'Full-time',
    typeEs: 'Tiempo completo',
    salary: '$65,000 - $85,000',
    description: 'Lead construction projects from planning to completion, ensuring quality, safety, and timely delivery.',
    descriptionEs: 'Liderar proyectos de construcción desde la planificación hasta la finalización, asegurando calidad, seguridad y entrega oportuna.',
    requirements: [
      'Bachelor\'s degree in Construction Management or related field',
      '5+ years of construction project management experience',
      'Strong leadership and communication skills',
      'Knowledge of construction safety regulations',
      'Proficiency in project management software'
    ],
    requirementsEs: [
      'Licenciatura en Gestión de Construcción o campo relacionado',
      '5+ años de experiencia en gestión de proyectos de construcción',
      'Fuertes habilidades de liderazgo y comunicación',
      'Conocimiento de regulaciones de seguridad en construcción',
      'Competencia en software de gestión de proyectos'
    ],
    benefits: [
      'Health, dental, and vision insurance',
      '401(k) with company match',
      'Paid time off and holidays',
      'Professional development opportunities'
    ],
    benefitsEs: [
      'Seguro médico, dental y de visión',
      '401(k) con contribución de la empresa',
      'Tiempo libre pagado y días festivos',
      'Oportunidades de desarrollo profesional'
    ]
  },
  {
    id: 'equipment-operator',
    title: 'Equipment Operator',
    titleEs: 'Operador de Equipos',
    department: 'Field Operations',
    departmentEs: 'Operaciones de Campo',
    location: 'Zachary, LA',
    type: 'Full-time',
    typeEs: 'Tiempo completo',
    salary: '$45,000 - $60,000',
    description: 'Operate directional boring and construction equipment safely and efficiently on various job sites.',
    descriptionEs: 'Operar equipos de perforación direccional y construcción de manera segura y eficiente en varios sitios de trabajo.',
    requirements: [
      'High school diploma or equivalent',
      '3+ years of heavy equipment operation experience',
      'Valid CDL license preferred',
      'Strong mechanical aptitude',
      'Commitment to safety protocols'
    ],
    requirementsEs: [
      'Diploma de escuela secundaria o equivalente',
      '3+ años de experiencia operando equipos pesados',
      'Licencia CDL válida preferida',
      'Fuerte aptitud mecánica',
      'Compromiso con protocolos de seguridad'
    ],
    benefits: [
      'Competitive hourly wages',
      'Health and dental insurance',
      'Retirement savings plan',
      'Overtime opportunities'
    ],
    benefitsEs: [
      'Salarios competitivos por hora',
      'Seguro médico y dental',
      'Plan de ahorro para el retiro',
      'Oportunidades de tiempo extra'
    ]
  },
  {
    id: 'safety-coordinator',
    title: 'Safety Coordinator',
    titleEs: 'Coordinador de Seguridad',
    department: 'Safety',
    departmentEs: 'Seguridad',
    location: 'Zachary, LA',
    type: 'Full-time',
    typeEs: 'Tiempo completo',
    salary: '$55,000 - $70,000',
    description: 'Develop and implement safety programs, conduct training, and ensure OSHA compliance across all projects.',
    descriptionEs: 'Desarrollar e implementar programas de seguridad, realizar capacitaciones y asegurar el cumplimiento de OSHA en todos los proyectos.',
    requirements: [
      'Bachelor\'s degree in Safety Management or related field',
      'OSHA 30-hour certification required',
      '3+ years of construction safety experience',
      'Excellent communication and training skills',
      'Knowledge of safety regulations and standards'
    ],
    requirementsEs: [
      'Licenciatura en Gestión de Seguridad o campo relacionado',
      'Certificación OSHA de 30 horas requerida',
      '3+ años de experiencia en seguridad de construcción',
      'Excelentes habilidades de comunicación y capacitación',
      'Conocimiento de regulaciones y estándares de seguridad'
    ],
    benefits: [
      'Comprehensive health benefits',
      'Professional certification support',
      'Career advancement opportunities',
      'Company vehicle provided'
    ],
    benefitsEs: [
      'Beneficios de salud integrales',
      'Apoyo para certificación profesional',
      'Oportunidades de avance profesional',
      'Vehículo de la empresa proporcionado'
    ]
  },
  {
    id: 'civil-engineer',
    title: 'Civil Engineer',
    titleEs: 'Ingeniero Civil',
    department: 'Engineering',
    departmentEs: 'Ingeniería',
    location: 'Zachary, LA',
    type: 'Full-time',
    typeEs: 'Tiempo completo',
    salary: '$70,000 - $90,000',
    description: 'Design and oversee infrastructure projects, perform site analysis, and ensure engineering standards compliance.',
    descriptionEs: 'Diseñar y supervisar proyectos de infraestructura, realizar análisis de sitio y asegurar el cumplimiento de estándares de ingeniería.',
    requirements: [
      'Bachelor\'s degree in Civil Engineering',
      'Professional Engineer (PE) license preferred',
      '4+ years of civil engineering experience',
      'Proficiency in CAD software and design tools',
      'Strong analytical and problem-solving skills'
    ],
    requirementsEs: [
      'Licenciatura en Ingeniería Civil',
      'Licencia de Ingeniero Profesional (PE) preferida',
      '4+ años de experiencia en ingeniería civil',
      'Competencia en software CAD y herramientas de diseño',
      'Fuertes habilidades analíticas y de resolución de problemas'
    ],
    benefits: [
      'Competitive salary and bonuses',
      'Health and retirement benefits',
      'Professional development support',
      'Flexible work arrangements'
    ],
    benefitsEs: [
      'Salario competitivo y bonos',
      'Beneficios de salud y retiro',
      'Apoyo para desarrollo profesional',
      'Arreglos de trabajo flexibles'
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    titleEs: 'Salud y Bienestar',
    description: 'Comprehensive medical, dental, and vision insurance for you and your family.',
    descriptionEs: 'Seguro médico, dental y de visión integral para usted y su familia.'
  },
  {
    icon: DollarSign,
    title: 'Retirement Planning',
    titleEs: 'Planificación para el Retiro',
    description: '401(k) retirement plan with generous company matching contributions.',
    descriptionEs: 'Plan de retiro 401(k) con generosas contribuciones de la empresa.'
  },
  {
    icon: Trophy,
    title: 'Career Growth',
    titleEs: 'Crecimiento Profesional',
    description: 'Professional development opportunities and career advancement programs.',
    descriptionEs: 'Oportunidades de desarrollo profesional y programas de avance profesional.'
  },
  {
    icon: Users,
    title: 'Team Culture',
    titleEs: 'Cultura de Equipo',
    description: 'Collaborative work environment with team-building activities and recognition programs.',
    descriptionEs: 'Ambiente de trabajo colaborativo con actividades de construcción de equipos y programas de reconocimiento.'
  }
];

export default function CareersPage() {
  const [isSpanish, setIsSpanish] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  const getText = (english: string, spanish: string) => {
    return isSpanish ? spanish : english;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Globe className="h-4 w-4 mr-2" />
                {isSpanish ? 'English' : 'Español'}
              </Button>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              {getText('Join Our Team', 'Únase a Nuestro Equipo')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {getText(
                'Build your career with Louisiana\'s premier construction and infrastructure company',
                'Construya su carrera con la empresa líder de construcción e infraestructura de Louisiana'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {getText('Why Work with Southern Underground?', '¿Por qué trabajar con Southern Underground?')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {getText(
                'Join a team that values safety, innovation, and professional growth',
                'Únase a un equipo que valora la seguridad, la innovación y el crecimiento profesional'
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-construction-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-construction-500" />
                  </div>
                  <CardTitle>{getText(benefit.title, benefit.titleEs)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {getText(benefit.description, benefit.descriptionEs)}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {getText('Current Opportunities', 'Oportunidades Actuales')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {getText(
                'Explore our open positions and find your next career opportunity',
                'Explore nuestras posiciones abiertas y encuentre su próxima oportunidad profesional'
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobListings.map((job, index) => (
              <Card key={job.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {getText(job.title, job.titleEs)}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{getText(job.department, job.departmentEs)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">
                          {getText(job.type, job.typeEs)}
                        </Badge>
                        <Badge className="bg-construction-500 text-white">
                          {job.salary}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    {getText(job.description, job.descriptionEs)}
                  </CardDescription>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">
                        {getText('Key Requirements', 'Requisitos Clave')}
                      </h4>
                      <ul className="space-y-1">
                        {(isSpanish ? job.requirementsEs : job.requirements).slice(0, 3).map((requirement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-construction-500 mt-0.5 flex-shrink-0" />
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      variant="outline" 
                      className="w-full"
                    >
                      {selectedJob === job.id 
                        ? getText('Hide Details', 'Ocultar Detalles')
                        : getText('View Details & Apply', 'Ver Detalles y Aplicar')
                      }
                    </Button>
                  </div>
                </CardContent>
                
                {selectedJob === job.id && (
                  <CardContent className="pt-0 border-t">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-3">
                          {getText('All Requirements', 'Todos los Requisitos')}
                        </h4>
                        <ul className="space-y-2">
                          {(isSpanish ? job.requirementsEs : job.requirements).map((requirement, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-construction-500 mt-0.5 flex-shrink-0" />
                              <span>{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-3">
                          {getText('Benefits', 'Beneficios')}
                        </h4>
                        <ul className="space-y-2">
                          {(isSpanish ? job.benefitsEs : job.benefits).map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-construction-500 mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-construction-500 hover:bg-construction-600">
                        {getText('Apply Now', 'Aplicar Ahora')}
                      </Button>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {getText('Submit Your Application', 'Envíe su Solicitud')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {getText(
                'Complete the form below to apply for any of our open positions',
                'Complete el formulario a continuación para aplicar a cualquiera de nuestras posiciones abiertas'
              )}
            </p>
          </div>
          
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      {getText('First Name', 'Nombre')} *
                    </Label>
                    <Input id="firstName" placeholder={getText('John', 'Juan')} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      {getText('Last Name', 'Apellido')} *
                    </Label>
                    <Input id="lastName" placeholder={getText('Doe', 'Pérez')} required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">
                    {getText('Email Address', 'Dirección de Correo')} *
                  </Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    {getText('Phone Number', 'Número de Teléfono')} *
                  </Label>
                  <Input id="phone" type="tel" placeholder="(225) 555-0123" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="position">
                    {getText('Position of Interest', 'Posición de Interés')} *
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={getText('Select a position', 'Seleccione una posición')} />
                    </SelectTrigger>
                    <SelectContent>
                      {jobListings.map((job) => (
                        <SelectItem key={job.id} value={job.id}>
                          {getText(job.title, job.titleEs)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">
                    {getText('Years of Experience', 'Años de Experiencia')} *
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={getText('Select experience level', 'Seleccione nivel de experiencia')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-2">{getText('0-2 years', '0-2 años')}</SelectItem>
                      <SelectItem value="3-5">{getText('3-5 years', '3-5 años')}</SelectItem>
                      <SelectItem value="6-10">{getText('6-10 years', '6-10 años')}</SelectItem>
                      <SelectItem value="10+">{getText('10+ years', '10+ años')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="coverLetter">
                    {getText('Cover Letter / Why do you want to work with us?', 'Carta de Presentación / ¿Por qué quiere trabajar con nosotros?')}
                  </Label>
                  <Textarea 
                    id="coverLetter" 
                    rows={4} 
                    placeholder={getText(
                      'Tell us about your experience and why you\'re interested in joining our team...',
                      'Cuéntenos sobre su experiencia y por qué está interesado en unirse a nuestro equipo...'
                    )} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="resume">
                    {getText('Resume/CV', 'Currículum')} *
                  </Label>
                  <Input id="resume" type="file" accept=".pdf,.doc,.docx" required />
                  <p className="text-sm text-muted-foreground">
                    {getText('Please upload your resume in PDF or Word format', 'Por favor suba su currículum en formato PDF o Word')}
                  </p>
                </div>
                
                <Button type="submit" className="w-full bg-construction-500 hover:bg-construction-600 text-white py-3">
                  {getText('Submit Application', 'Enviar Solicitud')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {getText('Have Questions?', '¿Tiene Preguntas?')}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {getText(
              'Our HR team is here to help you learn more about career opportunities at Southern Underground',
              'Nuestro equipo de Recursos Humanos está aquí para ayudarle a aprender más sobre las oportunidades profesionales en Southern Underground'
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-construction-500 hover:bg-construction-600 text-white px-8 py-4">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>{getText('Contact HR', 'Contactar RRHH')}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
              <Link href="mailto:careers@southernunderground.com">
                careers@southernunderground.com
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}