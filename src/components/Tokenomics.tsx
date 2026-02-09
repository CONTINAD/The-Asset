export default function Tokenomics() {
    const stats = [
        { label: "Total Supply", value: "1,000,000,000" },
        { label: "Tax", value: "0/0" },
        { label: "Liquidity", value: "Burnt" },
        { label: "Ticker", value: "$ASS" },
    ];

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-ass-orange rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-ass-orange rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl md:text-7xl font-black text-center mb-16 text-white uppercase tracking-tighter">
                    Tokenomics
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-gray-900 p-6 rounded-xl border-2 border-gray-800 hover:border-ass-orange transition-colors group">
                            <div className="text-gray-400 text-sm uppercase tracking-widest mb-2">{stat.label}</div>
                            <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-ass-orange transition-colors">
                                {stat.value}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block bg-ass-orange/20 border border-ass-orange p-4 rounded-lg">
                        <p className="text-ass-orange font-mono text-sm md:text-base break-all">
                            CA: 0000000000000000000000000000000000000000
                        </p>
                    </div>
                    <p className="text-gray-500 text-xs mt-2 uppercase tracking-wider">Contract Address</p>
                </div>
            </div>
        </section>
    );
}
