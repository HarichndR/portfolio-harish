import { Activity, Shield, Network } from "lucide-react";

export default function Philosophy() {
    return (
        <section className="py-20 px-6 bg-slate-900">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-white mb-12">
                    Engineering Philosophy
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-slate-950 border border-slate-800 rounded-lg">
                        <Activity className="mx-auto text-emerald-400 mb-4" />
                        <h3 className="text-slate-200 font-semibold mb-2">
                            Performance First
                        </h3>
                        <p className="text-sm text-slate-400">
                            Low latency APIs using caching and optimized queries.
                        </p>
                    </div>

                    <div className="p-6 bg-slate-950 border border-slate-800 rounded-lg">
                        <Shield className="mx-auto text-emerald-400 mb-4" />
                        <h3 className="text-slate-200 font-semibold mb-2">
                            Secure by Design
                        </h3>
                        <p className="text-sm text-slate-400">
                            Security is built-in, not added later.
                        </p>
                    </div>

                    <div className="p-6 bg-slate-950 border border-slate-800 rounded-lg">
                        <Network className="mx-auto text-emerald-400 mb-4" />
                        <h3 className="text-slate-200 font-semibold mb-2">
                            Scalable Systems
                        </h3>
                        <p className="text-sm text-slate-400">
                            Designed for horizontal scaling and growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
