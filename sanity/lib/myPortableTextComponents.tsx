import Image from "next/image"
import { urlForImage } from "./image"
import Link from "next/link"

export const myPortableTextComponents = {
    types: {
      image: ({value}:any) => (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image 
            className="object-contain"
            src={urlForImage(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      ),
      callToAction: ({value, isInline}:any) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({children}:any) => <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>,
      number: ({children}:any) => <ol className="mt-lg list-decimal">{children}</ol>,
  
      // Ex. 2: rendering custom lists
      checkmarks: ({children}:any) => <ol className="m-auto text-lg">{children}</ol>,
    },
  
    marks: {
      link: ({children, value}:any) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        // const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
        return (
          <Link 
            href={value.href} 
            // rel={target === '_blank' && 'noindex nofollow'}
            rel={rel}
            className="underline decoration-[#f7ab0a] hover:decoration-black"  
          >
            {children}
          </Link>
        )
      },
    },

    block: {
      // Ex. 1: customizing common block types
      h1: ({children}:any) => <h1 className="text-5xl py-10 font-bold">{children}</h1>,
      h2: ({children}:any) => <h2 className="text-4xl py-10 font-bold">{children}</h2>,
      h3: ({children}:any) => <h3 className="text-3xl py-10 font-bold">{children}</h3>,
      h4: ({children}:any) => <h4 className="text-2xl py-10 font-bold">{children}</h4>,
      blockquote: ({children}:any) => <blockquote className="border-l-[#f7ab0a] border-l-4 pl-5 py-5 my-5">{children}</blockquote>,
  
      // Ex. 2: rendering custom styles
      customHeading: ({children}:any) => (
        <h2 className="text-lg text-primary text-[#f7ab0a]">{children}</h2>
      ),
    },
  }
  
  // const YourComponent = (props) => {
  //   return <PortableText value={props.value} components={myPortableTextComponents} />
  // }