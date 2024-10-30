import LeagueCard from './LeagueCard';

interface League {
    id: number;
    name: string;
    logo: string;
}

interface LeagueListProps {
    leagues: League[];
}

const LeagueList: React.FC<LeagueListProps> = ({ leagues }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leagues.map((league) => (
                <LeagueCard key={league.id} league={league} />
            ))}
        </div>
    );
};

export default LeagueList;
