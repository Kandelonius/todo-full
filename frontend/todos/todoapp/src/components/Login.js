import React,{ useState, useEffect } from 'react';

const Login = props => {

    const [item, setItem] = useState();

    const handleMouseIn = (event) => {
        alert("mouse in");
    }

    React.useEffect(() => {
        // button.addEventListener('mousein', handleMouseIn);
    })
    const changeHandler = e => {
        e.persist();
        let value = e.target.value;
        setItem({
            ...item,
            [e.target.name]: value
        });
    };

    return (
        <div className="login-input-form">
            <h2>Log In!</h2>
            <form>
                <div className = "form-group">
                    <label for = "exampleInputUsername">Username </label>
                    <input 
                    type = "text" 
                    name = "username" 
                    value = {props.username} 
                    placeholder = "Enter username" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password </label>
                    <input 
                    type="password" 
                    name = "password"
                    value = {props.password} 
                    placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Log In</button>
            </form>
        </div> 
    )
}

export default Login;