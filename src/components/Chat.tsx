import { BsPlus } from "react-icons/bs";

export default function Chat() {
    return (
        <main className="fixed bottom-0 w-full">
            <div className="bg-discordchat py-1 m-3 rounded-lg flex items-center">
                <BsPlus className="text-discordchat bg-discordwhite/40 rounded-full ml-4 text-[28px] hover:bg-discordwhite/70 transition-colors cursor-pointer" />
                <input type="text" placeholder="Conversar em #geral" className="ml-2 p-2 w-full bg-discordchat rounded-md outline-none text-discordwhite/60 placeholder-discordwhite/60" />
            </div>
        </main>
    )
}