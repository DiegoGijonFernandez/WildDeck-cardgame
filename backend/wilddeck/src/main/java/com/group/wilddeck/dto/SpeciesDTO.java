package com.group.wilddeck.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SpeciesDTO {
    private String name;
    private String category;
    private String description;
}
