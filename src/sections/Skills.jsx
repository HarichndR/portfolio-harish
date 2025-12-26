import SkillCard from "../components/SkillCard";
import {
    Server,
    Share2,
    Database,
    Shield,
    Container,
    Cpu,
    Brain,
    Workflow,
    Layout
} from "lucide-react";

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 bg-slate-900">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-14">
                    Full-Stack Backend & AI Skillset
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <SkillCard
                        title="Backend Engineering"
                        icon={<Server />}
                        skills={[
                            "Node.js , Express & FastAPI ",
                            "REST API Design",
                            "GraphQl",
                            "gRPC",
                            "JWT & OTP Authentication",
                            "RBAC (Multi-role Systems)",
                            "Validation & Error Handling"
                        ]}
                    />

                    <SkillCard
                        title="Distributed Systems"
                        icon={<Share2 />}
                        skills={[
                            "Event-Driven Architecture",
                            "Apache Kafka",
                            "Async Processing",
                            "Redis Caching & Rate Limiting"
                        ]}
                    />

                    <SkillCard
                        title="Databases"
                        icon={<Database />}
                        skills={[
                            "MongoDB Schema Design",
                            "2dsphere Geo Queries",
                            "Redis Data Stores",
                            "Vector Databases",
                            "Postgresql",
                            "ElasticSearch"
                        ]}
                    />

                    <SkillCard
                        title="AI & LLM Systems"
                        icon={<Brain />}
                        skills={[
                            "transformers architecture",
                            "LLM API Integration",
                            "Vector Search (RAG Basics)",
                            "Multi-Agent Systems",
                            "Prompt Engineering"
                        ]}
                    />

                    <SkillCard
                        title="ML & DL"
                        icon={<Cpu />}
                        skills={[
                            "ML Fundamentals",
                            "Deep Learning ",
                            "LoRA / QLoRA  (Intro)",
                            "1 bit LLM deployment",
                            "Inference Optimization",
                            "NLP(basics)"
                        ]}
                    />

                    <SkillCard
                        title="Automation"
                        icon={<Workflow />}
                        skills={[
                            "n8n Automation",
                            "Webhook Workflows",
                            "AI + Backend Pipelines",
                            "CI/CD(jenkins/ArgoCD)"
                        ]}
                    />

                    <SkillCard
                        title="Security"
                        icon={<Shield />}
                        skills={[
                            "OTP Verification",
                            "Password Reset Flows",
                            "API Security Best Practices",
                            "idempotency in rest api",
                            "distributed systems locking"
                        ]}
                    />

                    <SkillCard
                        title="DevOps"
                        icon={<Container />}
                        skills={[
                            "Docker",
                            "AWS (EC2, S3)",
                            "Nginx Basics",
                            "Env Configuration",
                            "Terraform",
                            "K8n(Basics)",
                            "jenkins"
                        ]}
                    />

                    <SkillCard
                        title="Frontend"
                        icon={<Layout />}
                        skills={[
                            "React.js",
                            "API Integration",
                            "Admin Dashboards",
                            "React Native(Basics)",
                            "Nextjs",
                            "Build frontend with AI"

                        ]}
                    />

                </div>
            </div>
        </section>
    );
}
