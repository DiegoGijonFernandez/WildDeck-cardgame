package com.group.wilddeck.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "QUESTIONS")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    private Long id;

    @Column(name = "question", length = 300, nullable = false)
    private String question;

    @Column(name = "explanation", length = 300, nullable = false)
    private String explanation;

    @Column
    private String category;

    @Column(name = "correct_answer", length = 300, nullable = false)
    private String correct_answer;

    @Column(name = "incorrect_answer1", length = 300, nullable = false)
    private String incorrect_answer1;

    @Column(name = "incorrect_answer2", length = 300, nullable = false)
    private String incorrect_answer2;

    @Column(name = "incorrect_answer3", length = 300, nullable = false)
    private String incorrect_answer3;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getCorrect_answer() {
        return correct_answer;
    }

    public void setCorrect_answer(String correct_answer) {
        this.correct_answer = correct_answer;
    }

    public String getIncorrect_answer1() {
        return incorrect_answer1;
    }

    public void setIncorrect_answer1(String incorrect_answer1) {
        this.incorrect_answer1 = incorrect_answer1;
    }

    public String getIncorrect_answer2() {
        return incorrect_answer2;
    }

    public void setIncorrect_answer2(String incorrect_answer2) {
        this.incorrect_answer2 = incorrect_answer2;
    }

    public String getIncorrect_answer3() {
        return incorrect_answer3;
    }

    public void setIncorrect_answer3(String incorrect_answer3) {
        this.incorrect_answer3 = incorrect_answer3;
    }
}
