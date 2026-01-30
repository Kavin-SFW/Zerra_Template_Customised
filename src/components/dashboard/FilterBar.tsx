import { Calendar, MapPin, Building2, Package, Share2, Download, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterBarProps {
  title: string;
  subtitle?: string;
}

export function FilterBar({ title, subtitle }: FilterBarProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {/* Date Range */}
        <Select defaultValue="30d">
          <SelectTrigger className="w-[140px] h-8 text-xs bg-secondary/50 border-border/50">
            <Calendar className="w-3 h-3 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
            <SelectItem value="1y">Last year</SelectItem>
            <SelectItem value="custom">Custom range</SelectItem>
          </SelectContent>
        </Select>

        {/* Region */}
        <Select defaultValue="all">
          <SelectTrigger className="w-[130px] h-8 text-xs bg-secondary/50 border-border/50">
            <MapPin className="w-3 h-3 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="na">North America</SelectItem>
            <SelectItem value="eu">Europe</SelectItem>
            <SelectItem value="apac">Asia Pacific</SelectItem>
            <SelectItem value="latam">Latin America</SelectItem>
          </SelectContent>
        </Select>

        {/* Business Unit */}
        <Select defaultValue="all">
          <SelectTrigger className="w-[140px] h-8 text-xs bg-secondary/50 border-border/50">
            <Building2 className="w-3 h-3 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Units</SelectItem>
            <SelectItem value="enterprise">Enterprise</SelectItem>
            <SelectItem value="smb">SMB</SelectItem>
            <SelectItem value="consumer">Consumer</SelectItem>
          </SelectContent>
        </Select>

        <div className="h-6 w-px bg-border/50 hidden sm:block" />

        {/* Actions */}
        <Button variant="outline" size="sm" className="h-8 text-xs border-border/50">
          <Share2 className="w-3 h-3 mr-2" />
          Share
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8 border-border/50">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Download className="w-3 h-3 mr-2" />
              Export PDF
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download className="w-3 h-3 mr-2" />
              Export CSV
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
