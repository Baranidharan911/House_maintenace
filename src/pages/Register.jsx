import React, {useState} from "react"
export const Register = () =>{
    const[email,setEmail] =useState('');
    const[pass,setPass]=useState('');
    const[name,setName] =useState('');
    const handleSubmit =() =>{
        e.preventDefault();
        console.log[email];
    }
    return(
        <div class="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} onChange={(e) => setNmail(e.target.value)}type="text" placeholder="Full name" id="name" name="name" />
                
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email please" id="email" name="email" />
                
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="passwoed" id="password" name="passwoed" />
                <button type="submit">Login</button>
            </form>
            <button>Already have an account? Register here</button>
        </div>
    )
}