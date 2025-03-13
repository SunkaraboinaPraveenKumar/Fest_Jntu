import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  imageUrl?: string;
  className?: string;
}

export function EventCard({
  id,
  title,
  description,
  date,
  time,
  venue,
  category,
  imageUrl,
  className
}: EventCardProps) {
  return (
    <Link href={`/events/${id}`}>
      <Card className={cn('overflow-hidden card-hover h-full', className)}>
        {imageUrl && (
          <div className="h-48 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="p-4">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
            <Badge variant="secondary" className="ml-2">{category}</Badge>
          </div>
          <CardDescription className="line-clamp-2 mt-1">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 pb-2">
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-quest-600" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-quest-600" />
              <span>{time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-quest-600" />
              <span>{venue}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="text-quest-700 dark:text-quest-400 text-sm font-medium hover:underline">
            View Details →
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default EventCard;