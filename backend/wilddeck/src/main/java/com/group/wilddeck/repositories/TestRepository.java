package com.group.wilddeck.repositories;

import com.group.wilddeck.entities.Test;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<Test, Long> {}