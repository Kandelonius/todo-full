import React,{ useState, useEffect } from 'react';

const Login = props => {

    const [item, setItem] = useState();

    const changeHandler = e => {
        e.persist();
        let value = e.target.value;
        setItem({
            ...item,
            [e.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
            const json = JSON.stringify(e, null, 4);
            console.clear();
            console.log(json);
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
                    onChange = {changeHandler}
                    type = "text" 
                    name = "username" 
                    value = {props.username} 
                    placeholder = "Enter username" />
                </div>
                <div style = {divStyle}>
                    <label for="exampleInputPassword1">Password: </label>
                    <input
                    onChange = {changeHandler}
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