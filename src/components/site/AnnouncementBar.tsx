import { Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="gradient-brand text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm">
        <Sparkles className="h-3.5 w-3.5" />
        <span className="font-medium">
          Limited offer — Flat 25% off on all resume packages this month.
        </span>
      </div>
    </div>
  );
}
