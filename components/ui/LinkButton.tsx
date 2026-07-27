import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes, forwardRef } from "react";

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  href: string;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "primary", size = "default", href, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          "inline-flex items-center justify-center rounded-sm font-semibold text-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          {
            "bg-primary text-white hover:bg-[#4FC3F7]": variant === "primary",
            "bg-white text-textPrimary hover:bg-gray-50 border-2 border-veryLightBg":
              variant === "secondary",
            "border-2 border-white text-white hover:bg-white/10":
              variant === "outline",
            "px-6 py-3.5": size === "default",
            "px-8 py-4": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

LinkButton.displayName = "LinkButton";

export { LinkButton };
