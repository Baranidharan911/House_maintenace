import React, {useState} from "react"
export const Login =() => {
    const[email,setEmail] =useState('');
    const[pass,setPass]=useState('');
    const handleSubmit =() =>{
        e.preventDefault();
        console.log[email];
    }
    return(
        <div class="login-box">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email please" id="email" name="email" />
                
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="passwoed" id="password" name="passwoed" />
                <button type="submit">Login</button>
            </form>
            <button>Don't have an account? Register here</button>
        </div>
    )
}