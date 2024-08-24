import Link from 'next/link'
import { titleFont } from '@/config/fonts'

export const Footer = () => {
    return (
        <div className='max-w-2xl mx-auto'>
            <footer className="p-4 md:flex md:items-center md:justify-between md:p-0 mt-10 mb-10">
                <Link href={'/'}>
                    <span className={`${titleFont.className} antialiased font-bold`}>CinCout </span>
                    <span> | Technology</span>
                    <span> © {new Date().getFullYear()}</span>
                    <span>  cincout.technology@gmail.com</span>
                </Link>
            </footer>
        </div>

    )
}
