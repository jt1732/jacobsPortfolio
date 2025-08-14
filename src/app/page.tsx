import Image from "next/image";
import { GraduationCap, User, House, Mail, Phone, Star, Code, Layers, Pen, FolderKanban, HardHat } from "lucide-react";

export default function Home() {
  return (
        <div className={'bg-gradient-to-r from-blue-200/80 to-rose-200/80 overflow-hidden text-black'}>
            <div className="w-screen h-15 bg-white/60 flex items-center justify-between px-5">
                <h1>Jacob&#39;s Portfolio</h1>
                <div className='flex space-x-6 pr-5'>
                    <a className="p-2 bg-transparent hover:bg-white/40 rounded-xl">Home</a>
                    <a className="p-2 bg-transparent hover:bg-white/40 rounded-xl">Projects</a>
                    <a className="p-2 bg-transparent hover:bg-white/40 rounded-xl">Contact</a>
                </div>
            </div>
             <div className={'min-h-screen w-screen grid grid-cols-1 lg:grid-cols-3 grid-rows-[auto_auto_auto] lg:grid-rows-[auto_auto_auto_auto_auto]'}>
                <div className="bg-white/60 col-span-1 row-span-2 lg:row-span-6 rounded-2xl relative overflow-hidden mr-7 lg:mr-0 m-3 ">

                    <div className="text-base w-full grid grid-cols-1 grid-rows-24">
                            <div className='
                            col-span-1 relative min-h-fit
                            row-span-7 md:row-span-12 lg:row-span-8 xl:row-span-10
                            mx-12 my-10 sm:mx-25 md:mx-30 lg:mx-8 xl:mx-12 lg:my-20 xl:my-10
                            '>
                                <Image
                                    src="/headshot.jpg"
                                    alt="Headshot"
                                    quality={100}

                                    fill
                                    className='rounded-2xl border-3 border-white/60 shadow-xl/20'
                                />
                            </div>
                            <div className='mx-4 md:mx-8 lg:mx-12 pl-3 md:pl-5 col-span-3 bg-white/60 rounded-t-2xl flex items-center gap-3'>
                                 <User className="w-3 h-3 lg:w-5 lg:h-5 text-black" />Jacob Turnbull</div>
                            <div className='mx-4 md:mx-8 lg:mx-12 pl-3 md:pl-5 col-span-3 bg-white/60 flex items-center gap-3'>
                                <GraduationCap className="w-3 h-3 lg:w-5 lg:h-5 text-black" />BSc (CompSci) | BCom (Finance)</div>
                            <div className='mx-4 md:mx-8 lg:mx-12 pl-3 md:pl-5 col-span-3 bg-white/60 flex items-center gap-3'>
                                <House className="w-3 h-3 lg:w-5 lg:h-5 text-black" />Auckland, New Zealand</div>
                            <div className='mx-4 md:mx-8 lg:mx-12 pl-3 md:pl-5 col-span-3 bg-white/60 flex items-center gap-3'>
                                <Mail className="w-3 h-3 lg:w-5 lg:h-5 text-black" />Jacob.t.turnbull@gmail.com</div>
                            <div className='mx-4 md:mx-8 lg:mx-12 pl-3 md:pl-5 col-span-3 bg-white/60 rounded-b-2xl flex items-center shadow-xl/20 gap-3'>
                                <Phone className="w-3 h-3 lg:w-5 lg:h-5 text-black" />+64 020 4075 9564</div>

                            <div className='col-span-3 '></div>
                            <div className='col-span-3 mb-5 row-span-8 bg-white/60 rounded-2xl mx-4 md:mx-8 lg:mx-12 text-lg shadow-xl/20'>
                                <div className='h-full grid grid-cols-1 grid-rows-10'>
                                    <div className='px-5 row-span-2 flex items-center gap-3'>
                                        <Star className="w-5 h-5 text-black"/>Skills</div>
                                    <div className='px-5 row-span-4 flex-col items-center gap-3'>
                                         <div className='flex items-center gap-3'>
                                            <Code className="w-5 h-5 text-black" />
                                            <span>Technical Skills</span>
                                         </div>
                                            <div className="w-full flex flex-wrap items-center pt-1 gap-2 overflow-hidden">
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">Python</span>
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">Scikit-Learn</span>
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">Tkinter</span>
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">Next.js</span>
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">TypeScript</span>
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">TailwindCss</span>
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">Java</span>
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">Html</span>
                                            </div>
                                        </div>
                                    <div className='px-5 pb-5 row-span-4 flex-col items-center gap-2'>
                                         <div className='flex items-center gap-3'>
                                            <Layers className="w-5 h-5 text-black" />
                                            <span>Fundamental Skills</span>
                                          </div>
                                            <div className="w-full flex flex-wrap items-center pt-1 gap-2 overflow-hidden">
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">Motivation</span>
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">Adaptability</span>
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">Enthusiasm</span>
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">Problem-solving</span>
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">Self-learning</span>
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">Communication</span>
                                                <span className="px-1.5 py-1 bg-white/70 rounded-lg shadow-sm">Curiosity</span>
                                            </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
                <div className="bg-white/60 col-span-2 row-span-1 m-3 mr-7 rounded-2xl p-10 h-min">
                    <div className="bg-white/60 rounded-2xl w-full">
                        <div className='flex gap-3 p-5' ><Pen className="w-5 h-5 text-black"/>About Me</div>
                        <div className='flex gap-3 p-5'>
                            I’m Jacob Turnbull, an aspiring software engineer and AI/ML enthusiast passionate about tackling challenges through creative, hands-on projects. Currently studying a conjoint Bachelor of Science in Computer Science and Bachelor of Commerce in Finance at the University of Auckland, I thrive in independent and collaborative environments, always seeking opportunities to expand my skills and capabilities.
                            My technical experience spans Python, JavaScript, TypeScript, and Java, with strong proficiency in frameworks such as Next.js, React, Bootstrap, and machine learning libraries including Scikit-Learn, Pandas, and Matplotlib. I’ve built projects ranging from a high-accuracy heart disease risk prediction tool with a Tkinter-based graphical interface to a responsive full-stack web platform for managing school and community clubs. These projects showcase my ability to move seamlessly between front-end and back-end development while delivering practical, user-focused solutions.
                            I’m highly motivated, adaptable, and resilient—whether it’s independently learning advanced concepts, meeting demanding production targets in manufacturing, or delivering professional service in retail environments. My problem-solving approach is driven by curiosity, persistence, and a desire to understand the “why” behind every challenge, ensuring that solutions are functional, meaningful, and efficient.
                            Beyond technology, I value fitness, discipline, and personal growth. I’m training to represent New Zealand in powerlifting in 2026. I draw on lessons from rugby, hiking, and teamwork to bring energy, focus, and collaboration to every project I take on.
                        </div>
                    </div>
                </div>


                <div className="bg-white/60 col-span-2 row-span-1 m-3 mr-7 rounded-2xl h-auto">
                    <div className='grid grid-cols-2 grid-rows-2'>
                        <div className='col-span-1 row-span-2 my-5 ml-5 py-5 pl-5 bg-white/60 rounded-l-xl'>
                            <div className='flex gap-3'><FolderKanban className="w-5 h-5 text-black"/>Projects</div>
                        </div>
                        <div className='col-span-1 row-span-2 my-5 mr-5 py-5 pl-5 bg-white/60 rounded-r-xl'>
                            <div className='flex gap-3'><HardHat className="w-5 h-5 text-black"/>Work Experience</div>
                            <div className='pt-5'>
                                <div className='flex justify-between pr-5'>
                                    <span>Professional Sales Assistant</span>
                                    <span>Wairau Valley, Auckland</span>
                                </div>
                                <div className='flex justify-between pr-5'>
                                    <span>Elite Fitness</span>
                                    <span>2025 - Current</span>
                                </div>
                                <div className='pl-10 indent-[-1.4rem]'>
                                    <li>Provided friendly and professional customer service by assisting with queries and ensuring a positive in-store experience</li>
                                    <li>Resolved customer issues promptly and effectively, maintaining a high standard of professionalism</li>
                                    <li>Assisted in assembling and delivering purchased products, ensuring high-quality and efficient service</li>
                                </div>
                            </div>
                            <div className='pt-10'>
                                <div className='flex justify-between pr-5'>
                                    <span>General Hand</span>
                                    <span>Katikati, Bay Of Plenty</span>
                                </div>
                                <div className='flex justify-between pr-5'>
                                    <span>Claymark Limited</span>
                                    <span>2022 - 2025</span>
                                </div>
                                <div className='pl-10 indent-[-1.4rem]'>
                                    <li>Assisted in the manufacturing and production of Claymark clear pine</li>
                                    <li>Operated production machines and hand tools</li>
                                    <li>Performed grading processes to assess product quality and meet company standards</li>
                                    <li>Engaged in physical labor and teamwork to enhance production efficiency</li>
                                </div>
                            </div>
                            <div className='pt-10'>
                                <div className='flex justify-between pr-5'>
                                    <span>Shop Hand</span>
                                    <span>Waihi Beach, Bay Of Plenty</span>
                                </div>
                                <div className='flex justify-between pr-5'>
                                    <span>Wilson Road Fish Shop</span>
                                    <span>2021 - 2023</span>
                                </div>
                                <div className='pl-10 indent-[-1.4rem]'>
                                    <li>Processed customer orders efficiently while delivering excellent customer service</li>
                                    <li>Prepared and cooked food to meet quality and safety standards</li>
                                    <li>Packaged food and ensured cleanliness and organization in both the kitchen and store</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
