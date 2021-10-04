import { FunctionComponent } from "react";
import { MyService } from "../data/type";

const ServiceCard: FunctionComponent<{ service: MyService }> = ({
  service: { Icon, title, disc },
}) => {
  const createMarkup = () => {
    return {
      __html: disc,
    };
  };

  return (
    <div className="flex flex-row items-center justify-start px-4 py-4 text-left text-gray-600 md:text-center lg:text-left md:flex-col lg:flex-row md:rounded-2xl lg:rounded-2xl bg-gradient-to-r from-gray-300 to-gray-300">
      <Icon className="text-purple-500 w-14 h-14 md:w-6 md:h-6 lg:w-16 lg:h-16 xl:w-7 xl:h-7 hover:text-purple-500 " />
      <div className="flex flex-col pl-6 md:pl-0 lg:pl-6">
        <h3 className="py-2 font-bold">{title}</h3>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
