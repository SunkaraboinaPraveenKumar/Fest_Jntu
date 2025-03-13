import React from 'react';
import { workshops } from '../../data/workshops';
import WorkshopCard from './_components/WorkShopCard'

const WorkshopsPage = () => {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
        Workshops
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop) => (
          <WorkshopCard 
            key={workshop.id}
            id={workshop.id+""}
            title={workshop.title}
            date={workshop.date}
            venue={workshop.venue}
            speaker={workshop.speaker}
            registrationLink={workshop.registrationLink}
            imageUrl={workshop.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkshopsPage;
