import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Sparkles,
  Settings,
  HelpCircle,
  PanelLeftClose,
  PanelLeft,
  TrendingUp,
  Factory,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-72"
      )}
    >
      {/* Logo */}
      <div className="h-14 flex items-center justify-between px-4 border-b border-sidebar-border">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg gradient-text">Zerra</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <PanelLeft className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        {/* Overview */}
        <div className="mb-4">
          <Link
            to="/"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
              location.pathname === "/"
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
            )}
          >
            <LayoutDashboard className="w-4 h-4 flex-shrink-0" />
            {!collapsed && <span>Overview</span>}
          </Link>
        </div>

        {!collapsed && <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Dashboards</div>}

        {/* Dashboard Links */}
        <div className="space-y-0.5 mt-1">
          <Link
            to="/sales"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
              location.pathname === "/sales"
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
            )}
          >
            <TrendingUp className="w-4 h-4 flex-shrink-0" />
            {!collapsed && <span>Sales Dashboard</span>}
          </Link>

          <Link
            to="/manufacturing"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
              location.pathname === "/manufacturing"
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
            )}
          >
            <Factory className="w-4 h-4 flex-shrink-0" />
            {!collapsed && <span>Manufacturing Dashboard</span>}
          </Link>

          <Link
            to="/healthcare"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
              location.pathname === "/healthcare"
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
            )}
          >
            <Heart className="w-4 h-4 flex-shrink-0" />
            {!collapsed && <span>Healthcare Dashboard</span>}
          </Link>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-2 border-t border-sidebar-border">
        {!collapsed ? (
          <div className="space-y-1">
            <Link
              to="/settings"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50 transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </Link>
            <Link
              to="/help"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Help & Support</span>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <HelpCircle className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </aside>
  );
}
