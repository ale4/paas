import { useState } from "react";
import { Heart, ShoppingBag, Package, Sparkles, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Product } from "./ProductCard";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onAddToBundle: (product: Product) => void;
}

export function QuickViewModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onAddToBundle,
}: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) return null;

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isAIRecommended && (
                <Badge variant="default" className="gap-1">
                  <Sparkles className="h-3 w-3" />
                  AI Pick
                </Badge>
              )}
              {product.isNew && <Badge variant="secondary">New</Badge>}
              {discount > 0 && <Badge variant="destructive">-{discount}%</Badge>}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
              <h2 className="text-2xl font-semibold mb-2" data-testid="text-quickview-name">
                {product.name}
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold" data-testid="text-quickview-price">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Elevate your style with this premium piece. Crafted with attention to detail and designed for the modern lifestyle.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  data-testid="button-quickview-decrease"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  data-testid="button-quickview-increase"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <Button
                className="flex-1"
                size="lg"
                onClick={() => {
                  onAddToCart(product, quantity);
                  onClose();
                }}
                data-testid="button-quickview-add"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
                className={isFavorite ? "text-destructive" : ""}
                data-testid="button-quickview-favorite"
              >
                <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
              </Button>
            </div>

            <Button
              variant="secondary"
              onClick={() => {
                onAddToBundle(product);
                onClose();
              }}
              data-testid="button-quickview-bundle"
            >
              <Package className="h-4 w-4 mr-2" />
              Add to Bundle
            </Button>

            <Separator className="my-6" />

            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                Free shipping on orders over $100
              </p>
              <p className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                Easy 30-day returns
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
