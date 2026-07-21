import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from "../../api/movieApi";
import Section_1 from "./components/Section_1";
import Loading from "../../components/Loading";
import { W500_URL } from "../../constants/imgBaseUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Section_2 from "./components/Secton_2";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle";

export default function Home() {
  // const [nowData, setNowData] = useState();
  // const [popData, setPopData] = useState();
  // const [topData, setTopData] = useState();
  // const [upcomingData, setUpcomingData] = useState();

  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // const nowPlaying = await getNowPlaying();
        // const popular = await getPopular();
        // const topRated = await getTopRated();
        // const upcoming = await getUpcoming();

        // setNowData(nowPlaying);
        // setPopData(popular);
        // setTopData(topRated);
        // setUpcomingData(upcoming);

        const [nowPlaying, popular, topRated, upcoming] = await Promise.all([
          getNowPlaying(),
          getPopular(),
          getTopRated(),
          getUpcoming(),
        ]);

        setMovieData({
          nowPlaying,
          popular,
          topRated,
          upcoming,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }
  // console.log(movieData?.nowPlaying?.response?.results[0].title);
  // console.log(movieData?.nowPlaying?.response?.results[0].overview);

  // console.log(`현재 상영 영화 : ` + nowData);
  // console.log(`인기 영화 : ` + popData);
  // console.log(`평점 높은 영화 : ` + topData);
  // console.log(`상영 예정 영화 : ` + upcomingData);

  // *예외
  // => try ~ catch
  // => 조건문과 비슷하게 코드나 함수에 오류나 문제점이 발생했을때 핸들링 처리 가능함
  // => if문과 차이점은 if문은 무조건 조건을 작성해야되지만 try는 조건없이 문제점을 잡아낼수 있음
  // => finally는 try catch와 상관없이 마지막에 무조건 실행되는 코드를 작성함

  // const [num, setNum] = useState(0);

  // useEffect(() => {
  //   console.log("랜더링될때마다 실행");
  // });

  // useEffect(() => {
  //   console.log("num값이 변경될때마다 실행");
  // }, [num]);

  // return (
  //   // <>
  //   //   <p>{num}</p>
  //   //   <button
  //   //     onClick={() => setNum((prev) => prev + 1)}
  //   //     className="p-4 bg-gray-300"
  //   //   >
  //   //     +
  //   //   </button>
  //   // </>
  // );
  const nowPlayingData = movieData?.nowPlaying;
  const popularData = movieData?.popular;

  // console.log(movieData?.nowPlaying?.results);
  // console.log(nowPlayingData);

  return (
    <div className="min-h-screen">
      <PageTitle title="Home" />
      {/* <Section_1 data={nowPlayingData.results[0]} /> */}

      <div className="px-[20px] lg:px-[80px] xl:px-[200px] py-[80px] xl:py-[150px]">
        <section>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl mb-8 font-[600]">
            현재 상영중
          </h2>

          {/* con_wrap */}
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            breakpoints={{
              320: {
                spaceBetween: 10,
                slidesPerView: 2.3,
              },
              640: {
                spaceBetween: 15,
                slidesPerView: 3.3,
              },
              1024: {
                spaceBetween: 20,
                slidesPerView: 5.3,
              },
            }}
          >
            {nowPlayingData?.results?.map((movie) => (
              <SwiperSlide>
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="xl:h-[400px]">
                    <img
                      className="w-full h-full object-cover"
                      src={W500_URL + movie.poster_path}
                      alt="포스터"
                    />
                  </div>
                  <h3 className="text-base xl:text-lg mt-[15px] font-[600]">
                    {movie.title}
                  </h3>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>

      <Section_2 data={popularData} />
    </div>
  );
}
