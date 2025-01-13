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

const DounghuntChartStats = ({ title, total, chartData, stats }: StatsProps) => {
    return (
        <div className="bg-secondary-1000 rounded-lg sm:w-[425px] w-[315px] sm:h-[250px] h-[220px]">
            {/* Title */}
            <div className="bg-primary-950 p-2 rounded-t-lg text-left text-white text-lg font-bold h-[45px]">
                {title}
            </div>

            {/* Content */}
            <div className="flex w-full h-auto">
                {/* Doughnut Chart */}
                <div className="w-5/12 sm:w-1/2 h-auto">
                    <DoughnutChart total={total} title={title} data={chartData} />
                </div>

                <div className="flex flex-col items-center w-1/2 p-4">
                    <div className="ml-2 w-full">
                        {stats.map(({ label, value, unit }) => (
                            <div key={label} className="mb-2 flex items-center justify-between w-ful sm:h-[50px] h-[39px] border-primary-500 border rounded-lg">
                                <div className="flex items-center justify-between rounded pl-4 bg-transparent text-white h-full w-full">
                                    <span style={{ flex: 1, textAlign: 'center' }} className="sm:text-base text-sm">{label}</span>
                                    <div className="bg-primary-500 items-center justify-center sm:text-base text-xs rounded-md ml-2 font-bold h-full w-1/3 flex flex-col">
                                        <span className="">{value}</span>
                                        <span className="">{unit}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Legend */}
                    <div className="pt-2">
                        {chartData.map(({ label, color }) => (
                            <div key={label} className="flex items-center mb-1 ">
                                <div className="w-4 h-4 rounded mr-2" style={{ backgroundColor: color }} />
                                {/* line-height: 16.41px; */}
                                <span className="text-white sm:text-sm text-xs font-light">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Side Stats */}
            </div>
        </div>
    );
};

export default DounghuntChartStats;
