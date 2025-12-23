package com.group.wilddeck.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionDTO {
    private String question;
    private String explanation;;
    private String correct_answer;
    private String incorrect_answer1;
    private String incorrect_answer2;
    private String incorrect_answer3;
}
