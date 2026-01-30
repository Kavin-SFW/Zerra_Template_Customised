import { ReactNode } from "react";
import { MoreHorizontal, Maximize2, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  actions?: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export function ChartCard({
  title,
  subtitle,
  children,
  actions,
  className,
  fullHeight = false,
}: ChartCardProps) {
  return (
    <div className={cn("glass-card p-5 flex flex-col", fullHeight && "h-full", className)}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-foreground">{title}</h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
          )}
        </div>
        
        <div className="flex items-center gap-1">
          {actions}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover border-border">
              <DropdownMenuItem className="text-xs">
                <Maximize2 className="w-3 h-3 mr-2" />
                Expand
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs">
                <Download className="w-3 h-3 mr-2" />
                Export
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        {children}
      </div>
    </div>
  );
}
