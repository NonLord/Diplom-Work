import { useState } from "react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import RoomForm from "@/components/room-form";
import StyleSelector from "@/components/style-selector";
import RoomCanvas from "@/components/room-canvas";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { InsertRoom } from "@shared/schema";

export default function Upload() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<"form" | "style" | "preview">("form");
  const [formData, setFormData] = useState<Partial<InsertRoom>>({});

  const uploadMutation = useMutation({
    mutationFn: async (data: InsertRoom) => {
      const response = await apiRequest("POST", "/api/rooms", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: "Your room has been analyzed and recommendations are ready.",
      });
      navigate(`/room/${data.id}`);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleFormSubmit = (data: Partial<InsertRoom>) => {
    setFormData({ ...formData, ...data });
    setCurrentStep("style");
  };

  const handleStyleSelect = (style: string) => {
    setFormData({ ...formData, style });
    setCurrentStep("preview");
  };

  const handleSubmit = () => {
    if (!formData.style || !formData.type) {
      toast({
        title: "Error",
        description: "Please complete all required fields",
        variant: "destructive",
      });
      return;
    }
    uploadMutation.mutate(formData as InsertRoom);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <Tabs value={currentStep} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="form">Room Details</TabsTrigger>
              <TabsTrigger value="style">Style</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>

            <TabsContent value="form">
              <RoomForm onSubmit={handleFormSubmit} />
            </TabsContent>

            <TabsContent value="style">
              <StyleSelector onSelect={handleStyleSelect} />
            </TabsContent>

            <TabsContent value="preview">
              <div className="space-y-4">
                <RoomCanvas
                  width={formData.width || 0}
                  length={formData.length || 0}
                  height={formData.height || 0}
                />
                <button
                  className="w-full btn-primary"
                  onClick={handleSubmit}
                  disabled={uploadMutation.isPending}
                >
                  {uploadMutation.isPending ? "Processing..." : "Get Recommendations"}
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
