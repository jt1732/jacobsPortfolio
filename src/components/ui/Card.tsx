import type { ReactNode } from "react";
import { cn } from "@/helpers/cn";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className }: CardProps) => {
    return <div className={cn("pt-5", className)}>{children}</div>;
};

export const CardHeader = ({ children, className }: CardProps) => {
    return (
        <div className={cn("flex justify-between pr-5", className)}>
            {children}
        </div>
    );
};

export const CardSecondary = ({ children, className }: CardProps) => {
    return (
        <div className={cn("flex justify-between pr-5", className)}>
            {children}
        </div>
    );
};

export const CardList = ({ children, className }: CardProps) => {
    return (
        <ul className={cn("list-disc pl-10 pr-5", className)}>{children}</ul>
    );
};

export const CardListItem = ({ children, className }: CardProps) => {
    return <li className={cn(className)}>{children}</li>;
};
