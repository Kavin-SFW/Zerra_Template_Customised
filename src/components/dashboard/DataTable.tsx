import { useState } from "react";
import { ChevronUp, ChevronDown, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  title?: string;
  searchable?: boolean;
  searchKey?: keyof T;
  pageSize?: number;
  className?: string;
}

export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  title,
  searchable = true,
  searchKey,
  pageSize = 5,
  className,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  let filteredData = [...data];

  // Search
  if (search && searchKey) {
    filteredData = filteredData.filter((row) =>
      String(row[searchKey]).toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sort
  if (sortKey) {
    filteredData.sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Pagination
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

  return (
    <div className={cn("glass-card p-5", className)}>
      {(title || searchable) && (
        <div className="flex items-center justify-between mb-4">
          {title && <h3 className="text-sm font-medium text-foreground">{title}</h3>}
          {searchable && searchKey && (
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <Input
                placeholder="Search..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-8 h-8 w-48 text-xs bg-secondary/50 border-border/50"
              />
            </div>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={cn(
                    "text-left text-xs font-medium text-muted-foreground uppercase tracking-wider py-3 px-3 first:pl-0 last:pr-0",
                    column.sortable && "cursor-pointer hover:text-foreground transition-colors",
                    column.className
                  )}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center gap-1">
                    {column.label}
                    {column.sortable && sortKey === column.key && (
                      sortDirection === "asc" ? (
                        <ChevronUp className="w-3 h-3" />
                      ) : (
                        <ChevronDown className="w-3 h-3" />
                      )
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-border/30 last:border-0 hover:bg-secondary/30 transition-colors"
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className={cn(
                      "py-3 px-3 first:pl-0 last:pr-0 text-sm text-foreground",
                      column.className
                    )}
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : String(row[column.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
          <span className="text-xs text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(startIndex + pageSize, filteredData.length)} of {filteredData.length}
          </span>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-xs text-muted-foreground px-2">
              {currentPage} / {totalPages}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
