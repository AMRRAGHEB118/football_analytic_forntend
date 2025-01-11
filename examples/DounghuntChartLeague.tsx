import React from 'react';
import DoughnutChartLeague from '../src/app/components/DounghuntChartLeague';

const DoughnutChartLeagueExample = () => {
    // Demo data for topPlayersScored
    const topPlayersScoredData = [
        { label: 'Player A', value: 25, unit: 'goals', color: '#FF6384' },
        { label: 'Player B', value: 20, unit: 'goals', color: '#36A2EB' },
        { label: 'Player C', value: 18, unit: 'goals', color: '#FFCE56' },
        { label: 'Player D', value: 15, unit: 'goals', color: '#4BC0C0' },
        { label: 'Player E', value: 12, unit: 'goals', color: '#9966FF' },
    ];

    // Demo data for topPlayersAssisted
    const topPlayersAssistedData = [
        { label: 'Player X', value: 15, unit: 'assists', color: '#FF6384' },
        { label: 'Player Y', value: 12, unit: 'assists', color: '#36A2EB' },
        { label: 'Player Z', value: 10, unit: 'assists', color: '#FFCE56' },
        { label: 'Player W', value: 8, unit: 'assists', color: '#4BC0C0' },
        { label: 'Player V', value: 7, unit: 'assists', color: '#9966FF' },
    ];

    // Demo data for topTeamsPossessed
    const topTeamsPossessedData = [
        { label: 'Team A', value: 60, unit: '%', color: '#FF6384' },
        { label: 'Team B', value: 58, unit: '%', color: '#36A2EB' },
        { label: 'Team C', value: 55, unit: '%', color: '#FFCE56' },
        { label: 'Team D', value: 53, unit: '%', color: '#4BC0C0' },
        { label: 'Team E', value: 50, unit: '%', color: '#9966FF' },
    ];

    // Demo data for topTeamsScored
    const topTeamsScoredData = [
        { label: 'Team X', value: 70, unit: 'goals', color: '#FF6384' },
        { label: 'Team Y', value: 65, unit: 'goals', color: '#36A2EB' },
        { label: 'Team Z', value: 60, unit: 'goals', color: '#FFCE56' },
        { label: 'Team W', value: 55, unit: 'goals', color: '#4BC0C0' },
        { label: 'Team V', value: 50, unit: 'goals', color: '#9966FF' },
    ];

    // Demo data for mostFailedToScore
    const mostFailedToScoreData = [
        { label: 'Team A', value: 10, unit: 'matches', color: '#FF6384' },
        { label: 'Team B', value: 8, unit: 'matches', color: '#36A2EB' },
        { label: 'Team C', value: 7, unit: 'matches', color: '#FFCE56' },
        { label: 'Team D', value: 6, unit: 'matches', color: '#4BC0C0' },
        { label: 'Team E', value: 5, unit: 'matches', color: '#9966FF' },
    ];

    return (
        <div className="flex flex-wrap gap-4 p-4">
            {/* Top Players Scored */}
            <DoughnutChartLeague
                type="topPlayersScored"
                data={topPlayersScoredData}
                total={topPlayersScoredData.reduce((sum, player) => sum + player.value, 0)}
                title="Top Players Scored"
            />

            {/* Top Players Assisted */}
            <DoughnutChartLeague
                type="topPlayersAssisted"
                data={topPlayersAssistedData}
                total={topPlayersAssistedData.reduce((sum, player) => sum + player.value, 0)}
                title="Top Players Assisted"
            />

            {/* Top Teams Possessed */}
            <DoughnutChartLeague
                type="topTeamsPossessed"
                data={topTeamsPossessedData}
                total={topTeamsPossessedData.reduce((sum, team) => sum + team.value, 0)}
                title="Top Teams Possessed"
            />

            {/* Top Teams Scored */}
            <DoughnutChartLeague
                type="topTeamsScored"
                data={topTeamsScoredData}
                total={topTeamsScoredData.reduce((sum, team) => sum + team.value, 0)}
                title="Top Teams Scored"
            />

            {/* Most Failed to Score */}
            <DoughnutChartLeague
                type="mostFailedToScore"
                data={mostFailedToScoreData}
                total={mostFailedToScoreData.reduce((sum, team) => sum + team.value, 0)}
                title="Most Failed to Score"
            />
        </div>
    );
};

export default DoughnutChartLeagueExample;