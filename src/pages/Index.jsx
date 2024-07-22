import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  const [helloCount, setHelloCount] = useState(0);
  const [echoText, setEchoText] = useState("");

  const handleHelloClick = () => {
    setHelloCount(prevCount => prevCount + 1);
    setEchoText("hello".repeat(helloCount + 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">Hello Echo App</h1>
      </header>

      <main className="flex-grow p-4">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Say Hello!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Click the button to echo your hellos!</p>
            <Button onClick={handleHelloClick} className="mb-4">Hello!</Button>
            <div className="p-4 bg-secondary rounded-md">
              <p className="font-mono break-all">{echoText}</p>
            </div>
            <p className="mt-2">Hello count: {helloCount}</p>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2023 Hello Echo App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;