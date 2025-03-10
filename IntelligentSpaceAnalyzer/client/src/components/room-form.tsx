import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { insertRoomSchema, roomTypes } from "@shared/schema";
import type { InsertRoom } from "@shared/schema";

interface RoomFormProps {
  onSubmit: (data: Partial<InsertRoom>) => void;
}

export default function RoomForm({ onSubmit }: RoomFormProps) {
  const form = useForm<Partial<InsertRoom>>({
    resolver: zodResolver(insertRoomSchema.partial()),
    defaultValues: {
      name: "",
      type: undefined,
      width: undefined,
      length: undefined,
      height: undefined,
      budget: undefined,
    },
  });

  const handleSubmit = (data: Partial<InsertRoom>) => {
    // Convert string values to numbers for numeric fields
    const formattedData = {
      ...data,
      width: data.width ? Number(data.width) : undefined,
      length: data.length ? Number(data.length) : undefined,
      height: data.height ? Number(data.height) : undefined,
      budget: data.budget ? Number(data.budget) : undefined,
    };
    onSubmit(formattedData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Living Room" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {roomTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type.replace("_", " ").toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="width"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Width (m)</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    step="0.1"
                    onChange={(e) => {
                      const value = e.target.value ? parseFloat(e.target.value) : '';
                      onChange(value);
                    }}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="length"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Length (m)</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    step="0.1"
                    onChange={(e) => {
                      const value = e.target.value ? parseFloat(e.target.value) : '';
                      onChange(value);
                    }}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="height"
          render={({ field: { onChange, ...field } }) => (
            <FormItem>
              <FormLabel>Height (m)</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  step="0.1"
                  onChange={(e) => {
                    const value = e.target.value ? parseFloat(e.target.value) : '';
                    onChange(value);
                  }}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="budget"
          render={({ field: { onChange, ...field } }) => (
            <FormItem>
              <FormLabel>Budget ($)</FormLabel>
              <FormControl>
                <Input 
                  type="number"
                  onChange={(e) => {
                    const value = e.target.value ? parseInt(e.target.value) : '';
                    onChange(value);
                  }}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="photoFile"
          render={({ field: { value, onChange, ...field } }) => (
            <FormItem>
              <FormLabel>Room Photo</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => onChange(e.target.files?.[0])}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Next
        </Button>
      </form>
    </Form>
  );
}