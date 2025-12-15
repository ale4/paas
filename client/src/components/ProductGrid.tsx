import { ProductCard, Product } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToBundle: (product: Product) => void;
  title?: string;
}

export function ProductGrid({ products, onAddToCart, onQuickView, onAddToBundle, title }: ProductGridProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-2xl font-semibold mb-8">{title}</h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              onAddToBundle={onAddToBundle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
