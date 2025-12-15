import { VisualSearchModal } from "../VisualSearchModal";

export default function VisualSearchModalExample() {
  return (
    <VisualSearchModal
      isOpen={true}
      onClose={() => console.log("Close clicked")}
      onAddToCart={(p) => console.log("Add to cart:", p.name)}
    />
  );
}
