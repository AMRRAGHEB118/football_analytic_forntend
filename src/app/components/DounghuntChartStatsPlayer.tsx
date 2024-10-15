import DoughnutChart from "./DounghuntChart";
import Image from "next/image";


interface Stat {
    label: string;
    value: number;
    unit: string;
    color: string;
}

interface StatsProps {
    title: string;
    total: number;
    chartData: Stat[];
    stats: Stat[];
}

type sort = {
    'Goals': string,
    'Assists': string,
    'Penalties': string,
    'Yellow Cards': string,
    'Red Cards': string
}

const sorts: sort = {
    'Goals': 'https://s3-alpha-sig.figma.com/img/91ef/aff9/df89e1dac3f8e1744aac4d93187231af?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VtkuIAmlQYdRC8cYiTcwFmv5k64JyoPpbIMRuZ~WAgo89s3oFfzbJf-9rVucmflVYwDD2MKDQW9C490MjywbT0XZkS5fzlI9MqVtR3hHu3mAlFD18gXWh8IcvfyI3VyfDLcbvHM-2ZQkflIPdEYXJDLcZzoQwMSpBx69IKpPkXExtfq6hVyMqVaLHAQHmQ9KtafH-e9kuxeK5G8RoKQJrcAbKBlKWhhR9cogGE12Vc3pleFKHmOBi~LS-2mFBR6GQBR8UL-gS8F9EQe9UXP7TgC4d-AeJgXehU4MFDlBRFD~aSPzPqTHo0iQ0xMTRLrhidD-7OlublAylfw08a2dUw__',
    'Assists': 'https://s3-alpha-sig.figma.com/img/1d50/e866/436aa916ccb8ae017aa0c1ce8e32886b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CkP2IsKT9oPCIbOqvh~5Xmh1iyj0T74eEj5a5eazrKdlfXPwKh49mhefZZMEyx2BimMIo6435UfcemTe11tR7klG1m0Ecr2twp~m4Z0TS4EE0DQ19mnMzA1vjARp~fXWEHcFOrdpMBlnFCI8cRd2SOdKaz~jYJwTrTxIxW5T1C-51J~me-DB388MT~VqbeLnhYDVIA8Ky8I0MAq9R3r7ilw4rBK6KDiHk3WrrGtt1DHCsatu2u4si2ARdb7R18LBxegPoGO17cDGRy9yugr0sltcjKolXRM1F1ZjJ3YJKavK~1DI-Fw~KXm36NszHOAoixi5l9F~LhiOxdcS1soCIA__',
    'Penalties': 'https://s3-alpha-sig.figma.com/img/dccb/8e9e/cb55c13ee9a1e61c7fff5396825eb529?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WxidgM2HBLb4q5~OyHUNE9gOgWHREPzic7OKeYq2OHiBE5TaFce8s6NhVBqvbA02AKDAR7S3v8lcEIoDMA9QQQogzxZiRby2JOf8WXgyB78k4BaWotKqXiYL5SAf7xyDAxyrkV3jB5iw5NpKdjoDSH6TQut3WaM4bFjJKtyMNpW28VLgkIOG3cfBU8nzByaHvHhjPy-i5LcbTkQ2RGdAefylfqKT9RGfhsLdc4C3kngloekHZYhQBL9-14q6rwvFpCRUPMG6vnxBd5QhB8jMSKDDczLGJUvJNuPIPcDEtMYlfjaxtZiPYChZLrytNxrQOB91iJUiwb-uwDjYI5~TxA__',
    'Yellow Cards': 'https://s3-alpha-sig.figma.com/img/8683/b9b8/9fa176308fb7c1a7be3082e11e4100f1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p3pLcTrL9gq9UntecTlU5YXANCgxG45gHBhK~rV7RFRZRA~gG7bgEies8o7zdEa95Y~tRTnNldrFBgNlNdQdR9QwRFhYCkY3YAmhKrd8jKA47pXBgsSqqbGOfBkX~gj5792JbWDO-eQSDrNBxxN6r8IgkUeqCdci-j5FMYLOLsH0sIAgrkKmczIAg4qdaBiMO54f3ZFPBxJj-GPpMIVR6s08M2O-Ip-n2vkZ2UgctjZd3ZRNRHfhT6mtvNDQfEle7pZgkKMr3nZlbuxF6--X7rgFdpgOsRgOp9aRzTaVbMKavF5uYG-75XWIdD-WwCzBkJ7crDfyQnyc4eGt73PlFg__',
    'Red Cards': 'https://s3-alpha-sig.figma.com/img/7fa0/0dd9/55ee8d54a43458b53995da93692a785b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFs~7m80rxLR56yukQVJh0URf8E8HUNRQ~oyst0FpcbkfOmu3s~DLoYbEQt9pmw0G3uBWSENO9dVtoZsgAuB~O0dym7~pX33ddy2Ht39haEyC8HruST8K0--1pBYDbgefX7ptnEgJxLRDQJtERNhgJ-uGt25RODfz0U12HQE7YxZ0JOt9GhStKGDRw~fXULIBNjO1c6XmW0FHHWBvp-BeNJM-6uky8G2gSYn5c0139DgMy7djfC7KH4X9WbweCsU7ugj3ALXuZLIqjGdN1bUywgKRgHsiynM9kRZOotYFbDdjhUJ0yzdlWfIJKXxX1MvKWYEMY0AYzbtt3TftzbOHA__',
}

const DounghuntChartStatsPlayer = ({ title, total, chartData, stats }: StatsProps) => {
    return (
        <div className="flex h-[180px]">
            <div className="flex h-full w-[100px] bg-primary-500 rounded-l-xl flex-col justify-center items-center">
                <Image
                    src={sorts[title as keyof sort]}
                    alt="statistics logo"
                    width={38}
                    height={36}
                />
                <p>{title}</p>
            </div>
            <div className="bg-secondary-1000 rounded-r-lg w-[325px] h-[180]">
                {/* Title */}

                {/* Content */}
                <div className="flex items-center justify-center h-[180px] w-full">
                    {/* Doughnut Chart */}
                    <div className="w-1/2">
                        <DoughnutChart total={total} title={title} data={chartData} width="180px" height="180px" />
                    </div>

                    <div className="flex flex-col items-center w-1/2 p-2 mr-4">
                        <div className="ml-2 w-full">
                            {stats.map(({ label, value, unit }) => (
                                <div key={label} className="mb-2 flex items-center justify-between w-ful h-[40px] border-primary-500 border rounded-lg">
                                    <div className="flex items-center justify-between rounded pl-4 bg-transparent text-white h-full w-full">
                                        <span style={{ flex: 1, textAlign: 'center' }}>{label}</span>
                                        <div className="bg-primary-500 items-center justify-center rounded-r-md ml-2 text-lg font-light h-full w-1/3 flex flex-col">
                                            <span className="relative text-base font-bold top-2">{value}</span>
                                            <span className="text-base">{unit}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Legend */}
                        <div className="pt-2">
                            {chartData.map(({ label, color }) => (
                                <div key={label} className="flex items-center mb-1 ">
                                    <div className="w-4 h-4 rounded mr-2" style={{ backgroundColor: color }} />
                                    {/* line-height: 16.41px; */}
                                    <span className="text-white text-sm font-light">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Side Stats */}
                </div>
            </div>
        </div>
    );
};

export default DounghuntChartStatsPlayer;
