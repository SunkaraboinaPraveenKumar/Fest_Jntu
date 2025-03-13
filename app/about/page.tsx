"use client";

import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

interface OfficialProps {
  title: string;
  name: string;
}

interface CoordinatorProps {
  name: string;
  email?: string;
  phone?: string;
}

const Official = ({ title, name }: OfficialProps) => (
  <div className="space-y-1">
    <h3 className="font-medium text-muted-foreground">{title}</h3>
    <p className="font-semibold">{name}</p>
  </div>
);

const Coordinator = ({ name, email, phone }: CoordinatorProps) => (
  <div className="flex flex-col space-y-2">
    <p className="font-semibold">{name}</p>
    {email && (
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Mail className="h-4 w-4" />
        <span>{email}</span>
      </div>
    )}
    {phone && (
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Phone className="h-4 w-4" />
        <span>{phone}</span>
      </div>
    )}
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* About Section */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold">About QUEST</h1>
          <p className="text-lg text-muted-foreground">
            For the past 20 years, QUEST has stood as a beacon of innovation, collaboration, and technical brilliance. This year, we break the mold. QUEST 2025 isn't just another edition—it's a redefinition.
          </p>
        </section>

        {/* University Officials */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">University Officials</h2>
          <Card className="p-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Official title="Vice Chancellor" name="Prof. T Kishen Kumar Reddy" />
              <Official title="Rector" name="Dr. K Vijaya Kumar Reddy" />
              <Official title="Registrar" name="Dr. K Venkateshwara Rao" />
              <Official title="Principal" name="Dr. G Venkata Narasimha Reddy" />
              <Official title="Head of the Dept." name="Dr. K P Supreethi" />
            </div>
          </Card>
        </section>

        {/* Faculty Coordinators */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Faculty Coordinators</h2>
          <Card className="p-6">
            <div className="grid gap-8 sm:grid-cols-2">
              <Coordinator 
                name="DR. K SURESH BABU"
                phone="9949886161"
                email="kare_suresh@jntuh.ac.in"
              />
              <Coordinator 
                name="DR. E HEMALATHA"
                phone="9908013310"
                email="hemamorarjee@jntuh.ac.in"
              />
            </div>
          </Card>
        </section>

        {/* Student Coordinators */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Student Coordinators</h2>
          <Card className="p-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Coordinator name="ADITYA" />
              <Coordinator name="RAHUL" />
              <Coordinator name="SAI TEJA" />
              <Coordinator name="SHIVANI AARADHYA" />
              <Coordinator name="SAI NISHITHA" />
              <Coordinator 
                name="ABHI CHETHAN"
                phone="8019668063"
                email="bhupathiabhichethan@gmail.com"
              />
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}