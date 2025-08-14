import Image from "next/image";
import { GraduationCap, User, House, Mail, Phone, Star, Code, Layers} from "lucide-react";

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
             <div className={'w-screen grid grid-cols-3 grid-rows-2'}>
                <div className="bg-white/60 col-span-1 row-span-2 m-3 rounded-2xl relative overflow-hidden">
                    <div className="text-[8px] lg:text-[12px] xl:text-base h-screen w-full grid grid-cols-3 grid-rows-24">
                            <div className='col-span-3 row-span-6 md:row-span-11 relative m-2 sm:m-4 md:m-8 lg:mx-12'>
                                <Image
                                    src="/headshot.jpg"
                                    alt="Headshot"
                                    quality={100}
                                    fill
                                    className='rounded-2xl border-3 border-white/60 shadow-xl/20'
                                />
                            </div>
                            <div className='mx-2 sm:mx-4 md:mx-8 lg:mx-12 pl-3 md:pl-5 col-span-3 bg-white/60 rounded-t-2xl flex items-center gap-3'>
                                 <User className="w-3 h-3 lg:w-5 lg:h-5 text-black" />Jacob Turnbull</div>
                            <div className='mx-2 sm:mx-4 md:mx-8 lg:mx-12 pl-3 md:pl-5 col-span-3 bg-white/60 flex items-center gap-3'>
                                <GraduationCap className="w-3 h-3 lg:w-5 lg:h-5 text-black" />BSc (CompSci) | BCom (Finance)</div>
                            <div className=' mx-2 sm:mx-4 md:mx-8 lg:mx-12 pl-3 md:pl-5 col-span-3 bg-white/60 flex items-center gap-3'>
                                <House className="w-3 h-3 lg:w-5 lg:h-5 text-black" />Auckland, New Zealand</div>
                            <div className='mx-2 sm:mx-4 md:mx-8 lg:mx-12 pl-3 md:pl-5 col-span-3 bg-white/60 flex items-center gap-3'>
                                <Mail className="w-3 h-3 lg:w-5 lg:h-5 text-black" />Jacob.t.turnbull@gmail.com</div>
                            <div className='mx-2 sm:mx-4 md:mx-8 lg:mx-12 pl-3 md:pl-5 col-span-3 bg-white/60 rounded-b-2xl flex items-center shadow-xl/20 gap-3'>
                                <Phone className="w-3 h-3 lg:w-5 lg:h-5 text-black" />+64 020 4075 9564</div>

                            <div className='col-span-3 '></div>
                            <div className='col-span-3 mb-5 row-span-8 bg-white/60 rounded-2xl mx-2 sm:mx-4 md:mx-8 lg:mx-12 text-[8px] lg:text-[12px] xl:text-base shadow-xl/20'>
                                <div className='h-full grid grid-cols-1 grid-rows-10'>
                                    <div className='pl-3 md:pl-5 row-span-2 flex items-center gap-3'>
                                        <Star className="w-2 h-2 lg:w-5 lg:h-5 text-black"/>Skills</div>
                                    <div className='pl-3 md:pl-5 row-span-4 flex-col items-center gap-3'>
                                         <div className='flex items-center gap-3'>
                                            <Code className="w-2 h-2 lg:w-5 lg:h-5 text-black" />
                                            <span>Technical Skills</span>
                                         </div>
                                            <div className="w-full flex flex-wrap items-center pt-1 gap-1 overflow-hidden text-[7px] md:text-[8px] xl:text-sm">
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                            </div>
                                        </div>
                                    <div className='pl-3 md:pl-5 row-span-4 flex-col items-center gap-3'>
                                         <div className='flex items-center gap-3'>
                                            <Layers className="w-2 h-2 lg:w-5 lg:h-5 text-black" />
                                            <span>Fundamental Skills</span>
                                          </div>
                                            <div className="w-full flex flex-wrap items-center pt-1 gap-1 overflow-hidden text-[7px] md:text-[8px] xl:text-sm">
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-0.75 py-0.5 bg-white/70 rounded-lg shadow-sm">Python</span>
                                            </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
                <div className="bg-white/60 col-span-2 row-span-1 m-3 mr-7 rounded-2xl"></div>
                <div className="bg-white/60 col-span-2 row-span-1 m-3 mr-7 rounded-2xl"></div>
            </div>
        </div>
  );
}
