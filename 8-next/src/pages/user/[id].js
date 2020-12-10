import Link from 'next/link'
import axios from 'axios'
import Error from '../_error'

export default function User({user = {}, statusCode}) {

  if (statusCode) {
    return <Error statusCode={statusCode} />
  }

  return (
    <div>
      Name: {user.name}
      <p>
        Mail: {user.email}
      </p>

      <hr/>

      <Link href={"/user"}>
        <a>
          Return to list
        </a>
      </Link>
    </div>
  )
}

export async function getStaticPaths(context) {
  // const users = [
  //   {params: {id: '1'}},
  //   {params: {id: '2'}},
  //   {params: {id: '3'}},
  // ]
  // console.log("My Context =======> ", context)
  const {data: users} = await axios('https://jsonplaceholder.typicode.com/users')

  users.length = 5

  return {
    paths: users.map(user => ({params: {id: `${user.id}`}})),
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const response = await axios(`https://jsonplaceholder.typicode.com/users/${params.id}`).catch(err => console.log(err))

  const user = response?.data
  // console.log('My user Id: ', user.id)

  const statusCode = user ? false : 404

  return {
    props: {
      user,
      statusCode
    },
    revalidate: 5
  }
}