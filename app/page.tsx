"use client";

import { useState, useEffect } from "react";
import { Clock, MapPin, Calendar } from "lucide-react";
import Footer from "./_components/Footer";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-04-16T00:00:00');
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              QUEST 2025
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              National level Technical symposium
            </p>
            <p className="text-lg md:text-xl italic text-muted-foreground max-w-3xl mx-auto">
              "More than a Brochure... An Invitation to Something Bigger. A Blueprint for Impact..!"
            </p>
          </div>
          
          {/* Event Details */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>April 16-17, 2025</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>JNTUH-UCESTH CSE-DEPARTMENT</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-card p-4 rounded-lg shadow-lg">
              <div className="text-4xl font-bold">{timeLeft.days}</div>
              <div className="text-sm text-muted-foreground">Days</div>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-lg">
              <div className="text-4xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm text-muted-foreground">Hours</div>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-lg">
              <div className="text-4xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm text-muted-foreground">Minutes</div>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-lg">
              <div className="text-4xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm text-muted-foreground">Seconds</div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="space-y-2 mt-12">
            <p className="text-xl md:text-2xl font-semibold">WE ARE ON A QUEST</p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A QUEST isn't just about reaching a goal—it's about the relentless pursuit of discovery, innovation, and impact
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}