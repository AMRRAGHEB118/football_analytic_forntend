import DoughnutChart from "./charts/DounghuntChart";

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
        <div className="bg-secondary-1000 rounded-lg w-full h-auto">
            {/* Title */}
            <div className="bg-primary-800/50 p-3 rounded-t-md text-left text-white text-lg font-bold h-[50px]">
                {title}
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center">
                {/* Doughnut Chart */}
                <div className="w-full sm:h-[200px] h-[120px] flex justify-center">
                    <DoughnutChart total={total} title={title} data={chartData} width="100%" />
                </div>

                {/* colors */}
                <div className="flex flex-col gap-y-1 w-full ml-14">
                    {chartData.map(({ label, color }) => (
                        <div key={label} className="flex items-center mr-4">
                            <div className="sm:w-4 sm:h-4 w-3 h-3 rounded mr-2" style={{ backgroundColor: color }} />
                            <span className="text-white sm:text-sm text-xs font-light">{label}</span>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 gap-2 mt-4 pb-5">
                    {stats.slice(0, 5).map(({ label, value, unit }) => (
                        <div key={label} className="flex items-center border-primary-500 border rounded-lg
                            sm:w-[215px] w-[170px] h-[40px]">
                            <div className="flex items-center justify-between rounded bg-transparent text-white h-full w-full">
                                <span style={{ flex: 1, textAlign: 'center' }}
                                    className="sm:text-sm text-xs line-clamp-1 w-8/12 indent-1">
                                    {label}
                                </span>
                                <div className="flex bg-primary-800 items-center justify-center rounded-md ml-2
                                                text-lg p-1 font-bold gap-1 h-full sm-16 sm:w-5/12">
                                    <span className="sm:text-sm text-xs">{value}</span>
                                    <span className="sm:text-sm text-xs">{unit}</span>
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