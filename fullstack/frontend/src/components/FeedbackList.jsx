import React, { useEffect, useState } from "react";
import FeedbackService from "../services/FeedbackService";

function FeedbackList() {

    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        loadFeedback();
    }, []);

    const loadFeedback = () => {
        FeedbackService.getAllFeedback()
            .then((response) => {
                setFeedbackList(response.data);
            })
            .catch((error) => {
                console.error("Error loading feedback:", error);
            });
    };

    const deleteFeedback = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this feedback?"
        );

        if (!confirmDelete) {
            return;
        }

        FeedbackService.deleteFeedback(id)
            .then(() => {
                loadFeedback();
            })
            .catch((error) => {
                console.error("Delete Error:", error);
            });
    };

    return (

        <div className="table-container" id="feedbackList">

            <h2>Submitted Feedback</h2>

            <table>

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {feedbackList.length === 0 ? (

                        <tr>
                            <td colSpan="6">
                                No Feedback Available
                            </td>
                        </tr>

                    ) : (

                        feedbackList.map((feedback) => (

                            <tr key={feedback.id}>

                                <td>{feedback.id}</td>

                                <td>{feedback.name}</td>

                                <td>{feedback.email}</td>

                                <td>{feedback.subject}</td>

                                <td>{feedback.message}</td>

                                <td>

                                    <button
                                        className="delete-btn"
                                        onClick={() =>
                                            deleteFeedback(feedback.id)
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>

    );
}

export default FeedbackList;