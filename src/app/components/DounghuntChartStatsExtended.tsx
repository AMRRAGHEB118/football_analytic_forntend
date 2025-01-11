import DoughnutChart from "./DounghuntChart";

interface Stat {
    label: string;
    value: number;
    unit: string;
    color: string;
}

interface StatsProps {
    title: string;
    total: number;
    chartData: Stat[];
    stats: Stat[];
}

const DounghuntChartStatsExtended = ({ title, total, chartData, stats }: StatsProps) => {
    return (
        <div className="bg-secondary-1000 rounded-lg w-full h-auto p-6">
            {/* Title */}
            <div className="bg-primary-950 p-2 rounded-t-lg text-left text-white text-lg font-bold h-[45px]">
                {title}
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center mt-4">
                {/* Doughnut Chart */}
                <div className="w-full flex justify-center">
                    <DoughnutChart total={total} title={title} data={chartData} width="400px" height="300px" />
                </div>

                {/* Legend */}
                <div className="flex justify-center mt-4">
                    {chartData.map(({ label, color }) => (
                        <div key={label} className="flex items-center mr-4">
                            <div className="w-4 h-4 rounded mr-2" style={{ backgroundColor: color }} />
                            <span className="text-white text-sm font-light">{label}</span>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="flex justify-center mt-4">
                    {stats.slice(0, 5).map(({ label, value, unit }) => (
                        <div key={label} className="flex items-center justify-between mx-2 p-2 border-primary-500 border rounded-lg">
                            <div className="flex items-center justify-between rounded pl-4 bg-transparent text-white">
                                <span style={{ flex: 1, textAlign: 'center' }}>{label}</span>
                                <div className="bg-primary-500 items-center justify-center rounded-md ml-2 text-lg font-bold p-2 flex flex-col">
                                    <span className="text-base">{value}</span>
                                    <span className="text-base">{unit}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DounghuntChartStatsExtended;