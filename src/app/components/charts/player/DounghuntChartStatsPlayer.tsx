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
    season: string;
}

type Sort = {
    'Goals': string,
    'Assists': string,
    'Penalties': string,
    'Yellow Cards': string,
    'Red Cards': string,
    'Clean Sheet': string,
    'Lineup': string,
}

const sorts: Sort = {
    'Goals': 'https://s3-alpha-sig.figma.com/img/91ef/aff9/df89e1dac3f8e1744aac4d93187231af?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VtkuIAmlQYdRC8cYiTcwFmv5k64JyoPpbIMRuZ~WAgo89s3oFfzbJf-9rVucmflVYwDD2MKDQW9C490MjywbT0XZkS5fzlI9MqVtR3hHu3mAlFD18gXWh8IcvfyI3VyfDLcbvHM-2ZQkflIPdEYXJDLcZzoQwMSpBx69IKpPkXExtfq6hVyMqVaLHAQHmQ9KtafH-e9kuxeK5G8RoKQJrcAbKBlKWhhR9cogGE12Vc3pleFKHmOBi~LS-2mFBR6GQBR8UL-gS8F9EQe9UXP7TgC4d-AeJgXehU4MFDlBRFD~aSPzPqTHo0iQ0xMTRLrhidD-7OlublAylfw08a2dUw__',
    'Assists': 'https://s3-alpha-sig.figma.com/img/1d50/e866/436aa916ccb8ae017aa0c1ce8e32886b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CkP2IsKT9oPCIbOqvh~5Xmh1iyj0T74eEj5a5eazrKdlfXPwKh49mhefZZMEyx2BimMIo6435UfcemTe11tR7klG1m0Ecr2twp~m4Z0TS4EE0DQ19mnMzA1vjARp~fXWEHcFOrdpMBlnFCI8cRd2SOdKaz~jYJwTrTxIxW5T1C-51J~me-DB388MT~VqbeLnhYDVIA8Ky8I0MAq9R3r7ilw4rBK6KDiHk3WrrGtt1DHCsatu2u4si2ARdb7R18LBxegPoGO17cDGRy9yugr0sltcjKolXRM1F1ZjJ3YJKavK~1DI-Fw~KXm36NszHOAoixi5l9F~LhiOxdcS1soCIA__',
    'Penalties': 'https://s3-alpha-sig.figma.com/img/dccb/8e9e/cb55c13ee9a1e61c7fff5396825eb529?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WxidgM2HBLb4q5~OyHUNE9gOgWHREPzic7OKeYq2OHiBE5TaFce8s6NhVBqvbA02AKDAR7S3v8lcEIoDMA9QQQogzxZiRby2JOf8WXgyB78k4BaWotKqXiYL5SAf7xyDAxyrkV3jB5iw5NpKdjoDSH6TQut3WaM4bFjJKtyMNpW28VLgkIOG3cfBU8nzByaHvHhjPy-i5LcbTkQ2RGdAefylfqKT9RGfhsLdc4C3kngloekHZYhQBL9-14q6rwvFpCRUPMG6vnxBd5QhB8jMSKDDczLGJUvJNuPIPcDEtMYlfjaxtZiPYChZLrytNxrQOB91iJUiwb-uwDjYI5~TxA__',
    'Yellow Cards': 'https://s3-alpha-sig.figma.com/img/8683/b9b8/9fa176308fb7c1a7be3082e11e4100f1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p3pLcTrL9gq9UntecTlU5YXANCgxG45gHBhK~rV7RFRZRA~gG7bgEies8o7zdEa95Y~tRTnNldrFBgNlNdQdR9QwRFhYCkY3YAmhKrd8jKA47pXBgsSqqbGOfBkX~gj5792JbWDO-eQSDrNBxxN6r8IgkUeqCdci-j5FMYLOLsH0sIAgrkKmczIAg4qdaBiMO54f3ZFPBxJj-GPpMIVR6s08M2O-Ip-n2vkZ2UgctjZd3ZRNRHfhT6mtvNDQfEle7pZgkKMr3nZlbuxF6--X7rgFdpgOsRgOp9aRzTaVbMKavF5uYG-75XWIdD-WwCzBkJ7crDfyQnyc4eGt73PlFg__',
    'Red Cards': 'https://s3-alpha-sig.figma.com/img/7fa0/0dd9/55ee8d54a43458b53995da93692a785b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFs~7m80rxLR56yukQVJh0URf8E8HUNRQ~oyst0FpcbkfOmu3s~DLoYbEQt9pmw0G3uBWSENO9dVtoZsgAuB~O0dym7~pX33ddy2Ht39haEyC8HruST8K0--1pBYDbgefX7ptnEgJxLRDQJtERNhgJ-uGt25RODfz0U12HQE7YxZ0JOt9GhStKGDRw~fXULIBNjO1c6XmW0FHHWBvp-BeNJM-6uky8G2gSYn5c0139DgMy7djfC7KH4X9WbweCsU7ugj3ALXuZLIqjGdN1bUywgKRgHsiynM9kRZOotYFbDdjhUJ0yzdlWfIJKXxX1MvKWYEMY0AYzbtt3TftzbOHA__',
    'Clean Sheet': 'https://s3-alpha-sig.figma.com/img/ca76/7bf1/ce1abb8235131ca6f1984fc8ccc09135?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CdC9AN0Ym1JeRQ1~wtNbJUKdRntEt1rdDDX4--mOj8nUCfrxxqzcHWdNcH7~50rHliP3Do4InXtbj7Ax5dFJxLO8t7TSscdT772WK3jEi53Dv5VsybjCgg-6P0VJtm9G0Mkv9KG-YAIiBNZKHAwLcbTW7EfNYaZ~-JsA7vlBImt~UVy4DrK0tAedmnxD1f4MD8Pw3fmXxIsYP55qk10VJvPB4v4XuFHzoMBtlp-46jhAU225HkDVGotJoq9ePopgumUL2AIm2Hg0Qaey5oofMRkZe9pZpnhaslf68xR1PqETv7klGiN4iKH-AjQSvVR6gfGqN02jYn~WzNhHs4jcnQ__',
    'Lineup': ''
}

