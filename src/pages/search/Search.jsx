import { SearchCheck } from "lucide-react";
import { getSearch } from "../../api/movieApi";
import PageTitle from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";
import { useState } from "react";
import { NO_IMG, W500_URL } from "../../constants/imgBaseUrl";
import Movie from "../movie/Movie";
import { Link } from "react-router-dom";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);

  useScrollTop();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!keyword.trim()) return;
    // trim : 글자 앞뒤 여백을 제외시켜줌

    const searchData = await getSearch(keyword);
    setData(searchData.results);
  };

  // console.log(data);

  return (
    <div className="min-h-screen mt-30 px-[20px] lg:px-[80px] xl:px-[200px]">
      <PageTitle title={"검색"} />
      <form onSubmit={onSubmit} className="flex justify-between gap-3 relative">
        <input
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full px-5 py-3 bg-white/10 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition rounded-lg"
          type="text"
          placeholder="영화를 검색해보세요."
        />

        <div className="absolute top-[10px] right-[10px] opacity-50 stroke-1">
          <SearchCheck />
        </div>
      </form>

      <div>
        {data.length > 0 ? (
          <div className="mt-[100px] grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`} className="group">
                <div className="h-[500px] overflow-hidden rounded-lg">
                  <img
                    src={
                      movie.poster_path ? W500_URL + movie.poster_path : NO_IMG
                    }
                    alt={movie.title}
                  />
                </div>

                <h3 className="mt-2 font-semibold">{movie.title}</h3>
              </Link>
            ))}
          </div>
        ) : (
          <div className="h-[500px] flex justify-center items-center">
            {" "}
            검색 결과가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
