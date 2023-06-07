import React from "react";
import StudentDrawer from "./StudentDrawer";
import StudentMenu from "./StudentMenu";
import { useState, useRef } from "react";
import StudentProfile from "./StudentProfile";
import StudentTeam from "./StudentTeam";
import Shop from "./Shop";
import Tutorial from "./Tutorial";
import StudentQuests from "./StudentQuests";
import StudentClass from "./StudentClass";
import "../Styles/studentDashboard.css";

function StudentDashboard(props) {
  const [page, setPage] = useState("StudentProfile"); // StudentMenu, quests, quiz, dailyEvent, tutorial, settings, Quetes
  const childRef = useRef();

  console.log(props.data);

  const switchPage = (page) => {
    setPage(page);
    console.log(page);
  };
  return (
    <div>
      <button
        onClick={() => childRef.current.toggleDrawerOutside()}
        className="btn btn-gauche btn-primary position-absolute top-0 start-0"
      >
        Menu
      </button>

      <StudentDrawer ref={childRef} onChoice={switchPage} />


      {page === "StudentProfile" ? (
        <StudentProfile data={props.data} />
      ) : page === "StudentTeam" ? (
        <StudentTeam data={props.data} />
      ) : page === "Shop" ? (
        <Shop data={props.data} />
      ) : page === "Tutorial" ? (
        <Tutorial />
      ) : page === "StudentClass" ? (
        <StudentClass data={props.data} />
      ) : page === "Quetes" ? (
        <StudentQuests data={props.data} />
      ) : (
        <StudentMenu />
      )}
    </div>
  );
}

export default StudentDashboard;
