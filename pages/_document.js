import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
      <Html>
        <Head />
          <body className="bg-slate-900 min-h-screen text-white">
            <Main />
            <NextScript />
          </body>
      </Html>
  )
}