package com.group.wilddeck.dto;

import com.group.wilddeck.entities.Species;
import com.group.wilddeck.entities.enums.BiologicalType;
import com.group.wilddeck.entities.enums.DietUsage;
import com.group.wilddeck.entities.enums.ExtinctionStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonProperty;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CardDTO {// src/main/java/com/group/wilddeck/dto/WildCardDto.java

        private Long id;
        private String name;
        private String scientificName;
        private String image;
        private String habitat;
        private String conservationStatus;
        private String description;
        private String curiosity;
        @JsonProperty("isLocked")
        private boolean isLocked;

        private String category;
        private String type;
        private String dietOrUse;
}
