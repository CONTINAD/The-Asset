// import logo from '../assets/logo.png';
const logo = "/logo.png"; // Serving from public/logo.png

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-ass-dark"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ass-primary/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>

            <div className="z-10 animate-bounce-custom relative">
                {/* Placeholder for the user's artwork */}
                <img
                    src={logo}
                    alt="$AssAsset Logo"
                    className="w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-[0_0_50px_rgba(247,147,26,0.8)] mx-auto relative z-10"
                    onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x400/F7931A/ffffff?text=$Asset"; // Fallback
                    }}
                />
                {/* Glow behind logo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-ass-primary/20 blur-3xl -z-10 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-ass-primary via-white to-ass-primary transform -skew-x-12 mt-8 drop-shadow-[0_0_15px_rgba(247,147,26,0.8)] p-3">
                $Asset
            </h1>

            <p className="text-xl md:text-3xl text-gray-200 font-bold mt-4 max-w-2xl px-4 uppercase tracking-widest drop-shadow-md">
                The only asset you need to back up.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-12">
                <button className="px-8 py-4 bg-ass-primary text-black font-black text-xl uppercase tracking-tighter hover:bg-white hover:scale-110 transition-all duration-200 shadow-[0_0_20px_rgba(247,147,26,0.6)] skew-x-[-10deg]">
                    Buy Now
                </button>
                <button className="px-8 py-4 bg-white text-black font-black text-xl uppercase tracking-tighter hover:bg-ass-primary hover:text-white hover:scale-110 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.6)] skew-x-[-10deg]">
                    Buy on Pump.fun 💊
                </button>
                <button className="px-8 py-4 border-4 border-ass-primary text-ass-primary font-black text-xl uppercase tracking-tighter hover:bg-ass-primary hover:text-black hover:scale-110 transition-all duration-200 skew-x-[-10deg]">
                    Chart
                </button>
            </div>

            {/* Marquee at bottom */}
            <div className="absolute bottom-0 w-full bg-ass-primary overflow-hidden py-2 whitespace-nowrap border-t-4 border-white">
                <div className="animate-scroll inline-block">
                    {[...Array(20)].map((_, i) => (
                        <span key={i} className="text-black font-black text-2xl mx-8 uppercase">
                            $Asset TO THE MOON 🚀
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
