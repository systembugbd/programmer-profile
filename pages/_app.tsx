import "../styles/globals.css";
import Sidebar from "../Components/Sidebar";
import Head from "next/head";
import Navbar from "./../Components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          FrontEnd Developer - JavaScript, React, NextJs, Tailwind, SCSS
        </title>
      </Head>
      <div className="grid grid-cols-12 gap-6 px-5 my-5 lg:my-14 lg:px-20 xl:px-48">
        <div className="col-span-12 p-4 overflow-hidden text-center bg-gray-300 md:col-span-4 xl:px-5 2xl:px-10 lg:px-5 lg:my-20 lg:col-span-4 xl:col-span-3 rounded-3xl">
          <Sidebar />
        </div>
        <div className="col-span-12 p-4 px-10 text-center bg-gray-300 md:col-span-8 lg:my-20 lg:col-span-8 xl:col-span-9 rounded-3xl">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
