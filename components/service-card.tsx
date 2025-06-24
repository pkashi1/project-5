import React from 'react';
import Link from 'next/link';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: typeof LucideIcon;
  href: string;
  features: string[];
}

export function ServiceCard({ title, description, icon: Icon, href, features }: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
      <CardHeader className="pb-4">
        <div className="w-12 h-12 bg-construction-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-construction-500/20 transition-colors">
          <Icon className="h-6 w-6 text-construction-500" />
        </div>
        <CardTitle className="text-xl group-hover:text-construction-500 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm">
              <div className="w-1.5 h-1.5 bg-construction-500 rounded-full mt-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="w-full group-hover:border-construction-500 group-hover:text-construction-500 transition-colors">
          <Link href={href} className="flex items-center justify-center space-x-2">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}