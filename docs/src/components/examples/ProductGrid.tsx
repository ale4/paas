import { ProductGrid } from "../ProductGrid";
import { Product } from "../ProductCard";
import bagImage from "@assets/generated_images/black_leather_bag_product.png";
import earringsImage from "@assets/generated_images/gold_earrings_product_shot.png";
import watchImage from "@assets/generated_images/white_ceramic_watch_product.png";
import sunglassesImage from "@assets/generated_images/designer_sunglasses_product.png";

// todo: remove mock functionality
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Leather Crossbody Bag",
    price: 149.99,
    originalPrice: 199.99,
    image: bagImage,
    category: "Bags",
    isAIRecommended: true,
  },
  {
    id: "2",
    name: "Elegant Gold Hoop Earrings",
    price: 79.99,
    image: earringsImage,
    category: "Jewelry",
    isNew: true,
  },
  {
    id: "3",
    name: "Ceramic Luxury Watch",
    price: 299.99,
    originalPrice: 349.99,
    image: watchImage,
    category: "Watches",
    isAIRecommended: true,
  },
  {
    id: "4",
    name: "Designer Tortoise Sunglasses",
    price: 189.99,
    image: sunglassesImage,
    category: "Eyewear",
  },
];

export default function ProductGridExample() {
  return (
    <ProductGrid
      title="Featured Products"
      products={mockProducts}
      onAddToCart={(p) => console.log("Add to cart:", p.name)}
      onQuickView={(p) => console.log("Quick view:", p.name)}
      onAddToBundle={(p) => console.log("Add to bundle:", p.name)}
    />
  );
}
