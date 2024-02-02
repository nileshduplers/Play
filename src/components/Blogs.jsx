import React from "react";
import Data from "../Data/blog";

function Blogs() {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Blogs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Our Recent News
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {Data.map(function (data, i) {
            return (
              <div className="w-full px-4 md:w-1/2 lg:w-1/3" key={i}>
                <div className="group mb-10" data-wow-delay=".1s">
                  <div className="mb-8 overflow-hidden rounded-[5px]">
                    <a href="blog-details.html" className="block">
                      <img
                        src={data.image}
                        alt="image"
                        className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                      />
                    </a>
                  </div>
                  <div>
                    <span className="mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white">
                      {data.date}
                    </span>
                    <h3>
                      <a
                        href={data.link}
                        className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        {data.title}
                      </a>
                    </h3>
                    <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                      {data.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
