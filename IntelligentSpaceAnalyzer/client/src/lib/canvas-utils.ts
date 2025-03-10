export function drawRoom(
  ctx: CanvasRenderingContext2D,
  width: number,
  length: number,
  height: number,
  scale: number
) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
  // Center the room in the canvas
  const offsetX = (ctx.canvas.width - width * scale) / 2;
  const offsetY = (ctx.canvas.height - length * scale) / 2;

  // Draw room outline
  ctx.beginPath();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.rect(offsetX, offsetY, width * scale, length * scale);
  ctx.stroke();

  // Draw grid
  ctx.beginPath();
  ctx.strokeStyle = "#ddd";
  ctx.lineWidth = 0.5;
  
  for (let x = 0; x <= width; x++) {
    ctx.moveTo(offsetX + x * scale, offsetY);
    ctx.lineTo(offsetX + x * scale, offsetY + length * scale);
  }
  
  for (let y = 0; y <= length; y++) {
    ctx.moveTo(offsetX, offsetY + y * scale);
    ctx.lineTo(offsetX + width * scale, offsetY + y * scale);
  }
  
  ctx.stroke();

  // Add dimensions
  ctx.fillStyle = "#666";
  ctx.font = "12px sans-serif";
  
  // Width
  ctx.fillText(
    `${width}m`,
    offsetX + width * scale / 2,
    offsetY + length * scale + 20
  );
  
  // Length
  ctx.save();
  ctx.translate(offsetX - 20, offsetY + length * scale / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(`${length}m`, 0, 0);
  ctx.restore();
}
