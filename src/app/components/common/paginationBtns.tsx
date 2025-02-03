'use client';

import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { useSearchParams, useRouter } from "next/navigation";

const btnStyle = `flex items-center justify-center sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] rounded-full sm:border-4 border-2 border-primary-900
                  transition duration-300 cursor-pointer hover:bg-primary-900 hover:text-black
                  text-primary-900`;

type Props = {
    total: number
}

const PaginationBtns = ({ total }: Props) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentPage = Number(searchParams.get('page')) || 1;

    console.log(total);

    const handlePageChange = (newPage: number) => {
        if (newPage < 1) return;

        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage.toString());

        router.push(`?${params.toString()}`);
    };

    return (
        <div className="flex items-center gap-5 p-10 relative top-10">
            <div
                title="Previous page"
                className={`${btnStyle} ${currentPage === 1 && 'hidden'}`}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                <FaChevronLeft style={{ width: '60%', height: '60%' }} />
            </div>

            <div
                title="Next page"
                className={`${btnStyle} ${currentPage >= total && 'hidden'}`}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                <FaChevronRight style={{ width: '60%', height: '60%' }} />
            </div>
        </div>
    );
};

export default PaginationBtns;