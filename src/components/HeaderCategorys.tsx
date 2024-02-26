import { FaChevronDown } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { HiHashtag } from "react-icons/hi2";

export default function HeaderCategorys() {
    return (
        <main className="mx-2 cursor-pointer">
            <div className="flex items-center justify-between h-7 mt-2 space-x-1.5">
                <div className="flex items-center space-x-1.5">
                    <FaChevronDown className="text-discordwhite/50 text-[10px]" />
                    <h1 className="text-discordwhite/50 text-[12px] font-medium">CANAIS DE TEXTO</h1>
                </div>
                <div className="flex items-center">
                    <BsPlus className="text-discordwhite/50 text-[20px]" />
                </div>
            </div>
            <div className="space-y-1">
                <div className="flex items-center space-x-2 bg-discordhover px-1 py-1.5 rounded-md transition-colors">
                    <HiHashtag className="text-discordwhite/50 text-[20px]" />
                    <h1 className="text-discordwhite/50 text-[14px] font-medium">geral</h1>
                </div>
                <div className="flex items-center space-x-2 hover:bg-discordhover/50 px-1 py-1.5 rounded-md transition-colors">
                    <HiHashtag className="text-discordwhite/50 text-[20px]" />
                    <h1 className="text-discordwhite/50 text-[14px] font-medium">readme</h1>
                </div>
            </div>
        </main>
    )
}