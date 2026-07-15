package com.project.fullstack.controller;

import com.project.fullstack.entity.Feedback;
import com.project.fullstack.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = "*")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    // Submit Feedback
    @PostMapping("/submit")
    public Feedback submitFeedback(@RequestBody Feedback feedback) {
        return feedbackService.saveFeedback(feedback);
    }

    // View All Feedback
    @GetMapping("/all")
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }


       // Update Feedback
    @PutMapping("/update/{id}")
    public Feedback updateFeedback(@PathVariable Long id,
                                   @RequestBody Feedback feedback) {
        return feedbackService.updateFeedback(id, feedback);
    }

    // Delete Feedback by ID
    @DeleteMapping("/delete/{id}")
    public String deleteFeedback(@PathVariable Long id) {
        feedbackService.deleteFeedback(id);
        return "Feedback deleted successfully!";
    }
}