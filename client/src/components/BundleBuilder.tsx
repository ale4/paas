import { useState } from "react";
import { X, Plus, Sparkles, ShoppingBag, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "./ProductCard";
import { Separator } from "@/components/ui/separator";

interface BundleBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  bundleItems: Product[];
  onRemoveFromBundle: (productId: string) => void;
  onAddBundleToCart: () => void;
  suggestedProducts: Product[];
  onAddSuggestion: (product: Product) => void;
}

export function BundleBuilder({
  isOpen,
  onClose,
  bundleItems,
  onRemoveFromBundle,
  onAddBundleToCart,
  suggestedProducts,
  onAddSuggestion,
}: BundleBuilderProps) {
  const subtotal = bundleItems.reduce((sum, item) => sum + item.price, 0);
  const bundleDiscount = bundleItems.length >= 3 ? 0.15 : bundleItems.length >= 2 ? 0.10 : 0;
  const discountAmount = subtotal * bundleDiscount;
  const total = subtotal - discountAmount;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Smart Bundle Builder
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="md:col-span-2">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h4 className="font-medium">Your Bundle</h4>
              {bundleDiscount > 0 && (
                <Badge variant="default" className="gap-1">
                  <Percent className="h-3 w-3" />
                  {Math.round(bundleDiscount * 100)}% OFF
                </Badge>
              )}
            </div>

            {bundleItems.length === 0 ? (
              <Card className="border-dashed border-2">
                <CardContent className="py-12 text-center">
                  <Plus className="h-8 w-8 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Add items to your bundle to unlock discounts
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    2 items = 10% off, 3+ items = 15% off
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3">
                {bundleItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold">${item.price.toFixed(2)}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onRemoveFromBundle(item.id)}
                            data-testid={`button-remove-${item.id}`}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <Separator className="my-6" />

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {bundleDiscount > 0 && (
                <div className="flex justify-between text-sm text-green-600 dark:text-green-400">
                  <span>Bundle Discount ({Math.round(bundleDiscount * 100)}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              className="w-full mt-6"
              size="lg"
              disabled={bundleItems.length === 0}
              onClick={onAddBundleToCart}
              data-testid="button-add-bundle-to-cart"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add Bundle to Cart
            </Button>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <h4 className="font-medium">AI Suggestions</h4>
            </div>
            <div className="space-y-3">
              {suggestedProducts.map((product) => (
                <Card
                  key={product.id}
                  className="hover-elevate cursor-pointer"
                  onClick={() => onAddSuggestion(product)}
                  data-testid={`card-suggestion-${product.id}`}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center overflow-hidden flex-shrink-0">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Sparkles className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{product.name}</p>
                        <p className="text-sm font-bold">${product.price.toFixed(2)}</p>
                      </div>
                      <Plus className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
