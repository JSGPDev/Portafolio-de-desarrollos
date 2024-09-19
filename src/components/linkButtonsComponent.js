import useFetchData from "../constants/hooks/UseFetchData";

import IconComponent from "./iconComponent";

const LinkButtonsComponent = () => {
  const { data, error, loading } = useFetchData();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="floating-box small-padding sixth-size flex-center direction-row bottom-center">
      <div className="third-size center-center flex-center direction-column">
        <IconComponent
          icon="GitHub"
          position="center-right"
          size="small-size"
          linkRedirect={data.links.github || "#"}
        />
      </div>

      <div className="third-size center-center flex-center direction-column">
        <IconComponent
          icon="FaceBook"
          position="center-center"
          size="small-size"
          linkRedirect={data.links.facebook || "#"}
        />
        <IconComponent
          icon="WhatsApp"
          position="center-center"
          size="small-size"
          linkRedirect={data.links.whatsapp || "#"}
        />
        <IconComponent
          icon="Instagram"
          position="center-center"
          size="small-size"
          linkRedirect={data.links.instagram || "#"}
        />
      </div>

      <div className="third-size center-center flex-center direction-column">
        <IconComponent
          icon="Linkedin"
          position="center-left"
          size="small-size"
          linkRedirect={data.links.linkedin || "#"}
        />
      </div>
    </div>
  );
};

export default LinkButtonsComponent;
