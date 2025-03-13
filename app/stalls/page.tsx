"use client"
import { useState } from 'react';
import { StallCard } from './_components/StallCard'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';

// Sample stall data
const stalls = [
  {
    id: '1',
    name: 'Tech Innovators',
    description: 'Showcasing the latest in AI and machine learning technologies with interactive demos.',
    category: 'Technical',
    contactName: 'John Doe',
    contactPhone: '9876543210',
    contactEmail: 'techinnovators@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'GameZone',
    description: 'Experience cutting-edge VR and AR gaming with our immersive setups.',
    category: 'Gaming',
    contactName: 'Jane Smith',
    contactPhone: '9876543211',
    contactEmail: 'gamezone@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'DevTools Pro',
    description: 'Professional development tools and resources for modern software engineers.',
    category: 'Technical',
    contactName: 'Mike Johnson',
    contactPhone: '9876543212',
    contactEmail: 'devtools@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Food Court Express',
    description: 'Delicious food and refreshing beverages to keep you energized throughout the event.',
    category: 'Food',
    contactName: 'Sarah Williams',
    contactPhone: '9876543213',
    contactEmail: 'foodcourt@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Startup Showcase',
    description: 'Platform for emerging startups to showcase their innovative products and services.',
    category: 'Startup',
    contactName: 'David Brown',
    contactPhone: '9876543214',
    contactEmail: 'startups@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'Book Haven',
    description: 'Collection of technical books, magazines, and educational resources for tech enthusiasts.',
    category: 'Educational',
    contactName: 'Emily Clark',
    contactPhone: '9876543215',
    contactEmail: 'books@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    name: 'Tech Merchandise',
    description: 'Exclusive QUEST 2025 merchandise and tech-themed apparel and accessories.',
    category: 'Merchandise',
    contactName: 'Ryan Davis',
    contactPhone: '9876543216',
    contactEmail: 'merchandise@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    name: 'Robotics Hub',
    description: 'Interactive robotics demonstrations and hands-on experience with advanced robots.',
    category: 'Technical',
    contactName: 'Lisa Green',
    contactPhone: '9876543217',
    contactEmail: 'robotics@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '9',
    name: 'Coffee Lounge',
    description: 'Premium coffee and snacks in a relaxed environment for networking and discussions.',
    category: 'Food',
    contactName: 'Mark Wilson',
    contactPhone: '9876543218',
    contactEmail: 'coffee@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

// Get unique categories
const categories = Array.from(new Set(stalls.map(stall => stall.category)));

export function StallsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter stalls based on search query and selected category
  const filteredStalls = stalls.filter(stall => {
    const matchesSearch = stall.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          stall.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? stall.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              Stalls
            </h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-100">
              Explore a variety of stalls featuring cutting-edge technology, food, merchandise, and more
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
                placeholder="Search stalls..."
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

      {/* Stalls Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredStalls.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredStalls.map(stall => (
                <StallCard key={stall.id} {...stall} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No stalls found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stall Categories Section */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Stall Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Technical Stalls",
                description: "Explore cutting-edge technology, gadgets, development tools, and innovations.",
                examples: ["Tech Innovators", "DevTools Pro", "Robotics Hub"]
              },
              {
                title: "Gaming Stalls",
                description: "Experience immersive gaming with VR/AR setups and compete in gaming competitions.",
                examples: ["GameZone", "VR Arena", "Gaming Competitions"]
              },
              {
                title: "Food & Beverage",
                description: "Refuel with delicious food and refreshing beverages throughout the event.",
                examples: ["Food Court Express", "Coffee Lounge", "Snack Corner"]
              },
              {
                title: "Startup Showcase",
                description: "Discover innovative products and services from emerging startups.",
                examples: ["Startup Showcase", "Innovation Hub", "Incubation Center"]
              },
              {
                title: "Educational Resources",
                description: "Access valuable educational materials, books, and learning resources.",
                examples: ["Book Haven", "Learning Center", "Education Hub"]
              },
              {
                title: "Merchandise",
                description: "Get exclusive QUEST 2025 merchandise and tech-themed apparel.",
                examples: ["Tech Merchandise", "Quest Apparel", "Souvenir Shop"]
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
                    Examples:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {category.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stall Registration CTA */}
      <section className="py-16 bg-quest-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to Set Up a Stall?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Showcase your products or services at QUEST 2025. Limited stall spaces available, book yours today!
          </p>
          <Button asChild size="lg">
            <a href="/stall-registration">Register Your Stall</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default StallsPage;