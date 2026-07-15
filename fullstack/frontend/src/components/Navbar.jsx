import React from "react";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>📝 Online Feedback System</h2>
            </div>

            <ul className="nav-links">
                <li><a href="#feedbackForm">Submit Feedback</a></li>
                <li><a href="#feedbackList">View Feedback</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;