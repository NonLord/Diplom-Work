import { useEffect, useRef } from "react";
import { drawRoom } from "@/lib/canvas-utils";

interface RoomCanvasProps {
  width: number;
  length: number;
  height: number;
}

export default function RoomCanvas({ width, length, height }: RoomCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Scale room dimensions to fit canvas
    const scale = Math.min(
      (canvas.width - 40) / Math.max(width, length),
      (canvas.height - 40) / Math.max(width, length)
    );

    drawRoom(ctx, width, length, height, scale);
  }, [width, length, height]);

  return (
    <div className="w-full aspect-square relative">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="w-full border rounded-lg"
      />
    </div>
  );
}
