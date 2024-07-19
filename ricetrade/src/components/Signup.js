import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const [hoveredItem, setHoveredItem] = useState(null);
    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
    };
    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const history = useNavigate();
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [passwordError, setPasswordError] = useState(null);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }
        try {
            const userData = {
                username: username,
                password: password,
                email: email
            };
            await axios.post("http://localhost:5000/writetodatabase", userData);
            console.log("Data:", userData);
            history('/login');
        } catch (error) {
            console.error("Error while saving data:", error.message);
        }
    }

    const styles = {
        pageContainer: {
            backgroundColor: "aliceblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: 'bold',
        },
        loginContainer: {
            width: "400px",
            height: "500px",
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
            marginBottom: "10px",
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
        centerText: {
            textAlign: "center",
            color: "#EEEEEE",
            fontSize: "1.2rem",
        },
        link: {
            display: "block",
            textAlign: "center",
            color: "#EEEEEE",
            fontSize: "1.2rem",
        },
        error: {
            color: "red",
            textAlign: "center",
        },
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.loginContainer}>
                <h1 style={styles.title}>Sign Up</h1>
                <form style={styles.form} onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                        placeholder="Username"
                    />
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={styles.input}
                        placeholder="Confirm Password"
                    />
                    {passwordError && <p style={styles.error}>{passwordError}</p>}
                    <input
                        type="submit"
                        value="Sign Up" onMouseEnter={() => handleMouseEnter('signup')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.submitButton, backgroundColor: hoveredItem === 'signup' ? '#F4BB44' : '#EEEEEE' }}
                    />
                </form>
                <p style={styles.centerText}>Already have an account? </p>
                <Link to="/login" style={styles.link}>Login</Link>
            </div>
        </div>
    );
}

export default Signup;