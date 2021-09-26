import { services } from "../data/data";
import ServiceCard from "../Components/ServiceCard";

const index = () => {
  return (
    <div className="grid grid-cols-1 gap-2 mt-3 lg:gap-4 md:gap-4 md:grid-cols-2 lg:grid-cols-2">
      {services.map((service, key) => (
        <ServiceCard service={service} />
      ))}
    </div>
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
