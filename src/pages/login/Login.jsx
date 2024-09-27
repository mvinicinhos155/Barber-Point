import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./login.css"

function Login () {

    const { authenticad, login} = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hendleSubmite = (e) => {
        e.preventDefault();
        console.log("submit", {email, password})
        login(email, password)
        setEmail("")
        setPassword("")
    };


    return (
        <div className="login">
            <form className="form" onSubmit={hendleSubmite}>
                <h1>Login Barber Point</h1>
               <div className="action">
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
               </div>
               <div className="action">
                <label htmlFor="password">Senha</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {authenticad === false ? <p>senha icorreta</p> : null}
               </div>
               <div className="submit">
                <button type="submit">Entrar</button>
               </div>
            </form>
            <div className="right">
            </div>
        </div>
    )
}

export default Login;