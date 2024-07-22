import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  const [helloCount, setHelloCount] = useState(0);

  const handleHelloClick = () => {
    setHelloCount(helloCount + 1);
  };

  const getResponse = () => {
    if (helloCount === 0) return "Click the button to say hello!";
    if (helloCount === 1) return "Hello to you too!";
    if (helloCount === 2) return "Hello again!";
    if (helloCount === 3) return "My, you're friendly!";
    if (helloCount === 4) return "Okay, I get it, you like to say hello!";
    return "Hello! Hello! Hello! (I can do this all day)";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>The Hello Counter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{getResponse()}</p>
          <Button onClick={handleHelloClick}>Say Hello</Button>
          <p className="mt-4">Hello count: {helloCount}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;