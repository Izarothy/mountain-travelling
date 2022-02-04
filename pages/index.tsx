import Head from 'next/head'
import NavBar from '@/components/NavBar'
export default function Home() {
  return (
    <>
      <Head>
        <title>Mountain Travelling</title>
      </Head>
      <div className="h-screen bg-bg-mountains bg-cover font-montserrat text-gray-100">
        <NavBar />
      </div>
    </>
  )
}
