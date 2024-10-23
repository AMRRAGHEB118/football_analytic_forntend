import TeamList from '../../components/TeamList';

const teams = [
  { id: 1, name: 'Manchester United', logo: 'https://w7.pngwing.com/pngs/997/289/png-transparent-manchester-united-logo-food-text-sport.png' },
  { id: 2, name: 'Liverpool FC', logo: 'https://i.pinimg.com/736x/21/be/99/21be99ac7ee4579c7718779d5b9e2772.jpg' },
  { id: 3, name: 'Chelsea FC', logo: 'https://seeklogo.com/images/C/chelsea-logo-033014EAFD-seeklogo.com.png' },
  { id: 4, name: 'Arsenal FC', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg' },
  { id: 5, name: 'FC Barcelona', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
  { id: 6, name: 'Real Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
  { id: 7, name: 'Paris Saint-Germain', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg' },
  { id: 8, name: 'Bayern Munich', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_München_logo_%282017%29.svg' },
  { id: 9, name: 'Juventus', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Juventus_FC_2017_logo.svg' },
  { id: 10, name: 'AC Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg' },
  { id: 11, name: 'Manchester City', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg' },
  { id: 12, name: 'Tottenham Hotspur', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg' },
  { id: 13, name: 'Atletico Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg' },
  { id: 14, name: 'Borussia Dortmund', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg' },
  { id: 15, name: 'Juventus', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Juventus_FC_2017_logo.svg' },
];


const TeamsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Teams</h1>
      <TeamList teams={teams} />
    </div>
  );
};

export default TeamsPage;
