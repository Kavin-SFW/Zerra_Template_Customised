import { ReactNode } from "react";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  target?: string | number;
  icon?: ReactNode;
  trend?: "up" | "down" | "neutral";
  format?: "currency" | "percent" | "number";
  className?: string;
}

export function KPICard({
  title,
  value,
  change,
  changeLabel = "vs last period",
  target,
  icon,
  trend,
  className,
}: KPICardProps) {
  const getTrendColor = () => {
    if (trend === "up") return "text-success";
    if (trend === "down") return "text-destructive";
    return "text-warning";
  };

  const getTrendIcon = () => {
    if (trend === "up") return <ArrowUp className="w-3 h-3" />;
    if (trend === "down") return <ArrowDown className="w-3 h-3" />;
    return <Minus className="w-3 h-3" />;
  };

  const getTrendBg = () => {
    if (trend === "up") return "bg-success/10";
    if (trend === "down") return "bg-destructive/10";
    return "bg-warning/10";
  };

  return (
    <div className={cn("glass-card-hover p-5 group", className)}>
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </span>
        {icon && (
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="text-2xl font-semibold tracking-tight text-foreground">
          {value}
        </div>

        <div className="flex items-center gap-3">
          {change !== undefined && (
            <div className={cn("flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium", getTrendBg(), getTrendColor())}>
              {getTrendIcon()}
              <span>{Math.abs(change)}%</span>
            </div>
          )}
          
          {changeLabel && (
            <span className="text-xs text-muted-foreground">{changeLabel}</span>
          )}
        </div>

        {target && (
          <div className="pt-2 border-t border-border/50">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Target</span>
              <span className="text-foreground font-medium">{target}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
