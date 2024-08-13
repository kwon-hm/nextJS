import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { NextComponentType } from 'next'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import ISR from './isr'

type GetLayoutFunc = (page: ReactNode) => JSX.Element

type NextComponentWithLayout = NextComponentType & {
  getLayout?: GetLayoutFunc
}


export default function App({ Component, pageProps }: AppProps) {
  const ComponentWithLayout = Component as NextComponentWithLayout
  const getLayout: GetLayoutFunc =
    ComponentWithLayout.getLayout || ((page) => <Layout>{page}</Layout>)

  
  return (
    <>
      {Component === ISR ? (
        <Component {...pageProps} />
      ) : (
        getLayout(<Component {...pageProps} />)
      )}
    </>
  )
}