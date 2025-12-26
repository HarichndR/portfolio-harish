export default function FeatureHighlight({ icon, title, description }) {
    return (
        <div className="flex gap-4">
            <div className="text-emerald-500">{icon}</div>
            <div>
                <h4 className="text-slate-200 font-semibold mb-1">{title}</h4>
                <p className="text-slate-400 text-sm">{description}</p>
            </div>
        </div>
    );
}
