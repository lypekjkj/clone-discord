import { FaChevronDown } from "react-icons/fa";
import HeaderCategorys from "./HeaderCategorys";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

export default function HeaderChats() {
    return (
        <main className="h-screen w-60 bg-discordchats max-sm:hidden">
            <div className="flex items-center justify-between border-b border-discordservers px-4 hover:bg-discordwhite/5 cursor-pointer">
            <Popover>
                <PopoverTrigger className="flex items-center justify-between w-full h-12">
                    <div>
                        <h1 className="text-discordwhite font-medium text-base">lypekjkj</h1>
                    </div>
                    <div>
                        <FaChevronDown className="text-discordwhite/70 text-sm" />
                    </div>
                </PopoverTrigger>
                <PopoverContent className="bg-discordservers text-discordwhite border-none w-56 m-1">
                    <div className="space-y-2">
                        <h1 className="text-discordwhite/60 text-sm hover:text-discordwhite hover:bg-discordblue py-1 px-1 rounded-sm cursor-pointer transition-colors">Impulso de servidor</h1>
                        <div className="h-[1px] w-full bg-discordwhite/10 mt-2"></div>
                        <h1 className="text-discordblue text-sm hover:text-discordwhite hover:bg-discordblue py-1 px-1 rounded-sm cursor-pointer transition-colors">Convidar pessoas</h1>
                        <h1 className="text-discordwhite/60 text-sm hover:text-discordwhite hover:bg-discordblue py-1 px-1 rounded-sm cursor-pointer transition-colors">Config. do servidor</h1>
                        <h1 className="text-discordwhite/60 text-sm hover:text-discordwhite hover:bg-discordblue py-1 px-1 rounded-sm cursor-pointer transition-colors">Criar canal</h1>
                        <h1 className="text-discordwhite/60 text-sm hover:text-discordwhite hover:bg-discordblue py-1 px-1 rounded-sm cursor-pointer transition-colors">Criar categoria</h1>
                    </div>
                </PopoverContent>
            </Popover>
            </div> 
            <div>
                <HeaderCategorys />
            </div>
        </main>
    )
}