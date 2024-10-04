import BarChartStats from '../src/app/components/BarChartStats';

const exampleData = {
    title: 'Goals Scored by Time Interval',
    chartData: [
        { label: '0-15', value: 10 },
        { label: '15-30', value: 8 },
        { label: '30-45', value: 15 },
        { label: '45-60', value: 12 },
        { label: '60-75', value: 9 },
        { label: '75-90', value: 20 }
    ]
};

<BarChartStats
    title={exampleData.title}
    chartData={exampleData.chartData}
/>;
