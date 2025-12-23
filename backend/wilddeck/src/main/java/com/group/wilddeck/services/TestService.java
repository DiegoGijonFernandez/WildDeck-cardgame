package com.group.wilddeck.services;

import com.group.wilddeck.dto.TestResultDTO;
import com.group.wilddeck.dto.TestStartDto;
import com.group.wilddeck.dto.TestSubmitDTO;
import com.group.wilddeck.dto.UserAnswerDTO;
import com.group.wilddeck.entities.Question;
import com.group.wilddeck.entities.Test;
import com.group.wilddeck.entities.TestAnswer;
import com.group.wilddeck.repositories.QuestionsRepository;
import com.group.wilddeck.repositories.TestAnswerRepository;
import com.group.wilddeck.repositories.TestRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

@Service
public class TestService {

    private final QuestionsRepository questionsRepository;
    private final TestRepository testRepository;
    private final TestAnswerRepository testAnswerRepository;

    public TestService(QuestionsRepository questionsRepository,
                       TestRepository testRepository,
                       TestAnswerRepository testAnswerRepository) {
        this.questionsRepository = questionsRepository;
        this.testRepository = testRepository;
        this.testAnswerRepository = testAnswerRepository;
    }

    public TestStartDto startTest(String category, int numberOfQuestions) {

        List<Question> questions = questionsRepository.findByCategory(category);

        if (questions.size() < numberOfQuestions) {
            System.out.println(questions);
            throw new RuntimeException("No hay suficientes preguntas para la categoría " + category);
        }

        Collections.shuffle(questions);

        List<Question> selected = questions.stream()
                .limit(numberOfQuestions)
                .toList();

        Test test = new Test();
        test.setCategory(category);
        test.setTotalQuestions(numberOfQuestions);
        test.setCorrectAnswers(0);
        test.setCreatedAt(LocalDateTime.now());

        testRepository.save(test);

        return new TestStartDto(test.getId(), selected);
    }


    public TestResultDTO finishTest(TestSubmitDTO dto) {

        Test test = testRepository.findById(dto.testId())
                .orElseThrow(() -> new RuntimeException("Test not found"));

        int correctCount = 0;

        for (UserAnswerDTO answerDTO : dto.answers()) {

            Question q = questionsRepository.findById(answerDTO.questionId())
                    .orElseThrow();

            boolean correct = q.getCorrect_answer().equals(answerDTO.userAnswer());

            if (correct)
                correctCount++;

            TestAnswer ans = new TestAnswer();
            ans.setTest(test);
            ans.setQuestionId(q.getId());
            ans.setUserAnswer(answerDTO.userAnswer());
            ans.setCorrect(correct);

            testAnswerRepository.save(ans);
        }

        test.setCorrectAnswers(correctCount);
        testRepository.save(test);

        return new TestResultDTO(test.getId(), test.getTotalQuestions(), correctCount);
    }
}
