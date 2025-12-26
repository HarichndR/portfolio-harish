import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer
            id="contact"
            className="py-12 border-t border-slate-800 text-center"
        >
            <h2 className="text-xl font-bold text-white mb-4">
                Let’s Build Systems
            </h2>

            <p className="text-slate-400 mb-6">
                Open to backend & platform engineering roles.
            </p>

            <div className="flex justify-center gap-6 text-slate-300">
                <a href="mailto:harichndrsolunke4@gmail.com" className="hover:text-emerald-400">
                    <Mail />
                </a>
                <a href="https://github.com/HarichndR" className="hover:text-emerald-400">
                    <Github />
                </a>
                <a href="https://www.linkedin.com/in/harichndr-solunke-9849b7232/" className="hover:text-emerald-400">
                    <Linkedin />
                </a>
            </div>

            <p className="mt-8 text-xs text-slate-600 font-mono">
                © {new Date().getFullYear()} Harichndr Solunke
            </p>
        </footer>
    );
}
