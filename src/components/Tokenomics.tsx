export default function Tokenomics() {
    const stats = [
        { label: "Total Supply", value: "1,000,000,000" },
        { label: "Tax", value: "0/0" },
        { label: "Liquidity", value: "Burnt" },
        { label: "Ticker", value: "$Asset" },
    ];

    return (
        <section className="py-20 bg-ass-dark relative overflow-hidden border-t border-ass-primary/20">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-ass-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl md:text-7xl font-black text-center mb-16 text-white uppercase tracking-tighter drop-shadow-[0_0_10px_rgba(247,147,26,0.5)]">
                    Tokenomics
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-gray-900/80 p-6 rounded-xl border-2 border-gray-800 hover:border-ass-primary transition-colors group shadow-lg hover:shadow-[0_0_20px_rgba(247,147,26,0.3)]">
                            <div className="text-gray-400 text-sm uppercase tracking-widest mb-2">{stat.label}</div>
                            <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-ass-primary transition-colors">
                                {stat.value}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block bg-ass-primary/10 border border-ass-primary p-4 rounded-lg shadow-[0_0_15px_rgba(247,147,26,0.3)]">
                        <p className="text-ass-primary font-mono text-sm md:text-base break-all">
                            CA: H7oNrjmLRjeUm1fZpsVaDDGqSzsr5JPXgsj55dA1pump
                        </p>
                    </div>
                    <p className="text-gray-500 text-xs mt-2 uppercase tracking-wider">Contract Address</p>
                </div>
            </div>
        </section>
    );
}
