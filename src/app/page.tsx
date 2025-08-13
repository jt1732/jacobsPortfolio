import Image from "next/image";

export default function Home() {
  return (
        <div className={'bg-gradient-to-r from-blue-300/80 to-rose-300/80 overflow-hidden'}>
            <div className="w-screen h-15 bg-white/50 flex items-center justify-between px-5">
                <h1>Jacob's Portfolio</h1>
                <div className='flex space-x-6 pr-5'>
                    <a className="p-2 bg-transparent hover:bg-white/40 rounded-xl">Home</a>
                    <a className="p-2 bg-transparent hover:bg-white/40 rounded-xl">Projects</a>
                    <a className="p-2 bg-transparent hover:bg-white/40 rounded-xl">Contact</a>
                </div>
            </div>
             <div className={'h-screen w-screen grid grid-cols-3 grid-rows-2'}>
                <div className="bg-white/50 col-span-1 row-span-2 m-3 rounded-2xl relative overflow-hidden">
                    <div className="h-screen w-full grid grid-cols-3 grid-rows-3">
                            <div className='col-span-3 row-span-1 relative mt-4 mx-10'>
                                <Image
                                    src="/headshot.jpg"
                                    alt="Headshot"
                                    width={560}
                                    height={560}
                                    quality={100}
                                    className='rounded-2xl'
                                />
                            </div>
                    </div>
                </div>
                <div className="bg-white/50 col-span-2 row-span-1 m-3 rounded-2xl"></div>
                <div className="bg-white/50 col-span-2 row-span-1 m-3 rounded-2xl"></div>
            </div>
        </div>
  );
}
