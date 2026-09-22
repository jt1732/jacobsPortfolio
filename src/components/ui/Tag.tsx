import type { ReactNode } from "react";
import { cn } from "@/helpers/cn";

interface tagProps {
    children: ReactNode;
    className?: string;
}

export const Tag = ({ children, className }: tagProps) => {
    return (
        <span
            className={cn(
                "px-1.5 py-1 m-1 bg-white/70 rounded-lg shadow-sm",
                className,
            )}
        >
            {children}
        </span>
    );
};
