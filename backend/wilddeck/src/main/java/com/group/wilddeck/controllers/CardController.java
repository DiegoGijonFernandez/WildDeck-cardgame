package com.group.wilddeck.controllers;

import com.group.wilddeck.dto.CardDTO;
import com.group.wilddeck.entities.Card;
import com.group.wilddeck.services.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
@CrossOrigin(origins = "http://localhost:5173")
public class CardController {

    private final CardService service;

    public CardController(CardService service) {
        this.service = service;
    }

    @GetMapping
    public List<CardDTO> getCards() {
        return service.getAllCards();
    }

    @Autowired
    private CardService cardService;

    @PostMapping("/unlock-random")
    public CardDTO unlockRandom() {
        return cardService.unlockRandomLockedCard();
    }
}

