import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == 'post']{
    ...,
    author ->,
    categories[] ->,
} | order(_createdAt desc)
`

export const projectQuery = groq`*[_type == 'project']{
    ...,
}
`



// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    ...,
    author ->,
    categories[] ->,
    'comments': *[_type == "comment" && post._ref == ^._id]{
      ...,
    }
  }
  `


// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)]{
    "params": { "slug": slug.current }
  }
`