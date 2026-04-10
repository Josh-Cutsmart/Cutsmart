"use client";

import { cn } from "@/lib/utils";

interface TabsProps {
  value: string;
  onChange: (value: string) => void;
  items: Array<{ value: string; label: string }>;
}

export function Tabs({ value, onChange, items }: TabsProps) {
  return (
    <div className="inline-flex rounded-lg bg-slate-100 p-1">
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => onChange(item.value)}
          className={cn(
            "rounded-md px-3 py-1.5 text-sm transition",
            value === item.value
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900",
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
