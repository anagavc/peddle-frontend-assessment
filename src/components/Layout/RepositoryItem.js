import { Link } from "react-router-dom";
import { Paragraph } from "../UI/FontStyles";
import { differenceInDays } from "date-fns";

const RepositoryItem = ({ item }) => {
  return (
    <div
      key={item.full_name}
      className="w-full flex flex-col lg:flex-row items-center lg:space-x-6 rounded  p-6 lg:p-8 backdrop-filter backdrop-blur-xl bg-[#7F1E7B]   bg-opacity-20 "
    >
      <div className="w-full lg:w-48 h-full rounded bg-white p-4">
        <img src={item.owner.avatar_url} alt="name" className="w-full" />
      </div>
      <div className="flex flex-col justify-between h-full space-y-4 lg:space-y-6 w-full mt-4 lg:mt-0">
        <Link
          to={item.owner.html_url}
          className="text-lg font-bold lg:text-2xl font-heading  text-white hover:text-pry-200 transition duration-300"
        >
          {item.owner.login}
        </Link>
        <Paragraph text={item.description} />
        <div className="flex flex-col lg:flex-row gap-4 lg:space-x-4 items-center  w-full ">
          <div className="h-10 p-6  flex justify-center items-center rounded bg-pry-200 lg:w-2/6 w-full">
            <p className="text-base  text-white font-heading font-bold text-justify">
              Stars: {item.stargazers_count}
            </p>
          </div>
          <div className="h-10 p-6  flex justify-center items-center rounded bg-pry-200 lg:w-2/6 w-full">
            <p className="text-base  text-white font-heading font-bold text-justify">
              Issues: {item.open_issues_count}
            </p>
          </div>
          <p className="text-base  text-white font-heading text-justify w-full">
            Submitted {differenceInDays(new Date(), new Date(item.created_at))}{" "}
            days ago by <span className="font-bold">{item.owner.login}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RepositoryItem;
