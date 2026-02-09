export default function BuyBackBot() {
    return (
        <section className="py-20 bg-ass-dark relative overflow-hidden">
            {/* Fire/Burn Effects Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8">
                    THE <span className="text-ass-orange">ASS BOT</span> 🤖🔥
                </h2>

                <div className="max-w-4xl mx-auto bg-black/80 border-4 border-ass-orange rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(255,140,0,0.6)]">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="text-6xl md:text-8xl animate-bounce-custom">
                            🤖
                        </div>
                        <div className="text-left space-y-4">
                            <h3 className="text-2xl md:text-4xl font-bold text-white uppercase">
                                Auto Buy Back & Burn
                            </h3>
                            <p className="text-xl text-gray-300 font-mono">
                                We don't just talk. We <span className="text-ass-orange font-bold">BURN</span>.
                                <br />
                                Our custom bot automatically buys back $ASS every hour and sends it straight to the incinerator.
                            </p>
                            <div className="inline-block bg-ass-orange text-black font-bold px-4 py-2 rounded transform -skew-x-12">
                                SUPPLY REDUCING FOREVER
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fire Animation Elements */}
                <div className="flex justify-center mt-12 gap-4">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-4xl animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                            🔥
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
