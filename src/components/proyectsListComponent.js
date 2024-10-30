import { useState } from "react";
import useFetchData from "../constants/hooks/UseFetchData";
import ImageComponent from "./imgComponent";
import ImageCarouselComponent from "./imgCarouselComponent";
const ProjectItem = ({
  name,
  imgs,
  video,
  description,
  status,
  languages,
  framework,
  link,
  showDescription: initialShowDescription,
}) => {
  const [showDescription, setShowDescription] = useState(
    initialShowDescription
  );

  return (
    <div className={`project-item ${showDescription ? "floating-box" : ""}`}>
      <p
        className="project-name"
        onClick={() => setShowDescription(!showDescription)}
      >
        {name}
      </p>

      {video && showDescription && (
        <div class="video-container">
          <iframe
            src={video}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}

      {!showDescription && imgs.length <= 0 && (
        <div class="video-container">
          <iframe
            src={video}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}

      {!showDescription && imgs.length == 1 && (
        <ImageComponent
          position="top-center"
          size="medium-size "
          radius="large-radius"
          src={imgs[0].img || "placeholder.webp"}
          alt={imgs[0].imgAlt || "Placeholder"}
        />
      )}

      {!showDescription && imgs.length > 1 && (
        <ImageCarouselComponent images={imgs} />
      )}

      {showDescription && (
        <div className="project-description">
          <p className="project-text">{description}</p>

          <div className="direction-row big-size center-center">
            <div className="section-transparent direction-column medium-size center-text smaller-font-size opaque-font-color">
              <h3>Lenguajes </h3>
              <p>
                {Object.entries(languages).map(([key, language]) =>
                  key > 0 ? ", " + language : language
                )}
              </p>
            </div>
            <div className="section-transparent direction-column medium-size center-text smaller-font-size opaque-font-color">
              <h3>Framework</h3>
              <p>{framework}</p>
            </div>
          </div>
          <div className="center-center section-transparent direction-column big-size center-text smaller-font-size opaque-font-color">
            <h3>Estado</h3>
            <p>{status}</p>
          </div>

          <a
            className="project-link"
            href={`https://${link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar Proyecto
          </a>
        </div>
      )}
    </div>
  );
};

const ProyectsListComponent = () => {
  const { data, error, loading } = useFetchData();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="projects-list">
      {Object.entries(data.projects).map(([key, project]) => (
        <ProjectItem
          key={key}
          name={project.name}
          imgs={project.images}
          video={project.media.videoUrl}
          description={project.description}
          status={project.status}
          languages={project.technologies.languages}
          framework={project.technologies.framework}
          link={project.media.liveUrl}
          showDescription={false}
        />
      ))}
    </div>
  );
};

export default ProyectsListComponent;
