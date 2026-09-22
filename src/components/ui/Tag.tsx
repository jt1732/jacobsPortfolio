import type { ReactNode } from "react";

interface tagProps {
    children: ReactNode;
}

export const Tag = ({ children }: tagProps) => {
    return (
        <span className="px-1.5 py-1 m-1 bg-white/70 rounded-lg shadow-sm">
            {children}
        </span>
    );
};
