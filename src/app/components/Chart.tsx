'use client';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ECBasicOption } from 'echarts/types/dist/shared';

interface ChartProps {
    option: ECBasicOption;
    width?: string;
    height?: string;
}

const Chart = ({ option, width = '100%', height = '400px' }: ChartProps) => {
    const chartRef = useRef(null);

    useEffect(() => {
        let chart: echarts.ECharts;
        if (chartRef.current) {
            chart = echarts.init(chartRef.current);
            chart.setOption(option);

            const resizeObserver = new ResizeObserver(() => {
                chart.resize();
            });
            resizeObserver.observe(chartRef.current);

            return () => {
                chart.dispose();
                resizeObserver.disconnect();
            };
        }
    }, [option]);

    return <div ref={chartRef} style={{ width, height }} />;
};

export default Chart;
