import React, { forwardRef, useImperativeHandle } from "react";
// import component
import Drawer from "react-modern-drawer";

//import styles
import "react-modern-drawer/dist/index.css";

import "../Styles/teacherDrawer.css";

const TeacherDrawer = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  useImperativeHandle(ref, () => ({
    toggleDrawerOutside() {
      setIsOpen((prevState) => !prevState);
    },
  }));

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="drawer"
        style={{ backgroundColor: "#0f3c4c", color: "white"}}
        size={280}
      >
        <div className="h-75 mt-5 drawerTeacher d-flex flex-column justify-content-between">
          <h2
            onClick={() => {
              toggleDrawer();
              props.onChoice("TeacherMenu");
            }}
          >
            Accueil
          </h2>
          <h2
            onClick={() => {
              toggleDrawer();
              props.onChoice("StudentManager");
            }}
          >
            Élèves
          </h2>
          <h2
            onClick={() => {
              toggleDrawer();
              props.onChoice("Quests");
            }}
          >
            Quêtes
          </h2>
          <h2
            onClick={() => {
              toggleDrawer();
              props.onChoice("TeacherQuiz");
            }}
          >
            Quiz
          </h2>
          <h2
            onClick={() => {
              toggleDrawer();
              props.onChoice("DailyRand");
            }}
          >
            Roue du destin
          </h2>
          <h2 onClick={toggleDrawer}>Tutoriel</h2>
          <h2 onClick={toggleDrawer}>Paramètres</h2>
        </div>
      </Drawer>
    </>
  );
});

export default TeacherDrawer;
