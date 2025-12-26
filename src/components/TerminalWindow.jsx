import { useState, useRef, useEffect } from "react";

export default function TerminalWindow() {
    const [history, setHistory] = useState([
        { type: "output", content: "Initializing Backend Portfolio v1.0.0..." },
        { type: "output", content: "Modules loaded: Node.js, Kafka, Redis" },
        { type: "output", content: 'Type "help" for commands' }
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const commands = {
        help: () => "about | skills | contact | clear | whoami",
        about: () => "Harichndr Solunke - Backend Engineer (Distributed Systems)",
        skills: () => "Node.js, PostgreSQL, Redis, Kafka, Docker, AWS",
        contact: () => "Email: harichndr@email.com",
        whoami: () => "visitor@internet"
    };

    const handleKey = (e) => {
        if (e.key === "Enter") {
            const cmd = input.trim().toLowerCase();
            if (!cmd) return;

            if (cmd === "clear") {
                setHistory([{ type: "output", content: "Terminal cleared." }]);
                setInput("");
                return;
            }

            const output = commands[cmd]
                ? commands[cmd]()
                : `Command not found: ${cmd}`;

            setHistory([...history, { type: "input", content: cmd }, { type: "output", content: output }]);
            setInput("");
        }
    };

    return (
        <div className="bg-slate-950 border border-slate-700 rounded-lg font-mono text-sm p-4 h-64 overflow-y-auto">
            {history.map((line, i) => (
                <div key={i} className={line.type === "output" ? "text-emerald-400" : "text-slate-300"}>
                    {line.type === "input" && <span className="text-pink-500">$ </span>}
                    {line.content}
                </div>
            ))}
            <div className="flex">
                <span className="text-pink-500">$ </span>
                <input
                    className="bg-transparent outline-none flex-1"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    autoFocus
                />
            </div>
            <div ref={bottomRef} />
        </div>
    );
}
