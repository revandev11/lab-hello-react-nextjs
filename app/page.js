import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    image: "https://placehold.co/300x200?text=Headphones",
    description: "Premium sound quality with noise cancellation.",
    inStock: true,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 89.99,
    image: "https://placehold.co/300x200?text=Keyboard",
    description: "Tactile switches with RGB backlighting.",
    inStock: true,
  },
  {
    id: 3,
    name: "USB-C Hub",
    price: 34.99,
    image: "https://placehold.co/300x200?text=USB-C+Hub",
    description: "7-in-1 hub with HDMI, USB 3.0, and SD card reader.",
    inStock: false,
  },
  {
    id: 4,
    name: "Webcam HD",
    price: 45.0,
    image: "https://placehold.co/300x200?text=Webcam",
    description: "1080p resolution with built-in microphone.",
    inStock: true,
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: 29.99,
    image: "https://placehold.co/300x200?text=Laptop+Stand",
    description: "Adjustable aluminum stand for better ergonomics.",
    inStock: false,
  },
  {
    id: 6,
    name: "Portable Charger",
    price: 24.99,
    image: "https://placehold.co/300x200?text=Charger",
    description: "10000mAh battery pack with fast charging support.",
    inStock: true,
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      <section>
        <h2>Our Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              inStock={product.inStock}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}