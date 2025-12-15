import { CartDrawer, CartItem } from "../CartDrawer";
import bagImage from "@assets/generated_images/black_leather_bag_product.png";
import earringsImage from "@assets/generated_images/gold_earrings_product_shot.png";

// todo: remove mock functionality
const mockCartItems: CartItem[] = [
  {
    id: "1",
    name: "Premium Leather Crossbody Bag",
    price: 149.99,
    image: bagImage,
    category: "Bags",
    quantity: 1,
  },
  {
    id: "2",
    name: "Elegant Gold Hoop Earrings",
    price: 79.99,
    image: earringsImage,
    category: "Jewelry",
    quantity: 2,
  },
];

export default function CartDrawerExample() {
  return (
    <CartDrawer
      isOpen={true}
      onClose={() => console.log("Close")}
      items={mockCartItems}
      onUpdateQuantity={(id, qty) => console.log("Update:", id, qty)}
      onRemoveItem={(id) => console.log("Remove:", id)}
      onCheckout={() => console.log("Checkout")}
    />
  );
}
