import PropTypes from "prop-types";
import { CiBookmark, CiShare1 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

const NewsCard = ({ singleNews }) => {
  console.log(singleNews);
  const { title, author, image_url, details, rating, total_view } = singleNews;
  return (
    <div className="shadow-sm rounded-3xl p-5 ">
      <div className="bg-gray-50 p-5 rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <img className="w-10 rounded-full" src={author.img} alt="" />
            <div>
              <p>{author.name}</p>
              <p className="text-sm">{author.published_date}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <CiBookmark></CiBookmark>
            <CiShare1></CiShare1>
          </div>
        </div>
      </div>
      <h1 className="text-xl font-semibold my-3">{title}</h1>
      {/* card starts */}
      <div className="card bg-base-100">
        <figure>
          <img src={image_url} alt="" />
        </figure>
        <div className="card-body">
          <p>
            {details.slice(0, 150)}...{" "}
            <span className="font-bold text-orange-400">Read more</span>
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
                // defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>
            <p className="text-gray-500">Rating : {rating.number}</p>
          </div>
          <p className="flex items-center gap-2">
            <FaEye /> {total_view}
          </p>
        </div>
      </div>
      {/* card ends */}
    </div>
  );
};

NewsCard.propTypes = {
  singleNews: PropTypes.object,
};
export default NewsCard;
