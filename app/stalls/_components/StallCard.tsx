import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Store, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface StallCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  contactName?: string;
  contactPhone?: string;
  contactEmail?: string;
  imageUrl?: string;
  className?: string;
}

export function StallCard({
  id,
  name,
  description,
  category,
  contactName,
  contactPhone,
  contactEmail,
  imageUrl,
  className
}: StallCardProps) {
  return (
    <Link href={`/stalls/${id}`}>
      <Card className={cn('overflow-hidden card-hover h-full', className)}>
        {imageUrl && (
          <div className="h-48 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="p-4">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg md:text-xl">{name}</CardTitle>
            <Badge variant="outline" className="ml-2">{category}</Badge>
          </div>
          <CardDescription className="line-clamp-2 mt-1">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 pb-2">
          {(contactName || contactPhone || contactEmail) && (
            <div className="flex flex-col space-y-2 text-sm">
              {contactName && (
                <div className="flex items-center">
                  <Store className="h-4 w-4 mr-2 text-quest-600" />
                  <span>{contactName}</span>
                </div>
              )}
              {contactPhone && (
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-quest-600" />
                  <span>{contactPhone}</span>
                </div>
              )}
              {contactEmail && (
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-quest-600" />
                  <span className="truncate">{contactEmail}</span>
                </div>
              )}
            </div>
          )}
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

export default StallCard;