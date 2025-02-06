import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  //   console.log(data);
  return (
    <div>
      <h3 className="font-semibold mb-3">Dragon News Home</h3>
      <p className="text-sm text-gray-500">
        {news.length} news was found in this category
      </p>
      <div className="space-y-5">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
