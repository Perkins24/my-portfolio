'use client'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { postsQuery } from '@/sanity/lib/query'
import Image from 'next/image'
import { Posts } from '@/typings'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Blog = () => {
  const [postData, setPost] = useState<Posts[]>([])
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.fetch(postsQuery)
        setPost(response)
      } catch (error) {
        console.error("error fetching posts: ", error)
      }
    }

    fetchData()
    const refreshInterval = setInterval(fetchData, 5 * 60 * 1000)
    
    return () => clearInterval(refreshInterval)
  }, [])

  return (
    <div className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>Blog Posts Page</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my page of blog posts</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {postData && postData.map(post =>(
          <article key={post._id}>
            <Link href={post.slug.current}>
            <span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400'>
              <Image 
                src={urlForImage(post.mainImage).url()} 
                alt={post.mainImage.alt} 
                width={1200}
                height={800}
                priority
                className='w-full h-full rounded-r object-cover absolute'
              />
              <span className='relative h-full flex justify-end items-end pr-4 pb-4'>
                <h3 className=' text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded'>
                  {post.title}
                </h3>
              </span>
            </span>
            </Link>
          </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog
