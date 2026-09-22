import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
    return <div className="pt-5">{children}</div>;
};

export const CardHeader = ({ children }: CardProps) => {
    return <div className="flex justify-between pr-5">{children}</div>;
};

export const CardSecondary = ({ children }: CardProps) => {
    return <div className="flex justify-between pr-5">{children}</div>;
};

export const CardList = ({ children }: CardProps) => {
    return <ul className="list-disc pl-10 pr-5">{children}</ul>;
};

export const CardListItem = ({ children }: CardProps) => {
    return <li>{children}</li>;
};
