import "../styles/globals.css";
import Sidebar from "../Components/Sidebar";
import Head from "next/head";
import Navbar from "./../Components/Navbar";

function MyApp({ Component, pageProps }) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={prefix + "/favicon.ico"}>
        <title>
          FrontEnd Developer - JavaScript, React, NextJs, Tailwind, SCSS
        </title>
      </Head>
      <div className="grid grid-cols-12 gap-2 md:gap-4 xl:px-48 lg:p-5 md:p-5 md:gap-2">
        <div className="col-span-12 p-4 overflow-hidden text-center bg-gradient-to-l to-gray-100 from-gray-200 md:col-span-5 xl:my-11 xl:px-5 lg:px-2 lg:col-span-4 xl:col-span-3 md:rounded-3xl lg:rounded-3xl">
          <Sidebar />
        </div>
        <div className="col-span-12 overflow-hidden bg-gradient-to-l from-gray-100 to-gray-200 md:col-span-7 xl:my-11 lg:col-span-8 xl:col-span-9 md:rounded-3xl lg:rounded-3xl">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
