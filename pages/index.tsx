import Head from 'next/head'

import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import Header from '@/components/Header'
import About from '@/components/About'
import SocialIcons from '@/components/SocialIcons'
import Video from '@/components/Video'
export default function Home() {
  return (
    <>
      <Head>
        <title>Mountain Travelling</title>
      </Head>
      <div className="h-screen bg-bg-mountains bg-cover font-montserrat text-gray-100">
        <NavBar />
        <div className="flex">
          <SocialIcons />
          <main className="w-1/4">
            <SearchBar />
            <Header />
            <About />
          </main>
          <Video />
        </div>
      </div>
    </>
  )
}
