import ListScorers from "@/app/components/PagesComponents/TopScorers/ListScorers";
import SelectLeague from "@/app/components/PagesComponents/TopScorers/SelectLeague";
import SelectSeason from "@/app/components/PagesComponents/TopScorers/SelectSeason";

const TopScorersPage = () => {


    return (
        <div className="flex flex-col lg:pt-8 pt-[90px]">
            <div className="flex flex-wrap justify-center gap-2">
                <div>
                    <SelectLeague />
                </div>
                <div className="flex flex-col md:text-base text-sm text-secondary-100">
                    <SelectSeason />
                </div>
            </div>
            <div className="md:w-10/12 w-11/12 mx-auto">
                <ListScorers />
            </div>
        </div>
    )
}

export default TopScorersPage;