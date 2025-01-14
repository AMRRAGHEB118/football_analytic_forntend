'use client';

import axios from "axios";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";
import queryString from 'query-string';
import { useSearchParams } from "next/navigation";
import NewsCard from "@/app/components/mainPage/NewsCard";
import PaginationBtns from "@/app/components/common/paginationBtns";


type News = {
    _id: string,
    title: string,
    img: string,
    url: string,
    date: string,
    time: string
}

type StateType = {
    data: News[],
    loading: boolean,
    error: string | null,
    pages: number
}

const NewsPage = () => {
    const [news, setNews] = useState<StateType>({
        data: [],
        loading: true,
        error: null,
        pages: 0
    });
    const searchParams = useSearchParams();


    useEffect(() => {
        const parsedQuery = queryString.parse(window.location.search);
        const { page } = parsedQuery;
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}news/get-news/${page || 1}`)
            .then(res => {
                setNews({ ...news, data: res.data.data[0].data, pages: res.data.data[0].count,loading: false })
            })
            .catch(error => setNews({ ...news, error, loading: false }))
    }, [searchParams])

    // 2xl:w-[1300px] xl:w-[1100px] lg:w-[900px] md:w-[750px] sm:w-[480px] w-[340px]
    return (
        <div className="flex flex-col w-max items-center m-auto
                        ">
            <div className="w-full py-10">
                <h1 className="text-white font-bold sm:text-[30px]">LATEST FEEDS</h1>
            </div>
            <div className="flex flex-col">
                {/* <div className="flex">
                    <div>
                        
                    </div>
                    <div className="flex flex-col"></div>
                </div> */}
                <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {news.data.map((n: News) => {
                        return (
                            <div key={n._id} className="sm:w-[400px] w-[300px]">
                                <NewsCard date={n.date} title={n.title} img={n.img} time={n.time} url={n.url} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <PaginationBtns total={news.pages}/>
        </div>
    )

}

export default NewsPage;
