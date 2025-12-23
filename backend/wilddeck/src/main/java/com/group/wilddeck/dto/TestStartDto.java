package com.group.wilddeck.dto;

import com.group.wilddeck.entities.Question;
import java.util.List;

public record TestStartDto(
        Long testId,
        List<Question> questions
) {}
