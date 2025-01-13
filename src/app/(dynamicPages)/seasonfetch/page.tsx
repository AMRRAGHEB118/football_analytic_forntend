'use client';

import axios from "axios";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { LoadingSpinner } from "@/app/components/Spinner";


const FetchSeason = () => {
    const [loading, setLoading] = useState({
        request_sent: false,
        loading: false,
        pageLoading: true,
    });
    const [role, setRole] = useState<string>('')
    const [season, setSeason] = useState<string>();
    const [resMessage, setResMessage] = useState<string>();

    const fetchSeason = () => {
        setLoading({
            ...loading,
            loading: true,
            request_sent: true,
        })
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}seasons/fetch/${season}`)
            .then(res => {
                setLoading(prev => ({
                    ...prev,
                    loading: false
                }))
                setResMessage(res.data.message);
            })
            .catch(_ => {
                setResMessage('Error happened while fetching season, Please try again. \n\
                If the problem persists you can contact us')
            })
    }

    useEffect(() => {
        const token = Cookies.get('access_token') || '';
        try {
            const payload: any = jwtDecode(token);
            setRole(payload?.role);
            setLoading({
                ...loading,
                pageLoading: false
            })
        } catch {
            setLoading({
                ...loading,
                pageLoading: false
            })
        }
    }, [role])

    return loading.pageLoading ? (
        <div className="mt-[100px]">
            <LoadingSpinner />
        </div>
    ) :
        role === 'admin' ? (
            <div className="pt-32">
                <div className="
        flex flex-col items-center mx-auto w-[300px] mt-[50px]
        border-solid border-slate-600 border-2 rounded-lg text-lg
        sm:w-[600px] sm:text-2xl p-10
        ">
                    <span className="text-white font-md w-full text-center">Fetch season from third party by its ID</span>
                    <span className="relative top-5 w-full text-center text-white text-sm opacity-60 sm:w-[340px]">
                        Enter the season id of the intended league to fetch teams, players and all relative information about this league
                    </span>
                    <div className="flex flex-col items-center mt-14">
                        <label htmlFor="season_num" className="sm:text-lg text-white">Season id:</label>
                        <input
                            type='number'
                            className="
                        w-[200px] rounded-md appearance-none outline-none
                        ring-0 focus:border-0 border-0 mt-2 appearance-none
                        focus:ring-2 focus:ring-primary-500 duration-150 transition-all
                        sm:w-[300px]
                    "
                            id="season_num"
                            name="season number"
                            onChange={(e) => setSeason(e.target.value)}
                            style={{
                                WebkitAppearance: 'none',
                                MozAppearance: 'textfield',
                            }}
                        />
                        <div className="text-green-500 mt-4 text-sm w-full text-center">
                            {
                                (loading.request_sent && loading.loading) &&
                                <>Fetching season information, this might take a few minutes ...</>
                            }
                            {
                                (loading.request_sent && !loading.loading) &&
                                <>{resMessage}</>
                            }
                        </div>
                        <button
                            className="
                p-2 bg-primary-500 w-full text-white text-base rounded-lg mt-5
                w-[200px] font-medium sm:w-[300px] hover:bg-primary-600"
                            onClick={() => { fetchSeason() }}
                        >Start fetching</button>
                    </div>
                </div>
            </div>
        ) : <div className="text-white text-center text-6xl mt-[100px]">
            401 - UNAUTHORIZED

        </div>


}

export default FetchSeason;
