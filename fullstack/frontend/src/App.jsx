import React from "react";

import Navbar from "./components/Navbar";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Footer from "./components/Footer";

import "./styles/style.css";

function App() {
    return (
        <div className="app">

            <Navbar />

            <main className="main-content">

                <section className="hero">
                    <h1>Welcome to the Online Feedback System</h1>

                    <p>
                        We value your feedback. Share your experience and help us
                        improve our services.
                    </p>
                </section>

                <FeedbackForm />

                <FeedbackList />

            </main>

            <Footer />

        </div>
    );
}

export default App;