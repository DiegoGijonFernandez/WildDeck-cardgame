package com.group.wilddeck.repositories;

import com.group.wilddeck.entities.Card;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardRepository extends JpaRepository<Card, Long> {
    List<Card> findBySpecies_Category(String category);
    List<Card> findByUnlockedFalseOrUnlockedIsNull();
}

