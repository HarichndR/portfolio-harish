import FeatureHighlight from "../components/FeatureHighlight";
import { Shield, GitBranch, Database, Bell, Cpu } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto space-y-24">

                {/* PROJECT 1 */}
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-emerald-400 text-xs font-bold">
                            FULL STACK PROJECT (COMPLETED)
                        </span>

                        <h2 className="text-3xl font-bold text-white mt-3 mb-6">
                            FarmsToMarket – MVP
                        </h2>

                        <p className="text-slate-400 mb-8">
                            A complete MERN-based platform enabling farmers and buyers
                            to trade products online with secure authentication and
                            role-based access.
                        </p>

                        <div className="space-y-5">
                            <FeatureHighlight
                                icon={<Shield />}
                                title="JWT & Role-Based Access"
                                description="Secure authentication with farmer, buyer, and admin roles."
                            />
                            <FeatureHighlight
                                icon={<Database />}
                                title="Product & User Management"
                                description="Add, update, delete products, profile management, feedback system."
                            />
                            <FeatureHighlight
                                icon={<Cpu />}
                                title="Search & APIs"
                                description="Backend-powered product search with RESTful APIs."
                            />
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-sm text-slate-300 font-mono">
                        Tech Stack:
                        <ul className="mt-4 space-y-2">
                            <li>• React, Node.js, Express</li>
                            <li>• MongoDB</li>
                            <li>• JWT Authentication</li>
                            <li>• Role-Based Authorization</li>
                        </ul>
                    </div>
                </div>

                {/* PROJECT 2 */}
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-orange-400 text-xs font-bold">
                            ENTERPRISE BACKEND SYSTEM (IN PROGRESS)
                        </span>

                        <h2 className="text-3xl font-bold text-white mt-3 mb-6">
                            FarmsToMarket – Enterprise Platform
                        </h2>

                        <p className="text-slate-400 mb-8">
                            A scalable, event-driven backend system designed for
                            multi-user agricultural commerce with async processing
                            and geo-based intelligence.
                        </p>

                        <div className="space-y-5">
                            <FeatureHighlight
                                icon={<Shield />}
                                title="OTP Authentication & Security"
                                description="OTP-based login, forgot password flows using Redis."
                            />
                            <FeatureHighlight
                                icon={<GitBranch />}
                                title="Event-Driven Architecture"
                                description="Kafka-based async notifications and decoupled services."
                            />
                            <FeatureHighlight
                                icon={<Bell />}
                                title="Real-Time Notifications"
                                description="Firebase push notifications triggered via Kafka consumers."
                            />
                            <FeatureHighlight
                                icon={<Database />}
                                title="Geo-Spatial Intelligence"
                                description="MongoDB 2dsphere index with distance-based user matching."
                            />
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-sm text-slate-300 font-mono">
                        Tech Stack:
                        <ul className="mt-4 space-y-2">
                            <li>• Node.js, Express</li>
                            <li>• MongoDB (2dsphere)</li>
                            <li>• Redis (Cache & OTP)</li>
                            <li>• Apache Kafka</li>
                            <li>• Firebase Notifications</li>
                        </ul>

                        <div className="mt-6 text-xs text-slate-500">
                            Upcoming: Payments, Recommendation Engine, Live Bidding, Order Tracking
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
