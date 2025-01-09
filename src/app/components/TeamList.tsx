import TeamCard from './TeamCard';

interface Team {
    id: number;
    name: string;
    imgPath: string;
}

interface TeamListProps {
    teams: Team[];
}

const TeamList: React.FC<TeamListProps> = ({ teams }) => {
    return (
        <div className="mx-auto grid
                grid-cols-3
                sm:grid-cols-4
                md:grid-cols-5
                xl:grid-cols-7
                2xl:grid-cols-11
                gap-5 p-8
                place-items-center">
            {teams.map((team) => (
                <TeamCard key={team.id} team={team} />
            ))}
        </div>
    );
};

export default TeamList;
