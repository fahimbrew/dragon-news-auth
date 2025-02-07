import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-components/RightNavbar";

const NewsDetails = () => {
  const data = useLoaderData();
  //   console.log(data.data[0]);
  const news = data.data[0];
  //   console.log(news);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>
          {/* card starts */}
          <div className="card bg-base-100 shadow-sm">
            <figure className="px-5 pt-5">
              <img src={news.image_url} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news.category_id}`}
                  className="btn btn-primary"
                >
                  All News in this category
                </Link>
              </div>
            </div>
          </div>
          {/* card ends */}
        </div>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
