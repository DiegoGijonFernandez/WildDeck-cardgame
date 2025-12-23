package com.group.wilddeck.services;

import com.group.wilddeck.dto.CardDTO;
import com.group.wilddeck.entities.Card;
import com.group.wilddeck.entities.enums.BiologicalType;
import com.group.wilddeck.entities.enums.DietUsage;
import com.group.wilddeck.entities.enums.ExtinctionStatus;
import com.group.wilddeck.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class CardService {

        private final CardRepository repo;

        public CardService(CardRepository repo) {
            this.repo = repo;
        }

        public List<CardDTO> getAllCards() {
            return repo.findAll()
                    .stream()
                    .map(this::toDto)
                    .toList();
        }

        private CardDTO toDto(Card card) {
            String category = mapCategory(card.getBiologicalType());
            String type = mapType(card.getBiologicalType());
            String dietOrUse = mapDietOrUse(card.getDietUsage());

            boolean isLocked = Boolean.FALSE.equals(card.getUnlocked()) || card.getUnlocked() == null;

            return new CardDTO(
                    card.getId(),
                    card.getName(),
                    card.getScientificName(),
                    card.getImage(),
                    card.getHabitat(),
                    card.getExtinctionStatus().name(),
                    card.getDescription(),
                    card.getCuriosity(),
                    isLocked,
                    category,
                    type,
                    dietOrUse
            );
        }

        private String mapCategory(BiologicalType bt) {
            return switch (bt) {
                case MAMIFERO, AVE, REPTIL, ANFIBIO, INSECTOIDE -> "animal";
                case ARBOL, ARBUSTO, HERBACEA, CONIFERA -> "plant";
            };
        }

        private String mapType(BiologicalType bt) {
            return switch (bt) {
                case MAMIFERO -> "Mamífero";
                case AVE -> "Ave";
                case REPTIL -> "Reptil";
                case ANFIBIO -> "Anfibio";
                case INSECTOIDE -> "Insectoide";
                case ARBOL -> "Árbol";
                case ARBUSTO -> "Arbusto";
                case HERBACEA -> "Herbácea";
                case CONIFERA -> "Conífera";
            };
        }

        private String mapDietOrUse(DietUsage du) {
            return switch (du) {
                case HERVIVORO -> "Herbívoro";
                case CARNIVORO -> "Carnívoro";
                case OMNIVORO -> "Omnívoro";
                case INSECTIVORO -> "Insectívoro";
                case PISCIVORO -> "Piscívoro";
                case MEDICINAL -> "Medicinal";
                case AROMATICA -> "Aromática";
                case ENDEMICA -> "Endémica";
                case PROTEGIDA -> "Protegida";
            };
        }

        private String mapConservation(ExtinctionStatus es) {
            // ya coincide con el front
            return es.name();  // "LC", "CR", "EN", "VU"
        }

        @Autowired
        private CardRepository cardRepository;

        public CardDTO unlockRandomLockedCard() {
            // cartas bloqueadas = unlocked = false o null
            List<Card> lockedCards = cardRepository.findByUnlockedFalseOrUnlockedIsNull();
            if (lockedCards.isEmpty()) {
                throw new RuntimeException("No hay cartas bloqueadas");
            }

            Card random = lockedCards.get(new Random().nextInt(lockedCards.size()));

            // marcar como desbloqueada
            random.setUnlocked(true);
            Card saved = cardRepository.save(random);

            // construir y devolver el DTO
            CardDTO dto = new CardDTO();
            dto.setId(saved.getId());
            dto.setName(saved.getName());
            dto.setScientificName(saved.getScientificName());
            dto.setImage(saved.getImage());
            dto.setHabitat(saved.getHabitat());
            dto.setConservationStatus(saved.getExtinctionStatus().name());
            dto.setDescription(saved.getDescription());
            dto.setCuriosity(saved.getCuriosity());
            dto.setLocked(false); // ahora está desbloqueada

            dto.setCategory(saved.getSpecies().getCategory()); // adapta a tu modelo
            dto.setType(saved.getBiologicalType().name());
            dto.setDietOrUse(saved.getDietUsage().name());

            return dto;
        }

}

