export default function About() {
    return (
        <section className="py-20 bg-ass-dark text-center border-t border-ass-primary/20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-[0_0_10px_rgba(157,78,221,0.8)] animate-pulse">
                    What is $AssAsset?
                </h2>
                <div className="max-w-3xl mx-auto bg-black/80 p-8 rounded-2xl border-4 border-ass-primary shadow-[0_0_30px_rgba(157,78,221,0.4)] transform hover:scale-105 transition-transform duration-300">
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                        We're not just another coin. We're the <span className="text-ass-accent font-bold">ASSET</span> you've been waiting for.
                        Backed by the sheer power of meme magic and electric energy.
                        <br /><br />
                        Don't be a liability. Be an asset.
                    </p>
                </div>
            </div>
        </section>
    );
}
