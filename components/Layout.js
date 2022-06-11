import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Ecommerce' : 'Ecommerce Site'}</title>
        <meta name="description" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between px-4 shadow-md items-center">
            <Link href="/">
              <a className="text-lg font-bold">Ecommerce</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="px-4">Cart</a>
              </Link>
              <Link href="/login">
                <a className="px-4">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4"> {children} </main>
        <footer className="flex h-10 justify-center item-center shadow-inner">
          Copyright @2022
        </footer>
      </div>
    </>
  );
}
