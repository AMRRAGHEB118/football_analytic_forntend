import PlayerList from '../../components/PlayerList';

const players = [
    {
        id: 1,
        name: 'Lionel Messi',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Lionel_Messi.jpg',
    },
    {
        id: 2,
        name: 'Cristiano Ronaldo',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg',
    },
    {
        id: 3,
        name: 'Neymar Jr.',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Neymar_2018.jpg',
    },
    {
        id: 4,
        name: 'Kylian Mbappé',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Kylian_Mbappé_2019.jpg',
    },
    {
        id: 5,
        name: 'Mohamed Salah',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Mohamed_Salah_2020.jpg',
    },
];

const PlayersPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Players</h1>
            <PlayerList players={players} />
        </div>
    );
};

export default PlayersPage;
