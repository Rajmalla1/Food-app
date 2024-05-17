import Image from "next/image";
import Cart from "./components/Cart/Cart";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Cart />
    </main>
  );
}
