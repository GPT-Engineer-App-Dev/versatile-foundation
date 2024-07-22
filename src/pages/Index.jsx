import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  const [hellos, setHellos] = useState([]);

  const addHello = () => {
    const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500'];
    const newHello = {
      id: Date.now(),
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setHellos([...hellos, newHello]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Hello Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <Button onClick={addHello} className="mb-4">Say Hello</Button>
            <div className="h-[200px] overflow-y-auto border rounded p-2">
              {hellos.map(hello => (
                <p key={hello.id} className={`${hello.color} font-bold`}>Hello!</p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;