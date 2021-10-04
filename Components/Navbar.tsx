import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
    if (pathname === prefix + "/") setActiveItem("About");
    if (pathname === prefix + "/resume") setActiveItem("Resume");
    if (pathname === prefix + "/projects") setActiveItem("Projects");
    if (pathname === prefix + "/repo") setActiveItem("Repo");
    if (pathname === prefix + "/blog") setActiveItem("Blog");
  }, []);

  return (
    <div className="flex flex-col p-4 px-8 lg:flex-row lg:justify-between">
      <div className="flex-row inline pb-2 mb-2 text-2xl text-indigo-500 border-b-2 border-pink-500 lg:flex-row">
        {activeItem}
      </div>
      <div className="flex flex-row items-end justify-between gap-2 pb-2 mb-2 font-bold text-gray-600 lg:flex-row md:justify-around">
        <NaveItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route={`${prefix}/`}
          name="About"
        />
        <NaveItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route={`${prefix}/resume`}
          name="Resume"
        />
        <NaveItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route={`${prefix}/projects`}
          name="Projects"
        />
        <NaveItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route={`${prefix}/repo`}
          name="Repo"
        />

        <NaveItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route={`${prefix}/blog`}
          name="Blog"
        />
      </div>
    </div>
  );
};

export default Navbar;
