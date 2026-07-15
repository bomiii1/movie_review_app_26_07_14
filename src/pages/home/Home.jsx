import { useEffect, useState } from "react";
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from "../../api/movieApi";

export default function Home() {
  // const [nowData, setNowData] = useState();
  // const [popData, setPopData] = useState();
  // const [topData, setTopData] = useState();
  // const [upcomingData, setUpcomingData] = useState();

  const [movieData, setMovieData] = useState({});

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
      }
    })();
  }, []);

  console.log(movieData);

  // console.log(`현재 상영 영화 : ` + nowData);
  // console.log(`인기 영화 : ` + popData);
  // console.log(`평점 높은 영화 : ` + topData);
  // console.log(`상영 예정 영화 : ` + upcomingData);

  // *예외
  // => try ~ catch
  // => 조건문과 비슷하게 코드나 함수에 오류나 문제점이 발생했을때 핸들링 처리 가능함
  // => if문과 차이점은 if문은 무조건 조건을 작성해야되지만 try는 조건없이 문제점을 잡아낼수 있음

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

  return <div>home</div>;
}
