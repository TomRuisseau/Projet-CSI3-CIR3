import Login from "./Login";
import Register from "./Register";
import React, { useState } from "react";


function TeacherLogger(props) {
    const [currentForm, setCurrentForm] = useState('Login'); // ['Login', 'Register']

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    const validation = (page, id) => {
        props.onValidation(page);
        props.onPass(id);
    }
    return (
        <>
            {
                currentForm === "Login" ? <Login onFormSwitch={toggleForm} sendValidation={validation} /> : <Register onFormSwitch={toggleForm} sendValidation={validation} />
            }
        </>
    )
}

export default TeacherLogger;