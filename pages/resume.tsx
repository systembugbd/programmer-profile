import Education from "../Components/Education";
import Skills from "../Components/Skills";
const resume = () => {
  return (
    <div className="grid ">
      <p className="flex-grow px-4 text-left text-gray-500 ">
        Education life like general and technical education in my life was not
        so fun, but I tried to make it enjoyable and i did with my best. I learn
        many things from my higher education with many more valuable and general
        as well as technical knowledge. Seeking a career to utilize my
        knowledge, personal soft skills to gain a comprehensive understanding of
        a reputed organization to take responsibility and contribute
        significantly.
      </p>
      <div className="flex-grow p-4 mt-4 education bg-gradient-to-l from-gray-500 to-gray-600 lg:rounded-b-xl md:rounded-b-xl ">
        <Education />
      </div>
    </div>
  );
};

export default resume;
