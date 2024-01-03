import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-white font-bold text-6xl">Imagem & Ação</h1>
        <button className="mt-64 bg-[#800080] text-white font-bold py-4 px-20 rounded">
          <Link href="/Game">JOGAR</Link>
        </button>
      </div>
    </main>
  );
}
