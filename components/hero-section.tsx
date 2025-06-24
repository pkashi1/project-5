import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  showVideo?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA = { text: 'Request Quote', href: '/contact' },
  secondaryCTA = { text: 'View Projects', href: '/projects' },
  backgroundImage = 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg',
  showVideo = false,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-primary/80 dark:bg-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in">
            {title}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
          {description && (
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {description}
            </p>
          )}
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="bg-construction-500 hover:bg-construction-600 text-white px-8 py-4 text-lg">
              <Link href={primaryCTA.href} className="flex items-center space-x-2">
                <span>{primaryCTA.text}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            {showVideo ? (
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                <Play className="h-5 w-5 mr-2" />
                Watch Video
              </Button>
            ) : (
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                <Link href={secondaryCTA.href}>
                  {secondaryCTA.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}