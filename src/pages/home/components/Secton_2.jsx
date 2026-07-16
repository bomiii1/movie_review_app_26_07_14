import { Link } from "react-router-dom";
import { W500_URL } from "../../../constants/imgBaseUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Section_2({ data }) {
  return (
    <section className="mb-[100px]">
      <h2 className="text-2xl lg:text-3xl xl:text-4xl mb-8 font-[600]">
        현재상영중
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
        {data.results.map((movie) => (
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
  );
}
