import React from 'react';

const Stats = () => {
    const statsData = [
        {
            label: "TOTAL DOWNLOADS",
            value: "29.6M",
            subtext: "21% More Than Last Month"
        },
        {
            label: "TOTAL REVIEWS",
            value: "906K",
            subtext: "45% More Than Last Month"
        },
        {
            label: "ACTIVE APPS",
            value: "132+",
            subtext: "31 More Will Launch"
        }
    ];

    return (
        <section className="bg-[#8B5CF6] py-16 px-6 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
                    Trusted By Millions, Built For You
                </h2>

                {/* Mobile: Column with divide-y | Desktop: Grid with no divide-y */}
                <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 text-center divide-y divide-white/30 md:divide-y-0">
                    {statsData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center py-8 md:py-0">
                            <p className="text-sm opacity-90 uppercase tracking-wider mb-3">
                                {item.label}
                            </p>
                            <h3 className="text-6xl md:text-6xl font-bold mb-3">
                                {item.value}
                            </h3>
                            <p className="text-sm opacity-90">
                                {item.subtext}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;