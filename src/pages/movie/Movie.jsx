import { Helmet } from "react-helmet-async";
import { getDetail } from "../../api/movieApi";
import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import Loading from "../../components/Loading";
import { ORIGINAL_URL } from "../../constants/imgBaseUrl";
import { useParams } from "react-router-dom";
import { useScrollTop } from "../../lib/useScrollTop";

export default function Movie() {
  const { id } = useParams();
  // =>url의 매개변수 값을 객체로 반환
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useScrollTop();

  // console.log(id);

  useEffect(() => {
    (async () => {
      try {
        const detailData = await getDetail(id);
        setData(detailData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  // console.log(data);

  return (
    <div className=" flex justify-center items-center">
      <PageTitle title={data.response.title} />

      <div className="w-[1200px] h-[800px]  my-[100px] flex items-center p-20 gap-[80px]">
        <div className="w-1/2 bg-gray-400">
          <img
            src={ORIGINAL_URL + data.response.poster_path}
            alt="영화이미지"
          />
        </div>
        <div className="w-1/2">
          <h3 className="font-bold text-4xl">{data.response.title}</h3>
          {data.response.genres.map((genre) => (
            <h5 className="flex gap-[5px]" key={genre.id}>
              {genre.name}
            </h5>
          ))}
          <p className="text-gray-400 text-[12px] my-[30px]">
            {data.response.overview}
          </p>
          <h5>총 {data.response.runtime}분</h5>
          <div className="flex gap-5 mt-[50px]">
            <h5>{data.response.release_date}</h5>
            <h5>❤ {data.response.vote_average}/10.0</h5>
          </div>
        </div>
        <h3></h3>
      </div>
    </div>
  );
  console.log(data.response);
}
