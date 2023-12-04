'use client'
import { client } from '@/sanity/lib/client'
import { projectQuery } from '@/sanity/lib/query'
import { Project } from '@/typings'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Project = () => {
  const [projectData, setProjectData] = useState<Project[]>([])
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.fetch(projectQuery)
        setProjectData(response)
      } catch (error) {
        console.error("error fetching projects: ", error)
      }
    }

    fetchData()
    const refreshInterval = setInterval(fetchData, 5 * 60 * 1000)

    return () => clearInterval(refreshInterval)
  }, [])
  return (
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>My Projects</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'> 
          Welcome To My Project Page!
        </h2>
        <section className='grid grid-cols-2 gap-8'>
          {projectData && projectData.map(project => (
          <article key={project._id} className='relative rounded-lg shadow-xl bg-white p-16'>
            <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
              <Link 
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {project.title}
              </Link>
            </h3>
            <div className='text-gray-500 text-xs space-x-4'>
              <span>
                <strong className='font-bold'>
                  Finished on
                </strong>:
                {new Date(project.date).toLocaleDateString()}
              </span>
              <span>
                <strong className='font-bold'>
                  Company
                </strong>:
                {project.place}
              </span>
              <span>
                <strong className='font-bold'>
                  Type
                </strong>:
                {project.projectType}

              </span>
              <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                {project.description}
              </p>
              <Link href={project.link} rel='noopener noreferrer' target='_blank' className='text-red-500 font-bold hover:underline hover:text-red-400 text-xl'>
                View the Project{" "}
                <span role='img' aria-label='right pointer' className=''> 👉</span>
              </Link>
              
            </div>
          </article>
          ))}
        </section>
      </section>
    </main>
  )
}

export default Project