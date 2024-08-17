'use client';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ECBasicOption } from 'echarts/types/dist/shared';

const Chart = ({ option }: { option: ECBasicOption }) => {
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

    return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default Chart;
