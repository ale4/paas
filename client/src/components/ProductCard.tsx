import { useState } from "react";
import { Heart, Eye, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isAIRecommended?: boolean;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToBundle: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onQuickView, onAddToBundle }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card
      className="group relative overflow-visible border-card-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isAIRecommended && (
            <Badge variant="default" className="gap-1">
              <Sparkles className="h-3 w-3" />
              AI Pick
            </Badge>
          )}
          {product.isNew && (
            <Badge variant="secondary">New</Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive">-{discount}%</Badge>
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 bg-background/80 backdrop-blur ${
            isFavorite ? "text-destructive" : ""
          }`}
          onClick={() => setIsFavorite(!isFavorite)}
          data-testid={`button-favorite-${product.id}`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
        </Button>

        <div
          className={`absolute inset-x-3 bottom-3 flex gap-2 transition-all duration-200 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ visibility: isHovered ? "visible" : "hidden" }}
        >
          <Button
            variant="secondary"
            size="sm"
            className="flex-1 bg-background/90 backdrop-blur"
            onClick={() => onQuickView(product)}
            data-testid={`button-quickview-${product.id}`}
          >
            <Eye className="h-4 w-4 mr-1" />
            View
          </Button>
          <Button
            size="sm"
            className="flex-1"
            onClick={() => onAddToCart(product)}
            data-testid={`button-addtocart-${product.id}`}
          >
            <ShoppingBag className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-medium text-sm line-clamp-2 mb-2" data-testid={`text-product-name-${product.id}`}>
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg" data-testid={`text-price-${product.id}`}>
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
