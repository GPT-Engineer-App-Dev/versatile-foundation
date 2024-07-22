import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow p-4">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">This is a bare-bones application. Start building from here!</p>
            <Input className="mb-2" placeholder="Enter something..." />
            <Button>Click me</Button>
          </CardContent>
        </Card>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-secondary text-secondary-foreground p-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <p>We are a company dedicated to creating amazing applications.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
              <Button variant="outline" className="mr-2">Facebook</Button>
              <Button variant="outline">Twitter</Button>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="text-center">
            <p>&copy; 2023 My Application. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;