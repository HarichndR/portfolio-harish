import TerminalWindow from "../components/TerminalWindow";
import { motion } from "framer-motion";
import { Github, FileText } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center px-6 bg-slate-950">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                {/* Left Content */}
                <div>
                    <h1 className="text-5xl font-extrabold text-white leading-tight">
                        Harichndr <span className="text-emerald-400">Solunke</span>
                    </h1>

                    <p className="mt-4 text-lg text-slate-300">
                        Backend Engineer building scalable, AI-enabled systems
                    </p>

                    <p className="mt-4 text-slate-400 max-w-xl">
                        I design and develop production-grade backend platforms using
                        Node.js, Kafka, Redis, MongoDB, and AI workflows — powering
                        multi-role applications with authentication, geo-based services,
                        async messaging, and intelligent automation.
                    </p>

                    <p className="mt-4 text-sm text-slate-500">
                        Node.js • Kafka • Redis • MongoDB • Vector DB • LLMs • Docker • AWS
                    </p>

                    {/* CTAs */}
                    <div className="mt-8 flex gap-4">
                        <a
                            href="https://github.com/HarichndR"
                            target="_blank"
                            className="flex items-center gap-2 px-5 py-3 bg-slate-800 rounded-lg hover:bg-slate-700"
                        >
                            <Github size={18} /> GitHub
                        </a>

                        <a
                            href="https://drive.google.com/file/d/15yRIZYzQaV_Xl_jFKymxzK0JCLbdyK6E/view?usp=drive_link"
                            className="flex items-center gap-2 px-5 py-3 border border-slate-600 rounded-lg hover:bg-slate-800"
                        >
                            <FileText size={18} /> Resume
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <TerminalWindow />
                </motion.div>
            </div>
        </section>
    );
}
