import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <h3 className="bg-[#D72050] text-white p-2">Latest</h3>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          consequuntur?
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          consequuntur?
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          consequuntur?
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
