import ImageComponent from "./imgComponent";
import useFetchData from "../constants/hooks/UseFetchData";

const DevInfoComponent = () => {
  const { data, error, loading } = useFetchData();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <ImageComponent
        position="top-center"
        size="small-size"
        radius="large-radius"
        src={data.devInfo.image || "placeholder.webp"}
        alt={data.devInfo.name || "Placeholder"}
      />

      <div className="top-center direction-column">
        <h1 className="top-center large-font-size">
          {data.devInfo.name || "Juan Sebastian Gonzalez"}
        </h1>
        <h3 className="center-center smaller-font-size">
          {data.devInfo.jobTitle || "Desarrollador Junior FullStack"}
        </h3>
      </div>

      <div className="floating-box small-padding sixth-size flex-center direction-row bottom-center">
        <p className="smaller-font-size opaque-font-color center-text">
          {data.devInfo.introduction}
        </p>
      </div>

      <div className="direction-row bottomer-center big-size flex-center">
        <p className="medium-size fifty-percent-font-size left-aling-text">
          <a href={data.links.universityLink || "#"} target="_blank">
            {data.devInfo.university || "Universidad de San Buenaventura"}
          </a>
        </p>
        <p>|</p>
        <p className="medium-size fifty-percent-font-size rigth-aling-text">
          {data.devInfo.degree || "Tecnologo en Desarrollo de software"}
        </p>
      </div>
    </>
  );
};

export default DevInfoComponent;
