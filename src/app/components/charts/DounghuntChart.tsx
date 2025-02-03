import Chart from "./Chart";
import { useEffect, useState } from "react";

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

const DoughnutChart = ({ total, title, data, width = '100%', height = '100%' }: DoughnutChartProps) => {

    const fontSize = window.innerWidth < 768 ? 15 : 21;

    const doughnutOption = {
        title: {
            text: total.toString(),
            left: 'center',
            top: 'center',
            textStyle: {
                fontSize,
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