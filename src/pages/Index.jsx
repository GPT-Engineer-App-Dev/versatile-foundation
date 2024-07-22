import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  const [helloCount, setHelloCount] = useState(0);

  const sayHello = () => {
    setHelloCount(prevCount => prevCount + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">Hello Counter</h1>
      </header>

      <main className="flex-grow p-4 flex items-center justify-center">
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Say Hello!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">{helloCount}</p>
              <Button onClick={sayHello}>Hello!</Button>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">
              You've said hello {helloCount} time{helloCount !== 1 ? 's' : ''}.
            </p>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2023 Hello Counter. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;