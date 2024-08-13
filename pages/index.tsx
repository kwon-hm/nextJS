import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export async function getServerSideProps(){
    console.log('server')
    return {
      props: {time: new Date().toISOString()}
    }
  }
  
  type Time = {
    time: string
  }
  
  export default function Home({time}: Time) {
    return (
        <main>
        <h1>
          {time}
        </h1>
        <h1>
          <Link href="/csr">CSR 로</Link>
          <br/>
          <Link href="/ssg">SSG 로</Link>
          <br/>
          <Link href="/isr">ISR 로</Link>
        </h1>
      </main>
    )
  }
