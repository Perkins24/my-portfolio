import Image from 'next/image'
import NavBar from './components/NavBar'
import image from '../../public/assets/images/Bgggg.jpg'

export default function Home() {
  return (
    <main 
      // className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <Image 
        src={image} 
        alt='monstera leaf'
        className='absolute object-cover w-full h-full '
      />
      <section className='relative flex justify-center min-h-screen pt-64 px-auto'>
        <h1 className='lg:text-6xl text-5xl text-white font-bold cursive leading-none lg:leading-snug lg:home-name'>
          Hello!. I&apos;m Tijesunumi.
        </h1>
      </section>
    </main>
  )
}
