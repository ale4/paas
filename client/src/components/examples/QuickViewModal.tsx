import { QuickViewModal } from "../QuickViewModal";
import { Product } from "../ProductCard";
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

export default function QuickViewModalExample() {
  return (
    <QuickViewModal
      product={mockProduct}
      isOpen={true}
      onClose={() => console.log("Close")}
      onAddToCart={(p, q) => console.log("Add to cart:", p.name, "qty:", q)}
      onAddToBundle={(p) => console.log("Add to bundle:", p.name)}
    />
  );
}
