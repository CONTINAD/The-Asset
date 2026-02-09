export default function Chart() {
    return (
        <section className="py-20 bg-ass-dark border-t border-ass-primary/30">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white">
                    LIVE <span className="text-ass-accent">CHART</span> ⚡️
                </h2>
                <div className="w-full h-[600px] border-4 border-ass-primary rounded-xl overflow-hidden shadow-[0_0_30px_rgba(157,78,221,0.5)]">
                    <iframe
                        src="https://dexscreener.com/solana/0000000000000000000000000000000000000000?embed=1&theme=dark"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        title="DexScreener Chart"
                    ></iframe>
                </div>
                <p className="text-center text-gray-500 mt-4 text-sm font-mono">
                    Chart requires valid CA to load correctly.
                </p>
            </div>
        </section>
    );
}
