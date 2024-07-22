import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Hello Counter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <p className="text-4xl font-bold mb-4">{count}</p>
            <div className="flex justify-center space-x-2">
              <Button onClick={decrement}>Decrement</Button>
              <Button onClick={increment}>Increment</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;