import { FaChevronDown } from "react-icons/fa";
import HeaderCategorys from "./HeaderCategorys";

export default function HeaderChats() {
    return (
        <main className="h-screen w-60 bg-discordchats">
            <div className="flex h-12 items-center justify-between border-b border-discordservers  px-4">
                <div>
                    <h1 className="text-discordwhite font-medium text-base">lypekjkj</h1>
                </div>
                <div>
                    <FaChevronDown className="text-discordwhite/70 text-sm" />
                </div>
            </div> 
            <div>
                <HeaderCategorys />
            </div>
        </main>
    )
}