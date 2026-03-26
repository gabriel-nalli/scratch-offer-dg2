import { useRef, useEffect, useState, useCallback } from "react";

interface ScratchCardProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
}

const ScratchCard = ({ children, width = 340, height = 320 }: ScratchCardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const isDrawing = useRef(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  const getPos = useCallback((e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ("touches" in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }, []);

  const checkReveal = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    const ratio = transparent / (imageData.data.length / 4);
    if (ratio > 0.6) {
      setRevealed(true);
    }
  }, []);

  const scratch = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();

    if (lastPos.current) {
      ctx.lineWidth = 56;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
    lastPos.current = { x, y };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set internal resolution to match display size
    const rect = containerRef.current.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;

    // Metallic gradient cover
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#020d1a");
    gradient.addColorStop(0.3, "#083b5e");
    gradient.addColorStop(0.5, "#0ea5e9");
    gradient.addColorStop(0.7, "#083b5e");
    gradient.addColorStop(1, "#020d1a");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add noise texture
    for (let i = 0; i < 8000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.08})`;
      ctx.fillRect(x, y, 1, 1);
    }

    // "Raspe aqui" text
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.font = "bold 18px Outfit, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Raspe aqui ✨", canvas.width / 2, canvas.height / 2);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleStart = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      isDrawing.current = true;
      lastPos.current = null;
      const pos = getPos(e);
      scratch(pos.x, pos.y);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing.current) return;
      e.preventDefault();
      const pos = getPos(e);
      scratch(pos.x, pos.y);
    };

    const handleEnd = () => {
      isDrawing.current = false;
      lastPos.current = null;
      checkReveal();
    };

    canvas.addEventListener("mousedown", handleStart);
    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseup", handleEnd);
    canvas.addEventListener("mouseleave", handleEnd);
    canvas.addEventListener("touchstart", handleStart, { passive: false });
    canvas.addEventListener("touchmove", handleMove, { passive: false });
    canvas.addEventListener("touchend", handleEnd);

    return () => {
      canvas.removeEventListener("mousedown", handleStart);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseup", handleEnd);
      canvas.removeEventListener("mouseleave", handleEnd);
      canvas.removeEventListener("touchstart", handleStart);
      canvas.removeEventListener("touchmove", handleMove);
      canvas.removeEventListener("touchend", handleEnd);
    };
  }, [getPos, scratch, checkReveal]);

  return (
    <div
      ref={containerRef}
      className="relative rounded-xl overflow-hidden h-full w-full"
      style={{ maxWidth: width }}
    >
      {/* Content underneath */}
      <div className="p-8 h-full flex flex-col justify-between">{children}</div>

      {/* Canvas overlay */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full cursor-crosshair rounded-xl transition-opacity duration-700 ${
          revealed ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ touchAction: "none" }}
      />
    </div>
  );
};

export default ScratchCard;
