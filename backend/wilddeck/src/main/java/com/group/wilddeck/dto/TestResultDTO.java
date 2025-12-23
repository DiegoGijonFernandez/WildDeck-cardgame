package com.group.wilddeck.dto;

public record TestResultDTO(
        Long testId,
        int totalQuestions,
        int correctAnswers
) {}

