"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "../ui/card/Card";
import CardContent from "../ui/card/CardContent";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<Product> = ({ image, title, description }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-square overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          width={500} 
          height={500}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        {description.length > 100 ? (
          <>
            <p className="text-gray-600">
              {isExpanded ? description : `${description.substring(0, 100)}...`}
            </p>
            <button 
              onClick={handleToggle}
              className="mt-2 text-orange-500 hover:text-orange-600 font-medium text-sm uppercase transition"
            >
              {isExpanded ? "READ LESS" : "READ MORE"}
            </button>
          </>
        ) : (
          <p className="text-gray-600">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

const ProductGrid: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      image: "/images/6.jpg",
      title: "Natural Honey",
      description: "Honey is rich in nutrients and antioxidants, has antibacterial properties, and can play a role in diabetes management as part of a balanced diet."
    },
    {
      id: 2,
      image: "/images/wheat.jpeg",
      title: "Traditional Organic White Flour",
      description: "Introducing Thames Organic's Traditional Organic White Flour, a premium product crafted with care to bring you the essence of wholesome goodness."
    },
    {
      id: 3,
      image: "/images/8.jpg",
      title: "Vehicle Rentals",
      description: "Rent with confidence! Our flexible booking options and commitment to no hidden fees make renting a car simple and stress-free. Secure your car rental at the best price today and experience worry-free travel."
    },
    {
      id: 4,
      image: "/images/It.jpg",
      title: "IT Equipments",
      description: "Equip your business for success with our comprehensive range of IT equipment. From powerful servers and reliable networking solutions to high-performance workstations and user-friendly peripherals, we offer everything you need to stay competitive."
    },
    {
      id: 5,
      image: "/images/10.jpg",
      title: "Pastry Flour",
      description: "Ideal for pie crusts, biscuits, cookies, French pastries, and other flaky baked goods. It's often used when low gluten development and a tender or flaky texture are desired."
    },
    {
      id: 6,
      image: "/images/11.jpg",
      title: "Bread Flour",
      description: "Bread flour is best for baking yeast breads because the high protein content facilitates strong gluten development. The strong and elastic dough structure helps trap air, producing an airy and chewy texture in the baked bread."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8" id="products">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

