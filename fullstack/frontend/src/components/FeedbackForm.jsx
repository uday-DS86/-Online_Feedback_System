import React, { useState } from "react";
import FeedbackService from "../services/FeedbackService";

function FeedbackForm() {

    const [feedback, setFeedback] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFeedback({
            ...feedback,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess("");
        setError("");

        // Validation
        if (
            !feedback.name ||
            !feedback.email ||
            !feedback.subject ||
            !feedback.message
        ) {
            setError("Please fill all the fields.");
            return;
        }

        try {
            await FeedbackService.saveFeedback(feedback);

            setSuccess("🎉 Feedback submitted successfully!");

            setFeedback({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

        } catch (err) {
            console.error(err);
            setError("Failed to submit feedback.");
        }
    };

    return (
        <div className="form-container" id="feedbackForm">

            <h2>Submit Your Feedback</h2>

            {success && <p className="success">{success}</p>}
            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={feedback.name}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={feedback.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                    value={feedback.subject}
                    onChange={handleChange}
                />

                <textarea
                    name="message"
                    placeholder="Write your feedback..."
                    rows="5"
                    value={feedback.message}
                    onChange={handleChange}
                ></textarea>

                <button type="submit">
                    Submit Feedback
                </button>

            </form>

        </div>
    );
}

export default FeedbackForm;