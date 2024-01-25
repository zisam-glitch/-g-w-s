import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SwiperNavButtons } from "./SwiperNavButton";
import { Autoplay } from 'swiper/modules';
import React, { useEffect, useState } from 'react';
import * as contentful from 'contentful';

const ContentfulFetch = () => {
  const [projects, setProjects] = useState([]);

  const client = contentful.createClient({
    space: "5m3h1k8mc33m",
    accessToken: "bNLL6JrS-qwtgfUmkzy3RL5Go2Hc45pRzjXI1ZRGoRY",
  });

  const fetchProjects = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
      });

      console.log('Contentful response:', response);

      const mappedProjects = mapProjects(response.items);
      console.log('Mapped projects:', mappedProjects);

      setProjects(mappedProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const mapProjects = (projects) => {
    return projects.map((project) => {
      const { title, url, image } = project.fields;
      const imageUrl = image && image.fields.file.url ? image.fields.file.url : '';

      return {
        title,
        url,
        imageUrl,
      };
    });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const ProjectCard = ({ project }) => {
    return (
      <li>
        <div className="cardtab">
          <a href={project.url} >
            <img src={project.imageUrl} alt={project.title} />
          </a>
        </div>
      </li>


    );
  };

  return (
    <div>
      <Swiper
        spaceBetween={50}
        // slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 1500,
        }}
        modules={[Autoplay]}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          968: {
            slidesPerView: 3,
          }
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide>
            <ProjectCard key={index} project={project} />
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>

    </div>
  );
};

export default ContentfulFetch;

