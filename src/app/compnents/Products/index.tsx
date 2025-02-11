"use client";
import React from "react";
import Card from "../ui/card/Card";
import CardContent from "../ui/card/CardContent";

interface Product {
  id: number;
  image: string;
  title: string;
  readMoreLink: string; // For expandable cards, this holds the extra text (description)
}

const ProductCard: React.FC<Product> = ({ image, title, readMoreLink }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // If readMoreLink is just "#", we'll assume there's no extra description
  const isExpandable = readMoreLink.trim() !== "#";

  return (
    <Card className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        {isExpandable ? (
          <>
            <button 
              onClick={handleToggle}
              className="text-orange-500 hover:text-orange-600 font-medium text-sm uppercase"
            >
              {isExpanded ? "READ LESS" : "READ MORE"}
            </button>
            {isExpanded && (
              <p className="mt-2 text-gray-600">
                {readMoreLink}
              </p>
            )}
          </>
        ) : (
          <a 
            href={readMoreLink}
            className="text-orange-500 hover:text-orange-600 font-medium text-sm uppercase"
          >
            READ MORE
          </a>
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
      readMoreLink: "Honey is rich in nutrients and antioxidants, has antibacterial properties, and can play a role in diabetes management as part of a balanced diet. "
    },
    {
      id: 2,
      image: "/images/wheat.jpeg",
      title: "Traditional Organic White Flour",
      readMoreLink:
        "Introducing Thames Organic's Traditional Organic White Flour, a premium product crafted with care to bring you the essence of wholesome goodness."
    },
    {
      id: 3,
      image: "/images/8.jpg",
      title: "Vehicle Rentals",
      readMoreLink: "Rent with confidence! Our flexible booking options and commitment to no hidden fees make renting a car simple and stress-free. Secure your car rental at the best price today and experience worry-free travel."
    },
    {
      id: 4,
      image: "/images/It.jpg",
      title: "IT Equipments",
      readMoreLink: "Equip your business for success with our comprehensive range of IT equipment. From powerful servers and reliable networking solutions to high-performance workstations and user-friendly peripherals, we offer everything you need to stay competitive."
    },
    {
      id: 5,
      image: "/images/10.jpg",
      title: "Pastry flour",
      readMoreLink: "Ideal for pie crusts, biscuits, cookies, French pastries, and other flaky baked goods. It's often used when low gluten development and a tender or flaky texture are desired"
    },
    {
      id: 6,
      image: "/images/11.jpg",
      title: "Bread flour",
      readMoreLink: "Bread flour is best for baking yeast breads because the high protein content facilitates strong gluten development. The strong and elastic dough structure helps trap air, producing an airy and chewy texture in the baked bread"
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

