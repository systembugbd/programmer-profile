import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/github_repo") setActiveItem("Repository");
    if (pathname === "/blog") setActiveItem("Blog");
  }, []);

  return (
    <div className="flex justify-between">
      <div className="text-2xl text-green-500">{activeItem}</div>
      <div className="flex items-end justify-between gap-2">
        {activeItem !== "About" && (
          <Link href="/">
            <a
              className=" hover: hover:text-blue-500"
              onClick={() => setActiveItem("About")}
            >
              About
            </a>
          </Link>
        )}
        {activeItem !== "Resume" && (
          <Link href="/resume">
            <a
              className=" hover: hover:text-blue-500"
              onClick={() => setActiveItem("Resume")}
            >
              Resume
            </a>
          </Link>
        )}

        {activeItem !== "Projects" && (
          <Link href="/projects">
            <a
              className=" hover: hover:text-blue-500"
              onClick={() => setActiveItem("Projects")}
            >
              Projects
            </a>
          </Link>
        )}

        {activeItem !== "Repository" && (
          <Link href="/github_repo">
            <a
              className=" hover: hover:text-blue-500"
              onClick={() => setActiveItem("Repository")}
            >
              Repository
            </a>
          </Link>
        )}

        {activeItem !== "Blog" && (
          <Link href="/blog">
            <a
              className=" hover: hover:text-blue-500"
              onClick={() => setActiveItem("Blog")}
            >
              Blog
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
