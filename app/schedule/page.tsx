"use client";

import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

interface EventScheduleProps {
  time: string;
  event: string;
  location?: string;
}

const EventSchedule = ({ time, event, location }: EventScheduleProps) => (
  <div className="flex items-start space-x-4 p-4">
    <div className="flex items-center space-x-2 min-w-[120px] text-muted-foreground">
      <Clock className="h-4 w-4" />
      <span>{time}</span>
    </div>
    <div className="flex-1">
      <h3 className="font-semibold">{event}</h3>
      {location && <p className="text-sm text-muted-foreground">{location}</p>}
    </div>
  </div>
);

export default function Schedule() {
  const day1Events = [
    {
      time: "09:00 AM",
      event: "Registration & Check-in",
      location: "Main Entrance"
    },
    {
      time: "10:00 AM",
      event: "Opening Ceremony",
      location: "Main Auditorium"
    },
    {
      time: "11:00 AM",
      event: "Technical Workshops Begin",
      location: "Workshop Halls"
    },
    {
      time: "01:00 PM",
      event: "Lunch Break",
      location: "Food Court"
    },
    {
      time: "02:00 PM",
      event: "TechnoMaze & Coding Events",
      location: "Computer Labs"
    },
    {
      time: "04:00 PM",
      event: "Startup Expo",
      location: "Exhibition Hall"
    },
    {
      time: "05:30 PM",
      event: "Day 1 Closing Ceremony",
      location: "Main Auditorium"
    }
  ];

  const day2Events = [
    {
      time: "09:30 AM",
      event: "Day 2 Check-in",
      location: "Main Entrance"
    },
    {
      time: "10:00 AM",
      event: "Hackathon Kickoff",
      location: "Hackathon Arena"
    },
    {
      time: "11:00 AM",
      event: "Non-Technical Workshops",
      location: "Workshop Halls"
    },
    {
      time: "01:00 PM",
      event: "Lunch Break",
      location: "Food Court"
    },
    {
      time: "02:00 PM",
      event: "Gaming Tournament Finals",
      location: "Gaming Zone"
    },
    {
      time: "04:00 PM",
      event: "Prize Distribution",
      location: "Main Auditorium"
    },
    {
      time: "05:00 PM",
      event: "Closing Ceremony",
      location: "Main Auditorium"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="space-y-6">
          <h1 className="text-4xl font-bold">Event Schedule</h1>
          <p className="text-lg text-muted-foreground">
            Join us for two days of innovation, learning, and excitement at QUEST 2025.
            Mark your calendar for April 16-17, 2025.
          </p>
        </section>

        {/* Day 1 Schedule */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <Calendar className="h-6 w-6" />
            <h2 className="text-2xl font-semibold">Day 1 - April 16, 2025</h2>
          </div>
          <Card>
            <div className="divide-y">
              {day1Events.map((event, index) => (
                <EventSchedule key={index} {...event} />
              ))}
            </div>
          </Card>
        </section>

        {/* Day 2 Schedule */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <Calendar className="h-6 w-6" />
            <h2 className="text-2xl font-semibold">Day 2 - April 17, 2025</h2>
          </div>
          <Card>
            <div className="divide-y">
              {day2Events.map((event, index) => (
                <EventSchedule key={index} {...event} />
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}