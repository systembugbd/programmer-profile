import { services } from "../data/data";
import ServiceCard from "../Components/ServiceCard";

const index = () => {
  return (
    <>
      <div className="flex-grow px-4 text-left text-gray-500 dark:text-gray-400 ">
        Professional Frontend Developer, I worked for various local and
        multinational IT company. Currently I am working for a multinational IT
        company as a Web Developer for 6Years. I am enthusiastic, hard worker
        and passionate about react, NodeJS with express, mongoose, PassportJS,
        socket.io and many more to work with Frontend and Backend Development.
      </div>
      <div
        className="flex-grow p-4 mt-4 bg-gray-600 dark:bg-gray-900 dark:text-gray-400 lg:rounded-b-xl md:rounded-b-xl"
        style={{ height: "100%" }}
      >
        <h3 className="mb-3 text-xl font-bold tracking-wider text-gray-400">
          What I am doing...
        </h3>
        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((service, key) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default index;

// import { GetServerSidePropsContext, GetStaticPropsContext } from "next";

//getStaticProps get data from static api
// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/profile");
//   const data = await res.json();

//   console.log("Server static", data);
//   return {
//     props: {
//       profile: data,
//     },
//   };
// };

//Get Server side data from api which is change able
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/profile");
//   const data = await res.json();

//   console.log("Server:", data);

//   return {
//     props: {
//       profile: data,
//     },
//   };
// };
