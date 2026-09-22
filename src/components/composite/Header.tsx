import { Link } from "../ui/Link"

export const Header = () => {
    return (
        <div className="w-screen h-15 bg-white/60 flex items-center justify-between px-5">
                <h1>Jacob&#39;s Portfolio</h1>
                <div className='flex space-x-6 pr-5'>
                    <Link href={'/JacobT_Resume.pdf'} style={"header"}>Extended CV</Link>
                </div>
            </div>
    )
}