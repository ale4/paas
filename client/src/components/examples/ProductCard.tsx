import { ProductCard, Product } from "../ProductCard";
import bagImage from "@assets/generated_images/black_leather_bag_product.png";

// todo: remove mock functionality
const mockProduct: Product = {
  id: "1",
  name: "Premium Leather Crossbody Bag",
  price: 149.99,
  originalPrice: 199.99,
  image: bagImage,
  category: "Bags",
  isAIRecommended: true,
  isNew: true,
};

export default function ProductCardExample() {
  return (
    <div className="w-72">
      <ProductCard
        product={mockProduct}
        onAddToCart={(p) => console.log("Add to cart:", p.name)}
        onQuickView={(p) => console.log("Quick view:", p.name)}
        onAddToBundle={(p) => console.log("Add to bundle:", p.name)}
      />
    </div>
  );
}
