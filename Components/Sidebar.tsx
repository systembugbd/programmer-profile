import { AiFillFilePdf } from "react-icons/ai";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaMedium,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Image from "next/image";

import styles from "./../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div>
      <div>
        <Image
          src="/team/138/b8983c92771.577242aee9382.jpg"
          width="100px"
          height="100px"
          className="border-4 border-purple-700 border-solid rounded-full"
        />
        <h1 className="text-3xl font-bold tracking-wider text-gray-700 font-Kaushan">
          <span className="tracking-wider text-purple-600">Shaheb</span> Ali
        </h1>
      </div>
      <div className="grid grid-cols-1">
        <p className="py-2 tracking-wider text-gray-400">
          {/* {
            sidebar.map((data) => (
              console.log(data)
            ))
          } */}
          Frontend Developer
        </p>
        <a
          href="https://drive.google.com/file/d/17MBfSelKhQcmmE6wZgSvVdUxh5Cs5U6J/view?usp=sharing"
          download="CV_of_Md_Shaheb_Ali.jpg"
          target="_blank"
          className="flex items-center justify-center px-2 py-2 space-x-1 text-center text-gray-100 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:font-bold hover:text-white"
        >
          <GiTie className="text-2xl" />
          <span className="hover:font-bold">View Resume on Web</span>
        </a>
      </div>
      <div className="grid items-center justify-center grid-cols-6 py-5 text-center">
        <a
          href="https://www.youtube.com/channel/UCAr7KlIrRt63_QbF73W98fw/videos"
          target="_blank"
          className="flex justify-center text-3xl text-red-700 transition-all cursor-pointer hover:text-purple-600"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.facebook.com/shaheb.ali.nadim/"
          target="_blank"
          className="flex justify-center text-3xl text-blue-800 transition-all cursor-pointer hover:text-purple-600"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/md_shaheb_ali"
          target="_blank"
          className="flex justify-center text-3xl text-blue-500 transition-all cursor-pointer hover:text-purple-600"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/systembugbd"
          target="_blank"
          className="flex justify-center text-3xl text-gray-600 transition-all cursor-pointer hover:text-purple-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/md-shaheb-ali-wwwdon/"
          target="_blank"
          className="flex justify-center text-3xl text-blue-900 transition-all cursor-pointer hover:text-purple-600"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://medium.com/@wwwdonus"
          target="_blank"
          className="flex justify-center text-3xl transition-all cursor-pointer hover:text-purple-600"
        >
          <FaMedium />
        </a>
      </div>
      <div
        className="px-4 py-4 text-gray-700 bg-gray-300"
        style={{ marginLeft: "-2.5rem", marginRight: "-2.5rem" }}
      >
        <div className="flex justify-center text-center align-center hover:text-purple-600">
          <GoLocation />{" "}
          <a
            href="https://www.google.com/maps/place/Uttara,+Dhaka/@23.8766719,90.3607784,14z/data=!3m1!4b1!4m5!3m4!1s0x3755c5d05e7074dd:0xd1c58803049f00c7!8m2!3d23.8758547!4d90.3795438"
            target="_blank"
          >
            Dhaka, Bangladesh.
          </a>
        </div>
        <div>
          <a
            href="mailto:wwwdonus@gmail.com"
            className="text-gray-700 hover:text-purple-600"
          >
            wwwdonus@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:01725874211" className="hover:text-purple-600">
            01725874211
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center pt-2 text-center align-center">
        <button className="px-4 py-2 my-2 text-gray-100 rounded-full outline-none bg-gradient-to-r from-pink-600 to-purple-600">
          <a href="mailto:wwwdonus@gmail.com">Email Me</a>
        </button>
        <button className="px-4 py-2 my-2 text-gray-100 rounded-full outline-none bg-gradient-to-r from-pink-600 to-purple-600">
          Toogle Theme
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
