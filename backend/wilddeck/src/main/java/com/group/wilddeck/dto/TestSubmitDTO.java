package com.group.wilddeck.dto;

import java.util.List;

public record TestSubmitDTO(
        Long testId,
        List<UserAnswerDTO> answers
) {}

