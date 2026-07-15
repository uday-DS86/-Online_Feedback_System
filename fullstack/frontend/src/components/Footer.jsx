import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Online Feedback System</h3>
                <p>Your feedback helps us improve our services.</p>

                <hr />

                <p>
                    © {new Date().getFullYear()} Online Feedback System |
                    Developed with ❤️ using React, Spring Boot & MariaDB
                </p>
            </div>
        </footer>
    );
}

export default Footer;