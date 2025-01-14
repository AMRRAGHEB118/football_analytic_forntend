import BarChart from './BarChart';

interface Stat {
    label: string;
    value: number;
    unit: string;
}

interface BarChartStatsProps {
    title: string;
    chartData: {
        label: string;
        value: number;
    }[];
}

const BarChartStats = ({ title, chartData }: BarChartStatsProps) => {
    return (
        <div className="bg-secondary-1000 rounded-lg sm:w-[425px] h-[280px] w-[315px]">
            {/* Title */}
            <div className="bg-primary-950 p-2 rounded-t-lg text-left text-white text-lg font-bold h-[45px]">
                {title}
            </div>

            {/* Content */}
            <div className="flex items-center justify-center sm:h-[220px] h-[205px] w-full mt-2">
                {/* Bar Chart */}
                <div className="w-full flex justify-center">
                    <BarChart title={title} data={chartData} width="400px" height="300px" />
                </div>
            </div>
        </div>
    );
};

export default BarChartStats;
