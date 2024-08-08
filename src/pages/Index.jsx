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
    <div className="flex flex-col items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Hello Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <Button onClick={addHello} className="mb-4 w-full">Say Hello</Button>
            <div className="h-[400px] overflow-y-auto border rounded p-4">
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
