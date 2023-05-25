import React, { useState } from "react";

function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState(''); // TODO: add password confirmation

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        console.log(email, password, passwordConfirm)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="dupond.dupont@gmail.com" id="email" name="email" />
                <label htmlFor="password">Mot de passe</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="********" id="password" name="password" />
                <label htmlFor="passwordConfrim">Confirmation du mot de passe</label>
                <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} type="password" className="form-control" placeholder="********" id="passwordConfirm" name="passwordConfirm" />
                <button type="submit" className="btn btn-primary">Connexion</button>
            </form>

            <button onClick={() => props.onFormSwitch("Login")} className="btn btn-primary">Vous avez déjà un compte ?</button>
        </>
    )
}

export default Register;