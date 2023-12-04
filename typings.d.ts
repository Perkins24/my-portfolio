export type Base = {
    _id: string
    _rev: string
    _createdAt: string
    _updatedAt: string
    _type: 'post'
  }
  
  interface Posts extends Base {
    comments
    blockTweet: boolean
    publishedAt
    comments
    excerpt: string
    title: string
    description: string
    categories: Category[]
    author: Author
    mainImage: Image
    imageAlt: string
    body: Block[]
    slug: Slug
  }
  
  
interface Author extends Base {
  bio: Block[]
  image: Image
  name: string
  slug: Slug
}


interface Slug {
  current: string
  _type: 'slug'
}

interface Block {
  _key: string
  _type: 'block'
  children: span[]
  markDefs: any[]
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
}

interface Category extends Base {
  description: string
  title: string
}


interface Project extends Base {
  title:string
  date
  place:string
  description:string
  projectType:string
  link
  tags:string
}
