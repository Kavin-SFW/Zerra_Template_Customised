import { Sparkles, TrendingUp, AlertTriangle, Lightbulb, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Insight {
  type: "prediction" | "anomaly" | "recommendation" | "trend";
  title: string;
  description: string;
  impact?: "high" | "medium" | "low";
}

interface AIInsightsPanelProps {
  insights: Insight[];
  className?: string;
}

export function AIInsightsPanel({ insights, className }: AIInsightsPanelProps) {
  const getIcon = (type: Insight["type"]) => {
    switch (type) {
      case "prediction":
        return <TrendingUp className="w-4 h-4" />;
      case "anomaly":
        return <AlertTriangle className="w-4 h-4" />;
      case "recommendation":
        return <Lightbulb className="w-4 h-4" />;
      case "trend":
        return <TrendingUp className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: Insight["type"]) => {
    switch (type) {
      case "prediction":
        return "text-chart-6 bg-chart-6/10";
      case "anomaly":
        return "text-destructive bg-destructive/10";
      case "recommendation":
        return "text-success bg-success/10";
      case "trend":
        return "text-primary bg-primary/10";
    }
  };

  const getImpactBadge = (impact?: Insight["impact"]) => {
    if (!impact) return null;
    const colors = {
      high: "bg-destructive/20 text-destructive",
      medium: "bg-warning/20 text-warning",
      low: "bg-muted text-muted-foreground",
    };
    return (
      <span className={cn("px-1.5 py-0.5 rounded text-[10px] font-medium uppercase", colors[impact])}>
        {impact}
      </span>
    );
  };

  return (
    <div className={cn("glass-card p-5", className)}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-foreground">AI Insights</h3>
          <p className="text-xs text-muted-foreground">Powered by Zerra AI</p>
        </div>
      </div>

      <div className="space-y-3">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="group p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0", getTypeColor(insight.type))}>
                {getIcon(insight.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-foreground">{insight.title}</span>
                  {getImpactBadge(insight.impact)}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {insight.description}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
