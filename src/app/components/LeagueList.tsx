import LeagueCard from './LeagueCard';

interface League {
    id: number;
    name: string;
    imagePath: string;
}

interface LeagueListProps {
    leagues: League[];
}

const LeagueList: React.FC<LeagueListProps> = ({ leagues }) => {
    return (
        <div className='flex flex-col mt-20 items-center sm:items-start'>
            <h1 className='text-white sm:text-4xl text-2xl font-bold'>Leagues</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5 sm:p-8 p-4">
                {leagues.map((league) => (
                    <LeagueCard key={league.id} league={league} />
                ))}
            </div>
        </div>
    );
};

export default LeagueList;
