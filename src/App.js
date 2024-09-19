import { useState } from "react";
import InfoBoxComponent from "./components/infoBoxComponent";
import ControlButtonComponent from "./components/controlButtonComponent";

function App() {
  const [currentWindow, setCurrentWindow] = useState("devInfo");

  return (
    <main>
      <section className="content-Control">
        <ControlButtonComponent
          isShowed={currentWindow === "devInfo"}
          text="Informacion Personal"
          className="medium-text-size"
          action={() => setCurrentWindow("devInfo")}
        />

        <ControlButtonComponent
          isShowed={currentWindow === "projectsList"}
          text="Lista De Proyectos"
          className="medium-text-size"
          action={() => setCurrentWindow("projectsList")}
        />

        <ControlButtonComponent
          isShowed={currentWindow === "Contact"}
          text="Contacto"
          className="medium-text-size"
          action={() => setCurrentWindow("Contact")}
        />
      </section>

      <InfoBoxComponent currentWindow={currentWindow} />
    </main>
  );
}

export default App;
