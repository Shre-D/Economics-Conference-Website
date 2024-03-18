import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {

    const [menuToggle, setMenuToggle] = useState<boolean>(false)

    const handleClick = () => {
        setMenuToggle((state) => {
            return !state
        }
        )
        console.log(menuToggle);
    }

    return (
        <nav className='z-100'>
            <header className="fixed w-full">
                <nav>
                    <div
                        className="flex justify-between py-3 px-4 h-16 bg-slate-300 rounded-b-md"
                    >
                        <a href="/">
                            <img src="Logo.png" width={150} height={150} alt="logo" />
                        </a>
                        <li className="hidden py-2 space-x-4 text-xl lg:visible lg:flex ">
                            <ul>
                                <a className="hover:text-gray-600" href="/">Home</a>
                            </ul>
                            <ul>
                                <a className="hover:text-gray-600" href="/about">About</a>
                            </ul>
                            <ul>
                                <a className="hover:text-gray-600" href="/leadership">Leadership</a>
                            </ul>
                            <ul>
                                <a className="hover:text-gray-600" href="/speakers">Speakers</a>
                            </ul>
                            <ul>
                                <a className="hover:text-gray-600" href="/submissions">Submission</a>
                            </ul>
                            <ul>
                                <a className="hover:text-gray-600" href="/registration">Registration</a>
                            </ul>
                        </li>
                        <div className='flex'>
                            <div>
                                <img src="g20.png" className='opacity-0' width={80} alt="g20" />
                            </div>
                            <div onClick={handleClick} className='lg:hidden p-2 rounded-md cursor-pointer bg-slate-300 hover:bg-slate-200'>
                                <Menu />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {menuToggle? <MenuDisplay/>:<></>}
        </nav>
    )
}

function MenuDisplay() {
    return (
        <div data-aos='fade-out' data-aos-duration='500'>
            <div className=' pt-24 pb-8 right-0 w-[100%] h-[30%] bg-slate-200 justify-center items-center flex flex-col text-[21px] rounded-b-2xl'>
            <li className=' list-none font-thin' data-aos='fade-left'>
                <ul className=''>
                    <a className="hover:text-gray-600 " href="/">Home</a>
                </ul>
                <ul className=''>
                    <a className="hover:text-gray-600" href="/about">About</a>
                </ul>
                <ul className=''>
                    <a className="hover:text-gray-600" href="/leadership">Leadership</a>
                </ul>
                <ul className=''>
                    <a className="hover:text-gray-600" href="/speakers">Speakers</a>
                </ul>
                <ul className=''>
                    <a className="hover:text-gray-600" href="/submissions">Submission</a>
                </ul>
                <ul className=''>
                    <a className="hover:text-gray-600" href="/registration">Registration</a>
                </ul>
            </li>
        </div>
        </div>
        
    )
}