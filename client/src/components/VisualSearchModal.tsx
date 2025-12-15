import { useState, useCallback } from "react";
import { X, Upload, Camera, Loader2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Product } from "./ProductCard";
import { Card } from "@/components/ui/card";

interface VisualSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function VisualSearchModal({ isOpen, onClose, onAddToCart }: VisualSearchModalProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<Product[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      processFile(file);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      performSearch();
    };
    reader.readAsDataURL(file);
  };

  const performSearch = () => {
    setIsSearching(true);
    // todo: remove mock functionality - simulate AI visual search
    setTimeout(() => {
      setResults([
        {
          id: "vs-1",
          name: "Similar Style Match",
          price: 159.99,
          image: "",
          category: "Best Match",
          isAIRecommended: true,
        },
        {
          id: "vs-2",
          name: "Alternative Option",
          price: 129.99,
          image: "",
          category: "Similar",
        },
        {
          id: "vs-3",
          name: "Budget Friendly",
          price: 89.99,
          originalPrice: 119.99,
          image: "",
          category: "Similar",
        },
      ]);
      setIsSearching(false);
    }, 2000);
  };

  const handleClose = () => {
    setUploadedImage(null);
    setResults([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            Visual Search
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragOver ? "border-primary bg-primary/5" : "border-border"
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
            >
              {uploadedImage ? (
                <div className="relative">
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="max-h-64 mx-auto rounded-lg object-contain"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      setUploadedImage(null);
                      setResults([]);
                    }}
                    data-testid="button-clear-image"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Drag and drop an image, or click to upload
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="image-upload"
                    onChange={handleFileSelect}
                    data-testid="input-image-upload"
                  />
                  <div className="flex flex-wrap justify-center gap-2">
                    <Button asChild variant="outline">
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Image
                      </label>
                    </Button>
                    <Button variant="outline" data-testid="button-use-camera">
                      <Camera className="h-4 w-4 mr-2" />
                      Use Camera
                    </Button>
                  </div>
                </>
              )}
            </div>

            {uploadedImage && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Try-On Preview</h4>
                <p className="text-sm text-muted-foreground">
                  Virtual try-on feature coming soon! See how items look on you before buying.
                </p>
              </div>
            )}
          </div>

          <div>
            <h4 className="font-medium mb-4">Similar Products</h4>
            {isSearching ? (
              <div className="flex flex-col items-center justify-center h-48">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground">Searching for similar items...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-3">
                {results.map((product) => (
                  <Card key={product.id} className="p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">{product.category}</p>
                        <p className="font-medium">{product.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-bold">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => onAddToCart(product)}
                        data-testid={`button-add-vs-${product.id}`}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-48 text-center">
                <Search className="h-8 w-8 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  Upload an image to find similar products
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
