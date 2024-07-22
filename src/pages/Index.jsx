import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [helloMessage, setHelloMessage] = useState("Hello!");

  const languages = {
    english: "Hello!",
    spanish: "¡Hola!",
    french: "Bonjour!",
    german: "Hallo!",
    italian: "Ciao!",
    japanese: "こんにちは (Konnichiwa)!",
    korean: "안녕하세요 (Annyeonghaseyo)!",
    chinese: "你好 (Nǐ hǎo)!",
  };

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    setHelloMessage(languages[value]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">Multi-lingual Hello App</h1>
      </header>

      <main className="flex-grow p-4">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Say Hello in Different Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={handleLanguageChange} defaultValue={selectedLanguage}>
              <SelectTrigger className="w-full mb-4">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(languages).map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="p-4 bg-secondary rounded-md text-center">
              <p className="text-2xl font-bold">{helloMessage}</p>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2023 Multi-lingual Hello App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;