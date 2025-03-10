import { Card, CardContent } from "@/components/ui/card";
import { roomStyles } from "@shared/schema";

const styleImages: Record<string, string> = {
  modern: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  traditional: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
  minimalist: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
  industrial: "https://images.unsplash.com/photo-1600607687644-aac4bc03a0b8",
  scandinavian: "https://images.unsplash.com/photo-1600607687939-ce8cc0f7c2ca",
  bohemian: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
  contemporary: "https://images.unsplash.com/photo-1600607687644-aac4bc03a0b8",
  rustic: "https://images.unsplash.com/photo-1600607687939-ce8cc0f7c2ca",
};

interface StyleSelectorProps {
  onSelect: (style: string) => void;
}

export default function StyleSelector({ onSelect }: StyleSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {roomStyles.map((style) => (
        <Card
          key={style}
          className="cursor-pointer hover:scale-105 transition-transform"
          onClick={() => onSelect(style)}
        >
          <CardContent className="p-0">
            <div className="aspect-square relative">
              <img
                src={styleImages[style]}
                alt={style}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
                {style.charAt(0).toUpperCase() + style.slice(1)}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
