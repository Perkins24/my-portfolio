'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { SocialIcon } from 'react-social-icons'


const NavBar = () => {
  const router = usePathname()

  return (
    <header className='bg-red-600'>
        <div className='container mx-auto flex justify-between'>
          <nav className='flex'>
            <Link href={'/'} 
            className={router === "/" ? "text-white inline-flex items-center my-6 rounded-full px-1 lg:px-3 mr-4 hover:text-green-800 text-2xl lg:text-4xl font-bold cursive tracking-widest" :'inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-2xl lg:text-4xl font-bold cursive tracking-widest'}>
              Wenceslaus
            </Link>
            <Link href='/blog' 
            className={router === "/blog" ? 'text-red-100 bg-red-700 inline-flex items-center my-6 rounded-full px-1 md:px-3 mr-2 lg:mr-4 hover:text-green-800 ':'inline-flex items-center py-3 px-1 md:px-3 mr-2 lg:mr-4 text-red-200 hover:text-green-800 '}>
              Blog Posts
            </Link>
            <Link href={'/project'} 
            className={router === "/project" ? 'text-red-100 bg-red-700 inline-flex items-center my-6 rounded-full px-1 md:px-3 mr-4 hover:text-green-800 ':'inline-flex items-center py-3 px-1 md:px-3 mr-2 lg:mr-4 text-red-200 hover:text-green-800'}>
              Projects
            </Link>
            <Link href={'/about'} 
            className={router === "/about" ? 'text-red-100 bg-red-700 inline-flex items-center my-6 rounded-full px-3 mr-4 hover:text-green-800 ':'inline-flex items-center py-3 px-1 md:px-3 mr-2 lg:mr-4 text-red-200 hover:text-green-800 '}>
              About Me!
            </Link>
          </nav>
          <div className='hidden lg:inline-flex py-3 px-3 my-6'>
            <SocialIcon url='https://www.linkedin.com/in/wenceslaus-obimka-ab5172295/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BqW1%2FGX6iRb29GSNdcGSOeQ%3D%3D' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
            <SocialIcon url='https://twitter.com/WenceHenry1' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
            <SocialIcon url='https://www.instagram.com/official_wence/' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
          </div>
        </div>
    </header>
  )
}

export default NavBar