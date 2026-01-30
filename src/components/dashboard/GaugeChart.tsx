import { cn } from "@/lib/utils";

interface GaugeChartProps {
  value: number;
  max?: number;
  label: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function GaugeChart({ value, max = 100, label, size = "md", className }: GaugeChartProps) {
  const percentage = Math.min((value / max) * 100, 100);
  const rotation = (percentage / 100) * 180;
  
  const sizeClasses = {
    sm: "w-24 h-12",
    md: "w-32 h-16",
    lg: "w-40 h-20",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const getColor = () => {
    if (percentage >= 80) return "text-success";
    if (percentage >= 50) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        {/* Background arc */}
        <svg className="w-full h-full" viewBox="0 0 100 50">
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Value arc */}
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${percentage * 1.26} 126`}
            className={getColor()}
          />
        </svg>
        
        {/* Center value */}
        <div className="absolute inset-0 flex items-end justify-center pb-0">
          <span className={cn("font-semibold", textSizes[size], getColor())}>
            {value}%
          </span>
        </div>
      </div>
      <span className="text-xs text-muted-foreground mt-2">{label}</span>
    </div>
  );
}
