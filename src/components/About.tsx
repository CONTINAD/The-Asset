export default function About() {
    return (
        <section className="py-20 bg-ass-dark text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-ass-orange animate-pulse">
                    What is $AssAsset?
                </h2>
                <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-2xl border-4 border-ass-orange shadow-[0_0_20px_rgba(255,140,0,0.5)] transform hover:scale-105 transition-transform duration-300">
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                        We're not just another coin. We're the <span className="text-ass-orange font-bold">ASSET</span> you've been waiting for.
                        Backed by the sheer power of meme magic and degenerate energy.
                        <br /><br />
                        Don't be a liability. Be an asset.
                    </p>
                </div>
            </div>
        </section>
    );
}
