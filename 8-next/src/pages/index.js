import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <h1>{process.env.myName}</h1>
      <h2>My Home</h2>
    </>
  )
}

