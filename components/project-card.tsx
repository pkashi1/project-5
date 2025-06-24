import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  location: string;
  completedDate: string;
  category: string;
  image: string;
  href: string;
}

export function ProjectCard({
  title,
  description,
  location,
  completedDate,
  category,
  image,
  href,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-construction-500 text-white">
            {category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-construction-500 transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{completedDate}</span>
          </div>
        </div>
        <Button asChild variant="outline" className="w-full group-hover:border-construction-500 group-hover:text-construction-500 transition-colors">
          <Link href={href} className="flex items-center justify-center space-x-2">
            <span>View Details</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}