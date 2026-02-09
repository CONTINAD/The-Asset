export default function BuyBackBot() {
    return (
        <section className="py-20 bg-ass-dark relative overflow-hidden border-t border-ass-primary/20">
            {/* Glow Effects Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-ass-primary/20 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 drop-shadow-[0_0_10px_rgba(247,147,26,0.8)]">
                    THE <span className="text-ass-primary">ASS BOT</span> 🤖🔥
                </h2>

                <div className="max-w-4xl mx-auto bg-black border-4 border-ass-primary rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(247,147,26,0.4)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ass-primary to-transparent animate-pulse"></div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="text-6xl md:text-8xl animate-bounce-custom filter drop-shadow-[0_0_20px_rgba(247,147,26,0.5)]">
                            🤖
                        </div>
                        <div className="text-left space-y-4">
                            <h3 className="text-2xl md:text-4xl font-bold text-white uppercase">
                                Auto Buy Back & Burn
                            </h3>
                            <p className="text-xl text-gray-300 font-mono">
                                We don't just talk. We <span className="text-ass-primary font-bold">BURN</span> tokens.
                                <br />
                                Our custom bot automatically buys back $Asset every hour and sends it straight to the void.
                            </p>
                            <div className="inline-block bg-ass-primary text-black font-bold px-4 py-2 rounded transform -skew-x-12 shadow-[0_0_15px_rgba(247,147,26,0.5)]">
                                SUPPLY REDUCING FOREVER
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fire Animation Elements */}
                <div className="flex justify-center mt-12 gap-8 text-ass-primary">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-5xl animate-pulse" style={{ animationDelay: `${i * 0.15}s` }}>
                            🔥
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
