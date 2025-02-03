import React from 'react';
import DounghuntChartStatsExtended from './DounghuntChartStatsExtended'; // Use the extended version

interface Stat {
    label: string;
    value: number;
    unit: string;
    color: string;
}

interface DounghuntChartLeagueProps {
    type: 'topPlayersScored' | 'topPlayersAssisted' | 'topTeamsPossessed' | 'topTeamsScored' | 'mostFailedToScore' |
    'mostYellowCarded' | 'topContributers' | 'topMinutesPlayed';
    data: Stat[];
    total: number;
    title: string;
}

const DounghuntChartLeague = ({ type, data, total, title }: DounghuntChartLeagueProps) => {

    const chartData = data.map(({ label, value, unit, color }) => ({
        label,
        value,
        unit,
        color,
    }));

    const stats = data.map(({ label, value, unit }) => ({
        label,
        value,
        unit,
        color: '',
    }));

    return (
        <DounghuntChartStatsExtended
            title={title}
            total={total}
            chartData={chartData}
            stats={stats}
        />
    );
};

export default DounghuntChartLeague;
