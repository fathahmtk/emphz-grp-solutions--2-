import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import { TrendingUp, Award, Users, Building2 } from 'lucide-react';

interface StatItem {
    icon: React.ReactNode;
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    decimals?: number;
}

const StatsSection: React.FC = () => {
    const stats: StatItem[] = [
        {
            icon: <Building2 className="w-8 h-8" />,
            value: 500,
            suffix: '+',
            label: 'Projects Delivered',
            decimals: 0
        },
        {
            icon: <Award className="w-8 h-8" />,
            value: 50,
            suffix: '+',
            label: 'Years Service Life',
            decimals: 0
        },
        {
            icon: <Users className="w-8 h-8" />,
            value: 200,
            suffix: '+',
            label: 'Happy Clients',
            decimals: 0
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            value: 99.8,
            suffix: '%',
            label: 'Quality Assurance',
            decimals: 1
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-cyan-50 relative overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="mesh-blob mesh-blob-1 opacity-30" />
                <div className="mesh-blob mesh-blob-2 opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                        Proven <span className="text-gradient-animated">Excellence</span>
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Numbers that speak to our commitment to quality and innovation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="glass-prismatic rounded-2xl p-8 hover-lift spotlight-container group"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 text-emphz-teal group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-5xl font-bold text-neutral-900 mb-2">
                                    <AnimatedCounter
                                        end={stat.value}
                                        duration={2500}
                                        suffix={stat.suffix}
                                        prefix={stat.prefix}
                                        decimals={stat.decimals}
                                    />
                                </div>
                                <p className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
