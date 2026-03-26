import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particleCount = window.innerWidth < 768 ? 70 : 250;
    const connectionDistance = window.innerWidth < 768 ? 90 : 120;
    const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

    let particles: Particle[] = [];
    let animationId: number;
    let lastWidth = window.innerWidth;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 1.2;
        this.speedY = (Math.random() - 0.5) * 1.2;
        this.color = "#38bdf8";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > window.innerWidth || this.x < 0) this.speedX *= -1;
        if (this.y > window.innerHeight || this.y < 0) this.speedY *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const dirX = dx / distance;
            const dirY = dy / distance;
            this.x -= dirX * force * 3;
            this.y -= dirY * force * 3;
          }
        }
      }

      draw() {
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const createParticles = () => {
      particles = [];
      particleCount = window.innerWidth < 768 ? 70 : 250;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx!.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.35})`;
            ctx!.lineWidth = 0.8;
            ctx!.beginPath();
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(particles[b].x, particles[b].y);
            ctx!.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx!.fillStyle = "#020617";
      ctx!.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const gradient = ctx!.createRadialGradient(
        window.innerWidth / 2, window.innerHeight / 2, 0,
        window.innerWidth / 2, window.innerHeight / 2, window.innerWidth / 1.2
      );
      gradient.addColorStop(0, "#0f172a");
      gradient.addColorStop(1, "#020617");
      ctx!.fillStyle = gradient;
      ctx!.fillRect(0, 0, window.innerWidth, window.innerHeight);

      for (const p of particles) {
        p.update();
        p.draw();
      }
      connectParticles();
      animationId = requestAnimationFrame(animate);
    };

    const resize = () => {
      const currentWidth = window.innerWidth;
      // No Safari Mobile, rolar a tela altera a altura. Só redesenhamos se a largura mudar.
      if (currentWidth !== lastWidth || particles.length === 0) {
        const dpr = window.devicePixelRatio || 1;
        canvas!.width = window.innerWidth * dpr;
        canvas!.height = window.innerHeight * dpr;
        ctx!.scale(dpr, dpr);
        canvas!.style.width = `${window.innerWidth}px`;
        canvas!.style.height = `${window.innerHeight}px`;
        lastWidth = currentWidth;
        createParticles();
      } else {
        // Apenas redimensiona sem recriar partículas se só a altura mudou sutilmente
        const dpr = window.devicePixelRatio || 1;
        canvas!.width = window.innerWidth * dpr;
        canvas!.height = window.innerHeight * dpr;
        ctx!.scale(dpr, dpr);
        canvas!.style.width = `${window.innerWidth}px`;
        canvas!.style.height = `${window.innerHeight}px`;
      }
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e && e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      } else if ('clientX' in e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove, { passive: true });
    window.addEventListener("touchstart", handleMouseMove, { passive: true });
    window.addEventListener("touchend", handleMouseLeave);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Initial force setup to trigger 1st paint correctly
    resize();
    if (particles.length === 0) createParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchstart", handleMouseMove);
      window.removeEventListener("touchend", handleMouseLeave);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ display: "block" }}
    />
  );
};

export default ParticleBackground;
