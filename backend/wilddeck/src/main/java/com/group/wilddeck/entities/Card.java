package com.group.wilddeck.entities;

import com.group.wilddeck.entities.enums.BiologicalType;
import com.group.wilddeck.entities.enums.DietUsage;
import com.group.wilddeck.entities.enums.ExtinctionStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "CARDS")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_card")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "species_id", nullable = false)
    private Species species;

    @Enumerated(EnumType.STRING)
    @Column(name = "biological_type", nullable = false, length = 50)
    private BiologicalType biologicalType;

    @Enumerated(EnumType.STRING)
    @Column(name = "diet_usage", nullable = false, length = 50)
    private DietUsage dietUsage;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(name = "scientific_name", length = 150)
    private String scientificName;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(length = 255)
    private String habitat;

    @Enumerated(EnumType.STRING)
    @Column(name = "extinction_status", nullable = false, length = 50)
    private ExtinctionStatus extinctionStatus;

    @Column(columnDefinition = "TEXT")
    private String curiosity;

    @Column(name = "unlocked")
    private Boolean unlocked;

    @Column(name = "image", length = 300)
    private String image;
}
