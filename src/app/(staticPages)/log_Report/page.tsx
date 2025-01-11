import LogsCard from '../../components/LogsCard';

const leaguesStats = [
    { value: 500, label: 'Total Requests' },
    { value: '5ms', label: 'Response Time (avg)' },
    { value: '83%', label: 'Successful Requests' },
];

const playersStats = [
    { value: 800, label: 'Total Requests' },
    { value: '7ms', label: 'Response Time (avg)' },
    { value: '78%', label: 'Successful Requests' },
];

const teamsStats = [
    { value: 450, label: 'Total Requests' },
    { value: '6ms', label: 'Response Time (avg)' },
    { value: '85%', label: 'Successful Requests' },
];

const LogsPage = () => {
    return (
        <div className='mt-4'>
            {/* Logs for Leagues Module */}
            <LogsCard module="Leagues" logs={leaguesStats} />
        </div>
    );
};

export default LogsPage;
