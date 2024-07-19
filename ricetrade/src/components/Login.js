import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
//import Cookies from 'js-cookie';

function Login() {
    const [hoveredItem, setHoveredItem] = useState(null);
    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
    };
    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const history = useNavigate();
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState(null);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = {
                username: username,
                password: password,
            };

            const response = await axios.get("http://localhost:5000/readfromserver");
            console.log(response.data);
            const userExists = response.data.some(user => user.username === userData.username && user.password === userData.password);

            if (userExists) {
                console.log("User exists:", userData);
                //Cookies.set('username', username);
                history('/trips');
            } else {
                setError("Invalid username or password");
            }
        } catch (error) {
            console.error("Error while saving data:", error.message);
        }
    }

    const styles = {
        login: {
            backgroundColor: "aliceblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: 'bold',
        },
        loginForm: {
            width: "400px",
            height: "450px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "15px",
            backgroundColor: "#222831",
            margin: "90px 0px",
        },
        title: {
            textAlign: "center",
            color: "#EEEEEE",
        },
        form: {
            display: "flex",
            flexDirection: "column",
        },
        input: {
            marginBottom: "15px",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#EEEEEE",
            fontSize: "1.2rem",
        },
        submitButton: {
            cursor: "pointer",
            color: '#222831',
            fontSize: "1.2rem",
            padding: "5px",
            width: "5vw",
            margin: '15px auto 5px auto',
            fontWeight: "bold",
        },
        link: {
            marginTop: "10px",
            display: "block",
            textAlign: "center",
            color: "#EEEEEE",
            fontSize: "1.2rem",
        },
        error: {
            color: "red",
            textAlign: "center",
        },
        social: {
            marginTop: '15px',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
        },
        go: {
            width: '55px',
            display: 'flex',
            justifyContent: 'center',

        },
        icon: {
            width: '40px',
            height: '40px',
        },
    };

    return (
        <div style={styles.login}>
            <div style={styles.loginForm}>
                <h1 style={styles.title}>Login</h1>

                <form style={styles.form} onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                        placeholder="Username"
                        required
                    />
                    {/* <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                        placeholder="Email"
                        required
                    /> */}
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        placeholder="Password"
                        required
                    />
                    <Link to="/signup" style={styles.link}>Forgot Password? Sign up</Link>
                    <input
                        type="submit"
                        value="Login" onMouseEnter={() => handleMouseEnter('login')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.submitButton, backgroundColor: hoveredItem === 'login' ? '#F4BB44' : '#EEEEEE' }}
                    />
                </form>
                <div style={styles.social}>
                    <div style={styles.go}>
                        <Link to="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=ARZ0qKJFx2EBztkMKF4-Cg8kls8MuhqWBf_J8F_5v9jXCoA6ALn0AcwhtdWZrKg2e1kHIVDKbMkNVw&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1644598237%3A1712927467608099&theme=mn&ddm=0">
                            <img src={require("../images/google.png")} alt="Google" style={styles.icon} />
                        </Link>
                    </div>
                    <div style={styles.go}>
                        <Link to="https://www.facebook.com/">
                            <img src={require("../images/facebook.png")} alt="Facebook" style={styles.icon} />
                        </Link>
                    </div>
                </div>
                {error && <p style={styles.error}>{error}</p>}
            </div>
        </div>
    );
}

export default Login;