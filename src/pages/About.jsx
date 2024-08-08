import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">About Acme Inc</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Acme Inc is a cutting-edge technology company specializing in innovative solutions for the modern world. Founded in 2010, we've been at the forefront of digital transformation, helping businesses and individuals harness the power of technology to achieve their goals.
          </p>
          <p className="mb-4">
            Our team of expert developers, designers, and strategists work tirelessly to create products that are not only functional but also user-friendly and aesthetically pleasing. From mobile applications to enterprise software, we pride ourselves on delivering high-quality solutions that meet the unique needs of our diverse clientele.
          </p>
          <p className="mb-4">
            At Acme Inc, we believe in the power of innovation to change the world. That's why we're constantly exploring new technologies and methodologies to stay ahead of the curve. Our commitment to excellence and customer satisfaction has earned us a reputation as a trusted partner in the tech industry.
          </p>
          <p>
            Join us on our mission to shape the future of technology. Whether you're a startup looking to make your mark or an established enterprise seeking to modernize your operations, Acme Inc has the expertise and passion to help you succeed in the digital age.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
