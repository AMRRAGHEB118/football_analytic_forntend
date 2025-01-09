import DoughnutChartStats from '../src/app/components/charts/DounghuntChartStats';

const exampleData = {
    title: 'Goals Conceded',
    total: 95,
    chartData: [
        { label: 'Goals Scored Home', value: 50, unit: 'Goals', color: '#FE7750' },
        { label: 'Goals Scored Away', value: 45, unit: 'Goals', color: '#50a5f1' }
    ],
    stats: [
        { label: 'Home', value: 50, unit: 'Goals', color: '#FE7750' },
        { label: 'Away', value: 45, unit: 'Goals', color: '#50a5f1' }
    ]
};

<DoughnutChartStats
title={exampleData.title}
total={exampleData.total}
chartData={exampleData.chartData}
stats={exampleData.stats}
/>