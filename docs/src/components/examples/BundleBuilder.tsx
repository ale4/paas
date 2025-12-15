import { BundleBuilder } from "../BundleBuilder";
import { Product } from "../ProductCard";
import bagImage from "@assets/generated_images/black_leather_bag_product.png";
import earringsImage from "@assets/generated_images/gold_earrings_product_shot.png";

// todo: remove mock functionality
const mockBundleItems: Product[] = [
  {
    id: "1",
    name: "Premium Leather Crossbody Bag",
    price: 149.99,
    image: bagImage,
    category: "Bags",
  },
  {
    id: "2",
    name: "Elegant Gold Hoop Earrings",
    price: 79.99,
    image: earringsImage,
    category: "Jewelry",
  },
];

const mockSuggestions: Product[] = [
  {
    id: "s1",
    name: "Matching Gold Bracelet",
    price: 59.99,
    image: "",
    category: "Jewelry",
    isAIRecommended: true,
  },
  {
    id: "s2",
    name: "Silk Scarf",
    price: 45.99,
    image: "",
    category: "Accessories",
    isAIRecommended: true,
  },
];

export default function BundleBuilderExample() {
  return (
    <BundleBuilder
      isOpen={true}
      onClose={() => console.log("Close")}
      bundleItems={mockBundleItems}
      onRemoveFromBundle={(id) => console.log("Remove:", id)}
      onAddBundleToCart={() => console.log("Add bundle to cart")}
      suggestedProducts={mockSuggestions}
      onAddSuggestion={(p) => console.log("Add suggestion:", p.name)}
    />
  );
}
