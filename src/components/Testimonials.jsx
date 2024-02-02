import React from "react";
import { FaStar } from "react-icons/fa6";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const testimonial = [
  {
    name: "Sabo Masties",
    designation: "Founder @ Rolex",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/src/assets/img/author-01.jpg",
    rating: 4,
  },
  {
    name: "Musharof Chowdhury",
    designation: "Founder @ Ayro UI",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/src/assets/img/author-02.jpg",
    rating: 3,
  },

  {
    name: "William Smith",
    designation: "Founder @ Trorex",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/src/assets/img/author-03.jpg",
    rating: 4,
  },

  {
    name: "William Smith",
    designation: "Founder @ Trorex",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/src/assets/img/author-03.jpg",
    rating: 4,
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]"
    >
      <div
        className="container mx-auto"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Testimonials
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                What our Clients Say
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-m-5 px-5">
          <Swiper
            className="common-carousel mb-[40px]"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1199: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {testimonial.map(function (data, i) {
              return (
                <SwiperSlide className="mb-[40px]" key={i}>
                  <div className="rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]">
                    <div className="mb-[18px] flex items-center gap-[2px]">
                      {Array.from({ length: data.rating }, (_, i) => (
                        <FaStar key={i} className="yellow-color" />
                      ))}
                    </div>

                    <p className="mb-6 text-base text-body-color dark:text-dark-6">
                      {data.content}
                    </p>

                    <a href="#" className="flex items-center gap-4">
                      <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                        <img
                          src={data.image}
                          alt="author"
                          className="h-[50px] w-[50px] overflow-hidden rounded-full"
                        />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-dark dark:text-white">
                          {data.name}
                        </h3>
                        <p className="text-xs text-body-secondary">
                          {data.designation}
                        </p>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
