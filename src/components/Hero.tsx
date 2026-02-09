// import logo from '../assets/logo.png';
const logo = "/logo.png"; // Serving from public/logo.png

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-ass-dark">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ass-orange/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>

            <div className="z-10 animate-bounce-custom">
                {/* Placeholder for the user's artwork */}
                <img
                    src={logo}
                    alt="$AssAsset Logo"
                    className="w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-[0_0_35px_rgba(255,140,0,0.8)] mx-auto"
                    onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x400/ff8c00/ffffff?text=$ASS"; // Fallback
                    }}
                />
            </div>

            <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-ass-orange to-yellow-500 transform -skew-x-12 mt-8 drop-shadow-lg p-3">
                $AssAsset
            </h1>

            <p className="text-xl md:text-3xl text-white font-bold mt-4 max-w-2xl px-4 uppercase tracking-widest">
                The only asset you need to back up.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-12">
                <button className="px-8 py-4 bg-ass-orange text-black font-black text-xl uppercase tracking-tighter hover:bg-white hover:scale-110 transition-all duration-200 shadow-[0_0_20px_rgba(255,140,0,0.6)] skew-x-[-10deg]">
                    Buy Now
                </button>
                <button className="px-8 py-4 border-4 border-ass-orange text-ass-orange font-black text-xl uppercase tracking-tighter hover:bg-ass-orange hover:text-black hover:scale-110 transition-all duration-200 skew-x-[-10deg]">
                    Chart
                </button>
            </div>

            {/* Marquee at bottom */}
            <div className="absolute bottom-0 w-full bg-ass-orange overflow-hidden py-2 whitespace-nowrap">
                <div className="animate-scroll inline-block">
                    {[...Array(20)].map((_, i) => (
                        <span key={i} className="text-black font-black text-2xl mx-8 uppercase">
                            $ASS TO THE MOON 🚀
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
