import LeagueList from '../../components/LeagueList';

const leagues = [
    {
        id: 1,
        name: 'Premier League',
        logo: 'https://example.com/premier-league-logo.png',
    },
    {
        id: 2,
        name: 'La Liga',
        logo: 'https://example.com/la-liga-logo.png',
    },
    {
        id: 3,
        name: 'Serie A',
        logo: 'https://example.com/serie-a-logo.png',
    },
    {
        id: 4,
        name: 'Bundesliga',
        logo: 'https://example.com/bundesliga-logo.png',
    },
    {
        id: 5,
        name: 'Ligue 1',
        logo: 'https://example.com/ligue-1-logo.png',
    },
    {
        id: 6,
        name: 'Eredivisie',
        logo: 'https://example.com/eredivisie-logo.png',
    },
];

const LeaguesPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Leagues</h1>
            <LeagueList leagues={leagues} />
        </div>
    );
};

export default LeaguesPage;
