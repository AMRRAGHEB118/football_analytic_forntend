import Chart from "./Chart";

interface BarChartProps {
    title: string;
    data: {
        label: string;
        value: number;
    }[];
    width?: string;
    height?: string;
}

const BarChart = ({ title, data, width = '100%', height = '400px' }: BarChartProps) => {
    const barOption = {
        xAxis: {
            type: 'category',
            data: data.map(({ label }) => label),
            axisLine: {
                lineStyle: {
                    color: '#FF6F61'
                }
            },
            axisLabel: {
                color: '#FFFFFF',
                fontSize: 12
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#FF6F61',
                    width: 2
                },
            },
            axisLabel: {
                color: '#FFFFFF',
                fontSize: 12
            }
        },
        series: [
            {
                data: data.map(({ value }) => value),
                type: 'bar',
                barWidth: '60%',
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0, 
                                color: '#FF6F61'
                            },
                            {
                                offset: 1, 
                                color: '#2C1C1C'
                            }
                        ]
                    }
                }
            }
        ],
        tooltip: {
            trigger: 'axis',
            formatter: '{b}: {c}'
        },
        backgroundColor: 'transparent'
    };

    return <Chart option={barOption} width={width} height={height} />;
};

export default BarChart;
