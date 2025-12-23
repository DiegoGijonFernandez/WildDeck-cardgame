package com.group.wilddeck.repositories;

import com.group.wilddeck.entities.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionsRepository extends JpaRepository<Question, Long> {
    List<Question> findByCategory(String category);
}
