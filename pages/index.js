import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'

// list of motivational quotes

const quotes = [
  {
    quote: 'The only way to do great work is to love what you do.'
  },
  {
    quote: 'If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.'
  },
  {
    quote: 'People who are crazy enough to think they can change the world, are the ones who do.'
  },
  {
    quote: 'Failure will never overtake me if my determination to succeed is strong enough.'
  },
  {
    quote: 'Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.'
  }
]

function getQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}


export default function Home() {
  const [quote, setQuote] = useState(getQuote()['quote'])

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={quote} />
      </main>

      {/* <Footer /> */}
    </div>
  )
}
