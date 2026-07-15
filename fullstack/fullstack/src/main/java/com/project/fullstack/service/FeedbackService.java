package com.project.fullstack.service;

import com.project.fullstack.entity.Feedback;
import com.project.fullstack.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    // Save Feedback
    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    // Get All Feedback
    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    // Delete Feedback
    public void deleteFeedback(Long id) {
        feedbackRepository.deleteById(id);
    }


    // update Feedback
    public Feedback updateFeedback(Long id, Feedback updatedFeedback) {

    Feedback feedback = feedbackRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Feedback not found"));

    feedback.setName(updatedFeedback.getName());
    feedback.setEmail(updatedFeedback.getEmail());
    feedback.setMessage(updatedFeedback.getMessage());

    return feedbackRepository.save(feedback);
}
}