import Image from "next/image";
import { GraduationCap, User, House, Mail, Phone  } from "lucide-react";

export default function Home() {
  return (
        <div className={'bg-gradient-to-r from-blue-200/80 to-rose-200/80 overflow-hidden text-black'}>
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
                                    className='rounded-2xl border-2 border-black/80 shadow-xl/20'
                                />
                            </div>
                            <div className='mx-12 pl-5 col-span-3 bg-white/60 rounded-t-2xl flex items-center gap-3'>
                                 <User className="w-5 h-5 text-black" />Jacob Turnbull</div>
                            <div className='mx-12 pl-5 col-span-3 bg-white/60 flex items-center gap-3'>
                                <GraduationCap className="w-5 h-5 text-black" />BSc (CompSci) | BCom (Finance)</div>
                            <div className='mx-12 pl-5 col-span-3 bg-white/60 flex items-center gap-3'>
                                <House className="w-5 h-5 text-black" />Auckland, New Zealand</div>
                            <div className='mx-12 pl-5 col-span-3 bg-white/60 flex items-center gap-3'>
                                <Mail className="w-5 h-5 text-black" />Jacob.t.turnbull@gmail.com</div>
                            <div className='mx-12 pl-5 col-span-3 bg-white/60 rounded-b-2xl flex items-center shadow-xl/20 gap-3'>
                                <Phone className="w-5 h-5 text-black" />+64 020 4075 9564</div>

                    </div>
                </div>
                <div className="bg-white/60 col-span-2 row-span-1 m-3 rounded-2xl"></div>
                <div className="bg-white/60 col-span-2 row-span-1 m-3 rounded-2xl"></div>
            </div>
        </div>
  );
}
