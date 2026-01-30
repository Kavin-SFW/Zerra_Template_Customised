import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  Factory, Heart, ArrowRight, Sparkles, TrendingUp
} from "lucide-react";

export default function Index() {
  return (
    <DashboardLayout>
      {/* Hero Section */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-2xl" />
        <div className="relative glass-card p-8 lg:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                AI-Powered Analytics
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Zerra Dashboard Templates
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Production-ready, plug-and-play dashboard templates for all major industries. 
              Built for executives, operations leaders, and data analysts.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span>Real-time analytics</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>AI-driven insights</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-warning animate-pulse" />
                <span>Predictive forecasting</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Dashboards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sales Dashboard */}
        <div className="glass-card p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
          <Link to="/sales" className="flex flex-col group">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  Sales Dashboard
                </h2>
                <p className="text-sm text-muted-foreground">
                  Comprehensive sales analytics with multiple KPIs and diverse chart types
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity self-end" />
          </Link>
        </div>

        {/* Manufacturing Dashboard */}
        <div className="glass-card p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
          <Link to="/manufacturing" className="flex flex-col group">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Factory className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground mb-1 group-hover:text-blue-500 transition-colors">
                  Manufacturing Dashboard
                </h2>
                <p className="text-sm text-muted-foreground">
                  Complete manufacturing metrics with OEE, production, quality, and safety analytics
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity self-end" />
          </Link>
        </div>

        {/* Healthcare Dashboard */}
        <div className="glass-card p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
          <Link to="/healthcare" className="flex flex-col group">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500/20 to-red-500/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground mb-1 group-hover:text-red-500 transition-colors">
                  Healthcare Dashboard
                </h2>
                <p className="text-sm text-muted-foreground">
                  Complete healthcare metrics with patient flow, quality, and operational analytics
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity self-end" />
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
