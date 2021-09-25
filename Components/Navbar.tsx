import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();
  const router = useRouter();

  const NaveItem: FunctionComponent<{
    activeItem: string;
    setActiveItem: Function;
    route: string;
    name: string;
  }> = ({ activeItem, setActiveItem, route, name }) => {
    return activeItem !== name ? (
      <Link href={route}>
        <a
          className=" hover: hover:text-blue-500"
          onClick={() => setActiveItem(name)}
        >
          {name}
        </a>
      </Link>
    ) : null;
  };

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/resume") setActiveItem("Resume");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/repo") setActiveItem("Repo");
    if (pathname === "/blog") setActiveItem("Blog");
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="flex-row inline pb-2 mb-2 text-2xl text-indigo-500 border-b-2 border-pink-500 lg:flex-row">
        {activeItem}
      </div>
      <div className="flex flex-row items-end justify-between gap-2 pb-2 mb-2 lg:flex-row md:justify-around">
        <NaveItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route="/"
          name="About"
        />
        <NaveItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route="/resume"
          name="Resume"
        />
        <NaveItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route="/projects"
          name="Projects"
        />
        <NaveItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route="/repo"
          name="Repo"
        />

        <NaveItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route="/blog"
          name="Blog"
        />
      </div>
    </div>
  );
};

export default Navbar;
