import { motion } from "framer-motion";

export default function SkillCard({ title, icon, skills, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.4 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-emerald-500 transition"
        >
            <div className="flex items-center gap-3 mb-4 text-emerald-400">
                {icon}
                <h3 className="font-semibold text-slate-200">{title}</h3>
            </div>

            <ul className="space-y-2 text-sm text-slate-400">
                {skills.map((s, i) => (
                    <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        {s}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
