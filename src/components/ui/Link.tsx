import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import NextLink from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/helpers/cn";

const linkStyles = cva("flex gap-3 items-center", {
    variants: {
        style: {
            header: "p-2 bg-transparent hover:bg-white/40 rounded-xl",
            socials: "pt-5 text-blue-500",
        },
        size: {
            sm: "px-2 py-1 text-sm",
            md: "px-4 py-2 text-base",
        },
    },
    defaultVariants: {
        style: "header",
        size: "md",
    },
});

interface LinkProps extends VariantProps<typeof linkStyles> {
    href: string;
    children: ReactNode;
    className?: string;
    icon?: LucideIcon;
}

export const Link = ({
    style,
    size,
    children,
    className,
    icon: Icon,
    ...props
}: LinkProps) => {
    return (
        <NextLink
            className={cn(linkStyles({ style, size, className }))}
            {...props}
        >
            {Icon && <Icon className="w-5 h-5 text-black" />}
            {children}
        </NextLink>
    );
};