const DounghuntChartStatsPlayer = ({ title, total, chartData, stats, season }: StatsProps) => {
    return (
        <div className="flex h-[135px]">
            <div className="flex font-light h-full w-[70px] text-sm bg-primary-500
            rounded-l-xl flex-col justify-center items-center text-center p-3">
                <Image
                    src={sorts[title as keyof Sort]}
                    alt="statistics logo"
                    width={38}
                    height={36}
                />
                <p>{title}</p>
            </div>
            <div className="bg-secondary-1000 rounded-r-lg w-[220px] h-full">
                {/* Content */}
                <div className="flex items-center justify-center h-full w-full">
                    {/* Doughnut Chart */}
                    <div className="felx-col items-center text-center">
                        <span className="relative top-7 text-slate-400 text-[10px]">{season}</span>
                        <DoughnutChart total={total} title={title} data={chartData} width="110px" height="150px" />
                    </div>

                    <div className="flex flex-col items-center relative top-3 right-4">
                        <div className="w-full">
                            {stats.map(({ label, value, unit }, idx) => (
                                <div key={label} className={`mb-2 flex items-center justify-between w-full h-[34px] ${idx === 0 ? 'border-primary-500' : 'border-[#00ccff]'}  border rounded-lg`}>
                                    <div className="flex items-center rounded bg-transparent text-white h-full w-full">
                                        <span style={{ flex: 1, textIndent: "9px", fontSize: '16px', fontWeight: '500', width: 80 }}>{label}</span>
                                        <div className={`${idx === 0 ? 'bg-primary-500' : 'bg-[#00ccff]'} rounded-r-md font-light h-full w-[39px] flex flex-col text-center`}>
                                            <span className="relative text-sm font-bold w-full">{value}</span>
                                            <span className="relative text-[10px] w-full bottom-1">{unit}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DounghuntChartStatsPlayer;
