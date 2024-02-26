import Chat from "@/components/Chat";
import HeaderChats from "@/components/HeaderChats";
import HeaderServers from "@/components/HeaderServers";

export default function Home() {
  return (
    <main className="flex">
      <HeaderServers />
      <div className="flex">
        <HeaderChats />
      </div>
      <div>
        <Chat />
      </div>
    </main>
  );
}
