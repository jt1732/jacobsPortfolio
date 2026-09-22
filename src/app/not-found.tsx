import { Compass } from "lucide-react";
import type { Metadata } from "next";
import { Link } from "@/components/ui/Link";

export const metadata: Metadata = {
    title: "404 - Page Not Found",
};

export default function NotFound() {
    return (
        <div className="flex min-h-[400px] min-w-[280px] flex-col items-center justify-center gap-3 px-5 text-center">
            <div className="flex flex-col items-center gap-3 rounded-2xl bg-white/60 px-10 py-12 shadow-xl/20">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="text-lg">This page doesn&#39;t exist.</p>
                <Link className="bg-white/80" href="/" style="header">
                    Back to home
                </Link>
            </div>
        </div>
    );
}
