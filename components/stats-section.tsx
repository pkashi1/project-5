import React from 'react';

interface Stat {
  number: string;
  label: string;
  description: string;
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
}

export function StatsSection({ 
  stats, 
  title = "Our Track Record",
  subtitle = "Building excellence through proven results"
}: StatsSectionProps) {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl md:text-5xl font-bold text-construction-400 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-primary-foreground/80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}