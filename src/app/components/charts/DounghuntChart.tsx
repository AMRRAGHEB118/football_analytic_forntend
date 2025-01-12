import Chart from "./Chart";

interface DoughnutChartProps {
    total: number;
    title: string;
    data: {
        label: string;
        value: number;
        color: string;
    }[];
    width?: string;
    height?: string;
}

const DoughnutChart = ({ total, title, data, width = '100%', height = '400px' }: DoughnutChartProps) => {
    const doughnutOption = {
        title: {
            text: total.toString(),
            left: 'center',
            top: 'center',
            textStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                color: '#FFFFFF',
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
        },
        legend: {
            show: false
        },
        series: [
            {
                name: title,
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                data: data.map(({ label, value, color }) => ({
                    value,
                    name: label,
                    itemStyle: { color }
                }))
            }
        ],
        backgroundColor: 'transparent'
    };

    return <Chart option={doughnutOption} width={width} height={height} />;
};

export default DoughnutChart;
