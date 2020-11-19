import React, { useContext, useEffect, useState } from 'react'
import { Route, useLocation, useParams, useRouteMatch } from 'react-router-dom'
import ThemeContext from './ThemeContext'

function Post (props) {

  const [post, setPost] = useState({})
  const theme = useContext(ThemeContext)
  const {id} = useParams()

  const match = useRouteMatch("/post/:id")

  console.log(match)


  // const location = useLocation()
  //
  // console.log((location.pathname === '/post/1') || (location.pathname === '/post/2'))

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => setPost(json))
  }, [id])

  return (
    <article style={{
      border: 'solid 1px', margin: '1em', padding: '1em',
      flex: 3, ...theme
    }}>
      <h1>{post.title}</h1>
      <p>
        {post.body}
      </p>
    </article>
  )
}

export default Post