// 'use client'
import Image from 'next/image'
import { Posts } from '@/typings'
import { postPathsQuery, postQuery } from '../../../sanity/lib/query'
import { cachedClient, client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import { myPortableTextComponents } from '@/sanity/lib/myPortableTextComponents'

export async function generateStaticParams() {
  const posts = await cachedClient(postPathsQuery)
  return posts
}

export const revalidate = 5 //revalidates after every 60 seconds


export default async function SinglePost ({ params }: { params: any }) {
  
  let singlePost:Posts =  await client.fetch(postQuery, params)

  if (!singlePost) return<div>Loading...</div>
  return (
    <main className='bg-gray-200 min-h-screen p-12'>
      <article className='container shadow-lg mx-auto bg-green-100 rounded-lg'>
        <header className='relative'>
          <div className='absolute h-full w-full flex items-center justify-center p-8'>
            <div className='bg-white bg-opacity-75 rounded p-12'>
              <h1 className='cursive text-3xl lg:text-6xl mb-4'>
                {singlePost.title}
              </h1>
              <div className='flex justify-center text-gray-800'>
                <Image 
                  src={urlForImage(singlePost.author.image).url()}
                  alt={singlePost.author.image.alt}
                  height={400}
                  width={400}
                  className='w-10 h-10 rounded-full'
                />
                <p className='cursive flex items-center pl-2 text-2xl'>
                  {singlePost.author.name}
                </p>
              </div>
            </div>
          </div>
          <Image 
            src={urlForImage(singlePost.mainImage).url()}
            alt={singlePost.mainImage.alt}
            width={400}
            height={100}
            className='w-full object-cover rounded-t'
          />
        </header>
        <div className='px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full'>
          <PortableText
            value={singlePost.body}
            components={myPortableTextComponents}
          />
        </div>
      </article>
    </main>
  )
}

