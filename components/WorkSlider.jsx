import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Certificate 1",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+1",
          link: "https://example.com/certificate1",
        },
        {
          title: "Certificate 2",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+2",
          link: "https://example.com/certificate2",
        },
        {
          title: "Certificate 3",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+3",
          link: "https://example.com/certificate3",
        },
        {
          title: "Certificate 4",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+4",
          link: "https://example.com/certificate4",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 5",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+5",
          link: "https://example.com/certificate5",
        },
        {
          title: "Certificate 6",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+6",
          link: "https://example.com/certificate6",
        },
        {
          title: "Certificate 7",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+7",
          link: "https://example.com/certificate7",
        },
        {
          title: "Certificate 8",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+8",
          link: "https://example.com/certificate8",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 9",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+9",
          link: "https://example.com/certificate9",
        },
        {
          title: "Certificate 10",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+10",
          link: "https://example.com/certificate10",
        },
        {
          title: "Certificate 11",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+11",
          link: "https://example.com/certificate11",
        },
        {
          title: "Certificate 12",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+12",
          link: "https://example.com/certificate12",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 13",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+13",
          link: "https://example.com/certificate13",
        },
        {
          title: "Certificate 14",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+14",
          link: "https://example.com/certificate14",
        },
        {
          title: "Certificate 15",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+15",
          link: "https://example.com/certificate15",
        },
        {
          title: "Certificate 16",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+16",
          link: "https://example.com/certificate16",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 17",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+17",
          link: "https://example.com/certificate17",
        },
        {
          title: "Certificate 18",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+18",
          link: "https://example.com/certificate18",
        },
        {
          title: "Certificate 19",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+19",
          link: "https://example.com/certificate19",
        },
        {
          title: "Certificate 20",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+20",
          link: "https://example.com/certificate20",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 21",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+21",
          link: "https://example.com/certificate21",
        },
        {
          title: "Certificate 22",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+22",
          link: "https://example.com/certificate22",
        },
        {
          title: "Certificate 23",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+23",
          link: "https://example.com/certificate23",
        },
        {
          title: "Certificate 24",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+24",
          link: "https://example.com/certificate24",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 25",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+25",
          link: "https://example.com/certificate25",
        },
        {
          title: "Certificate 26",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+26",
          link: "https://example.com/certificate26",
        },
        {
          title: "Certificate 27",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+27",
          link: "https://example.com/certificate27",
        },
        {
          title: "Certificate 28",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+28",
          link: "https://example.com/certificate28",
        },
      ],
    },
    {
      images: [
        {
          title: "Certificate 29",
          path: "https://via.placeholder.com/500x300.png?text=Certificate+29",
          link: "https://example.com/certificate29",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">Click here</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        to Zoom
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
