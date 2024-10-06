import Image from 'next/image';

const TeamCard = () => {
    return (
        <div className="relative w-full mx-auto bg-green-700 text-white rounded-lg overflow-hidden shadow-lg">
            {/* Background image */}
            <div className="absolute inset-0 opacity-5 w-full">
                <Image
                    src="https://images.ctfassets.net/9ec6988xevcz/3fW2Auozx55Iy8Hx2bj0y5/9c51956823260e6926016c7f88b30fdc/dortmund-stadium-1.jpg?w=1200&h=630"
                    alt="Stadium background"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover w-full h-full"
                    quality={50}
                />
            </div>

            {/* Team logo and info */}
            <div className="relative z-10 flex flex-col p-8">
                <div className="flex items-center space-x-4">
                    {/* Team logo */}
                    <Image
                        src="https://icons.iconarchive.com/icons/giannis-zographos/british-football-club/256/Celtic-icon.png"
                        alt="Celtic logo"
                        className="w-24 h-24 rounded-full object-cover border-2 border-white"
                        width={96}
                        height={96}
                    />

                    {/* Team name and location */}
                    <div>
                        <h1 className="text-4xl font-bold">Celtic</h1>
                        <p className="text-lg">Glasgow, United Kingdom</p>
                    </div>
                </div>

                {/* Manager, Arena, Leagues */}
                <div className="mt-4 flex space-x-4">
                    <div>
                        <p className="font-bold">Manager:</p>
                        <p>Brendan Rodgers</p>
                    </div>
                    <div>
                        <p className="font-bold">Arena/Stadium:</p>
                        <p>Celtic Park</p>
                    </div>
                </div>

                <div className="mt-2">
                    <p className="font-bold">Leagues:</p>
                    <p>
                        Scottish Premiership, UEFA Champions League, Scottish Cup, Scottish League Cup
                    </p>
                </div>

                {/* Player Stats */}
                <div className="flex justify-between items-center mt-6 space-x-2">
                    {/* Players Info (adjust flex basis for responsiveness) */}
                    <div className="mb-2 flex items-center justify-between w-ful h-[50px] rounded-lg">
                        <div className="flex items-center justify-between pl-4 bg-secondary-950 text-white h-full w-full rounded-lg">
                            <span style={{ flex: 1, textAlign: 'center' }}>Number of Players</span>
                            <div className="bg-primary-500 items-center justify-center rounded-md ml-2 text-lg font-bold h-full w-1/3 flex flex-col">
                                <span className="text-base">34</span>
                                <span className="text-base">Players</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 flex items-center justify-between w-ful h-[50px] rounded-lg">
                        <div className="flex items-center justify-between pl-4 bg-secondary-950 text-white h-full w-full rounded-lg">
                            <span style={{ flex: 1, textAlign: 'center' }}>Average Age</span>
                            <div className="bg-primary-500 items-center justify-center rounded-md ml-2 text-lg font-bold h-full w-1/3 flex flex-col">
                                <span className="text-base">25.3</span>
                                <span className="text-base">Years</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 flex items-center justify-between w-ful h-[50px] rounded-lg">
                        <div className="flex items-center justify-between pl-4 bg-secondary-950 text-white h-full w-full rounded-lg">
                            <span style={{ flex: 1, textAlign: 'center' }}>Foreign Players</span>
                            <div className="bg-primary-500 items-center justify-center rounded-md ml-2 text-lg font-bold h-full w-1/3 flex flex-col">
                                <span className="text-base">24</span>
                                <span className="text-base">Players</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 flex items-center justify-between w-ful h-[50px] rounded-lg">
                        <div className="flex items-center justify-between pl-4 bg-secondary-950 text-white h-full w-full rounded-lg">
                            <span style={{ flex: 1, textAlign: 'center' }}>National Players</span>
                            <div className="bg-primary-500 items-center justify-center rounded-md ml-2 text-lg font-bold h-full w-1/3 flex flex-col">
                                <span className="text-base">10</span>
                                <span className="text-base">Players</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
