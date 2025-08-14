import Image from "next/image";

export default function Home() {
  return (
        <div className={'bg-gradient-to-r from-blue-200/80 to-rose-200/80 overflow-hidden'}>
            <div className="w-screen h-15 bg-white/60 flex items-center justify-between px-5">
                <h1>Jacob's Portfolio</h1>
                <div className='flex space-x-6 pr-5'>
                    <a className="p-2 bg-transparent hover:bg-white/40 rounded-xl">Home</a>
                    <a className="p-2 bg-transparent hover:bg-white/40 rounded-xl">Projects</a>
                    <a className="p-2 bg-transparent hover:bg-white/40 rounded-xl">Contact</a>
                </div>
            </div>
             <div className={'h-screen w-screen grid grid-cols-3 grid-rows-2'}>
                <div className="bg-white/60 col-span-1 row-span-2 m-3 rounded-2xl relative overflow-hidden">
                    <div className="h-screen w-full grid grid-cols-3 grid-rows-24">
                            <div className='col-span-3 row-span-12 relative my-8 mx-12'>
                                <Image
                                    src="/headshot.jpg"
                                    alt="Headshot"
                                    quality={100}
                                    fill
                                    className='rounded-2xl border-2 border-black/80 shadow-2xl/70'
                                />
                            </div>
                            <div className='mx-12 pl-5 col-span-3 bg-white/60 rounded-t-2xl flex items-center'>Jacob Turnbull</div>
                            <div className='mx-12 pl-5 col-span-3 bg-white/60 flex items-center'>Jacob Turnbull</div>
                            <div className='mx-12 pl-5 col-span-3 bg-white/60 flex items-center'>Jacob Turnbull</div>
                            <div className='mx-12 pl-5 col-span-3 bg-white/60 flex items-center'>Jacob Turnbull</div>
                            <div className='mx-12 pl-5 col-span-3 bg-white/60 rounded-b-2xl flex items-center'>Jacob Turnbull</div>
                    </div>
                </div>
                <div className="bg-white/60 col-span-2 row-span-1 m-3 rounded-2xl"></div>
                <div className="bg-white/60 col-span-2 row-span-1 m-3 rounded-2xl"></div>
            </div>
        </div>
  );
}
