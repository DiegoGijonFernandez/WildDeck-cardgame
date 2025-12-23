package com.group.wilddeck.controllers;

import com.group.wilddeck.dto.AuthResponseDto;
import com.group.wilddeck.dto.UserDto;
import com.group.wilddeck.entities.User;
import com.group.wilddeck.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    //http://localhost:8080/auth/register
    @PostMapping("/register")
    public String register(@RequestBody UserDto dto) {
        return userService.register(dto);
    }

    @PostMapping("/login")
    public AuthResponseDto login(@RequestBody UserDto dto) {
        return userService.login(dto);
    }

    @PutMapping("/update/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody UserDto dto) {
        return userService.updateUser(id, dto);
    }
}
