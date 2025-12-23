package com.group.wilddeck.controllers;

import com.group.wilddeck.dto.TestResultDTO;
import com.group.wilddeck.dto.TestStartDto;
import com.group.wilddeck.dto.TestSubmitDTO;
import com.group.wilddeck.services.TestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tests")
@CrossOrigin(origins = "http://localhost:5173")
public class TestController {

    private final TestService testService;

    public TestController(TestService testService) {
        this.testService = testService;
    }

    @PostMapping("/start")
    public ResponseEntity<TestStartDto> startTest(
            @RequestParam String category, // "animals" o "plants"
            @RequestParam(defaultValue = "5") int numberOfQuestions
    ) {
        return ResponseEntity.ok(testService.startTest(category, numberOfQuestions));
    }

    @PostMapping("/finish")
    public ResponseEntity<TestResultDTO> finishTest(
            @RequestBody TestSubmitDTO dto
    ) {
        return ResponseEntity.ok(testService.finishTest(dto));
    }
}


