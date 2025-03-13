"use client"
import { useState } from 'react';
import {EventCard} from './_components/EventCard'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';

// Sample event data
const events = [
  {
    id: '1',
    title: 'Hackathon 2025',
    description: 'A 24-hour coding marathon to solve real-world problems.',
    date: 'April 16, 2025',
    time: '9:00 AM - 9:00 AM (Next day)',
    venue: 'CSE Department',
    category: 'Hackathons',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'AI for Everyone',
    description: 'Learn about the latest in Artificial Intelligence and how it can be applied.',
    date: 'April 16, 2025',
    time: '10:00 AM - 12:00 PM',
    venue: 'Workshop Hall 1',
    category: 'Technical Workshops',
    imageUrl: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Ethical Hacking & Cyber Warfare',
    description: 'Dive into the world of ethical hacking and learn how to protect systems from cyber attacks.',
    date: 'April 16, 2025',
    time: '2:00 PM - 5:00 PM',
    venue: 'Workshop Hall 2',
    category: 'Technical Workshops',
    imageUrl: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Photography & Cinematography',
    description: 'Master the art of visual storytelling through photography and cinematography.',
    date: 'April 16, 2025',
    time: '3:00 PM - 6:00 PM',
    venue: 'Media Lab',
    category: 'Non-Technical Workshops',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'TechnoMaze',
    description: 'Navigate through technical challenges and puzzles to win exciting prizes.',
    date: 'April 17, 2025',
    time: '10:00 AM - 1:00 PM',
    venue: 'Main Auditorium',
    category: 'Technical Events',
    imageUrl: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'Blind Code',
    description: 'Code without seeing the output until submission. Test your programming skills!',
    date: 'April 17, 2025',
    time: '11:00 AM - 1:00 PM',
    venue: 'Lab 101',
    category: 'Technical Events',
    imageUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '9',
    title: 'Startup Expo',
    description: 'Showcase your startup idea or product to investors and peers.',
    date: 'April 17, 2025',
    time: '10:00 AM - 5:00 PM',
    venue: 'Exhibition Hall',
    category: 'Technical Events',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '11',
    title: 'Blockchain Beyond Crypto',
    description: 'Discover applications of blockchain technology beyond cryptocurrencies.',
    date: 'April 17, 2025',
    time: '9:00 AM - 12:00 PM',
    venue: 'Workshop Hall 1',
    category: 'Technical Workshops',
    imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '12',
    title: 'Next-Gen Robotics & Automation',
    description: 'Learn about cutting-edge robotics and automation technologies.',
    date: 'April 17, 2025',
    time: '1:00 PM - 4:00 PM',
    venue: 'Robotics Lab',
    category: 'Technical Workshops',
    imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

// Get unique categories
const categories = Array.from(new Set(events.map(event => event.category)));

export function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter events based on search query and selected category
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? event.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero section */}
      <section className="bg-quest-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              Events
            </h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-100">
              Discover exciting workshops, competitions, and experiences at QUEST 2025
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/3 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search events..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className="flex items-center"
              >
                <Filter className="h-4 w-4 mr-2" />
                All
              </Button>
              
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="px-3 py-1 cursor-pointer"
                  onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No events found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Event Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Technical Workshops",
                description: "Dive deep into cutting-edge technologies with hands-on workshops led by industry experts.",
                events: ["Ethical Hacking & Cyber Warfare", "AI for Everyone", "Blockchain Beyond Crypto", "Next-Gen Robotics & Automation", "Cloud Computing & DevOps"]
              },
              {
                title: "Non-Technical Workshops",
                description: "Develop essential soft skills and explore creative domains beyond technical expertise.",
                events: ["Photography & Cinematography", "Video Editing & Content Creation", "UI/UX Design & Freelancing", "Public Speaking & Personality Development", "Stock Market & Crypto Basics"]
              },
              {
                title: "Hackathons",
                description: "Solve real-world problems with innovative solutions in time-bound coding challenges.",
                events: ["24-Hour Hackathon", "AI Challenge", "Blockchain Hackathon", "IoT Solutions Hackathon"]
              },
              {
                title: "Technical Events",
                description: "Showcase your technical skills in various competitions and challenges.",
                events: ["TechnoMaze", "Blind Code", "Relay Code", "Webwiz", "CodeForge Arena", "Quantum Sandbox"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-quest-700 dark:text-quest-400 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {category.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase mb-2">
                    Featured Events:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {category.events.map((event, eventIndex) => (
                      <li key={eventIndex}>{event}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-quest-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Participate?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Register now to secure your spot in these exciting events. Early registrations get special benefits!
          </p>
          <Button asChild size="lg">
            <a href="/register">Register for Events</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default EventsPage;