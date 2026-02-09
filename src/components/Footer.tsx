const logo = "/logo.png";

export default function Footer() {
    return (
        <footer className="py-8 bg-black text-center border-t border-ass-primary/30">
            <div className="container mx-auto px-4">
                <img src={logo} alt="$ASS" className="w-16 h-16 mx-auto mb-6 opacity-50 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_10px_rgba(247,147,26,0.6)]" />

                <div className="flex justify-center gap-8 mb-8">
                    {/* Social Placeholders */}
                    <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-ass-primary hover:text-black transition-colors shadow-none hover:shadow-[0_0_15px_rgba(247,147,26,0.6)]">
                        <span className="font-bold">X</span>
                    </a>
                    <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-ass-primary hover:text-black transition-colors shadow-none hover:shadow-[0_0_15px_rgba(247,147,26,0.6)]">
                        <span className="font-bold">TG</span>
                    </a>
                    <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-ass-primary hover:text-black transition-colors shadow-none hover:shadow-[0_0_15px_rgba(247,147,26,0.6)]">
                        <span className="font-bold">DS</span>
                    </a>
                </div>
                <p className="text-gray-600 font-mono text-sm">
                    © {new Date().getFullYear()} $AssAsset. All rights reserved. <br />
                    <span className="text-[10px] opacity-50">Not financial advice. Don't be an idiot.</span>
                </p>
            </div>
        </footer>
    );
}
