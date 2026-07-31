import { Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="gradient-brand text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm">
        <Sparkles className="h-3.5 w-3.5" />
        <span className="font-medium">
         Special offers available — Contact us to claim your discount.
        </span>
      </div>
    </div>
  );
}
