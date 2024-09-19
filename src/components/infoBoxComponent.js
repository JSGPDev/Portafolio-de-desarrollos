import DevInfoComponent from "./devInfoComponent";
import ContactIconsComponent from "./contactComponent";
import ProyectsListComponent from "./proyectsListComponent";

const windows = ["devInfo", "projectsList", "Contact"];

const InfoBoxComponent = ({ currentWindow }) => {
  return (
    <section
      id="Expanded-Info"
      className="section-transparent tall-heigth min-width rigth-aling scroll-true medium-size"
    >
      {currentWindow === windows[0] && <DevInfoComponent />}
      {currentWindow === windows[1] && <ProyectsListComponent />}
      {currentWindow === windows[2] && <ContactIconsComponent />}
    </section>
  );
};

export default InfoBoxComponent;
