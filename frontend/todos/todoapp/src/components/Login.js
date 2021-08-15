import React,{ useState, useEffect } from 'react';

const Login = props => {
    const[details, setDetails] = useState({name: "", password: ""});
    const [item, setItem] = useState();

    // const changeHandler = e => {
    //     setDetails();
    // };

    const handleSubmit = e => {
        e.preventDefault();
        props.Login(details);
    }

    const loginStyle = {
        border: '1px solid rebeccapurple',
        borderRadius: '5px',
        display: 'flex',
        margin: '10% auto',
        flexDirection: 'column',
        height: '500'
    }

    const formStyle = {
        padding: '10px',
        width: '300px'
    }

    const divStyle = {
        padding: '3%'
    }

    return (
        <div className="login-page" style = {loginStyle}>
            <h2>Log In!</h2>
            <form style = {formStyle} onSubmit = {handleSubmit}>
                <div style = {divStyle}>
                    <label for = "exampleInputUsername">Username: </label>
                    <input
                    placeholder = "Enter username"
                    type = "text"
                    name = "username"
                    onChange = {e => setDetails({
                        ...details, name: e.target.value})} 
                    value = {details.name}/>
                </div>
                <div style = {divStyle}>
                    <label for="exampleInputPassword1">Password: </label>
                    <input
                    placeholder="Password" 
                    type="password" 
                    name = "password"
                    onChange = {e => setDetails({
                        ...details, password: e.target.value})} 
                    value = {details.password} />
                </div>
                <button type="submit" class="btn btn-primary">Log In</button>
            </form>
        </div> 
    )
}

export default Login;