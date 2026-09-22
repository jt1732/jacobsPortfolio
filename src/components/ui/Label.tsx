import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/helpers/cn";

const linkStyles = cva(
    "p-5 mx-5 pl-3 md:pl-5 col-span-3 bg-white/60 flex items-center gap-3",
    {
        variants: {
            style: {
                top: "mt-5 rounded-t-2xl",
                middle: "",
                bottom: "rounded-b-2xl shadow-xl/20",
            },
        },
        defaultVariants: {
            style: "middle",
        },
    },
);

interface LabelProps extends VariantProps<typeof linkStyles> {
    children: ReactNode;
    className?: string;
    icon?: LucideIcon;
}

export const Label = ({
    style,
    children,
    className,
    icon: Icon,
    ...props
}: LabelProps) => {
    return (
        <div className={cn(linkStyles({ style, className }))} {...props}>
            {Icon && <Icon className="w-3 h-3 lg:w-5 lg:h-5 text-black" />}
            {children}
        </div>
    );
};
