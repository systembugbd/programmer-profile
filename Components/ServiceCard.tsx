import { FunctionComponent } from "react";
import { MyService } from "../data/type";

const ServiceCard: FunctionComponent<{ service: MyService }> = ({
  service: { Icon, title, disc },
}) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-4 text-white rounded-2xl bg-gradient-to-r from-gray-700 to-gray-800">
      <Icon />
      <h3 className="py-4">{title}</h3>
      <p>{disc}</p>
    </div>
  );
};

export default ServiceCard;
