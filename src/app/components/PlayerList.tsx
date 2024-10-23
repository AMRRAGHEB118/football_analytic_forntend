import PlayerCard from './PlayerCard';

interface Player {
    id: number;
    name: string;
    photo: string;
}

interface PlayerListProps {
    players: Player[];
}

const PlayerList: React.FC<PlayerListProps> = ({ players }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map((player) => (
                <PlayerCard key={player.id} player={player} />
            ))}
        </div>
    );
};

export default PlayerList;
