import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

//Next.js 14じゃstorybook7.xは動かない 今回は13.4.1

export default function Home() {
  return <h1 className="text-3xl text-red-500">hoge</h1>;
}
