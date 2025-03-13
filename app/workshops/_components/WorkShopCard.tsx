import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface WorkshopCardProps {
  id: string;
  title: string;
  date: string;
  venue: string;
  speaker: string;
  registrationLink: string;
  imageUrl: string;
}

export function WorkshopCard({
  id,
  title,
  date,
  venue,
  speaker,
  registrationLink,
  imageUrl
}: WorkshopCardProps) {
  return (
    <Link href={`/workshops/${id}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
        {imageUrl && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image 
              src={imageUrl} 
              alt={title} 
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-2">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Date:</strong> {date}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Venue:</strong> {venue}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Speaker:</strong> {speaker}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Register Now →
          </a>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default WorkshopCard;
