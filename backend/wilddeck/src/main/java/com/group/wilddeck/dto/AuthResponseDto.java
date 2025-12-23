package com.group.wilddeck.dto;

import com.group.wilddeck.entities.User;

public class AuthResponseDto {

    private String token;
    private User user;

    public AuthResponseDto(String token, User user) {
        this.token = token;
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public User getUser() {
        return user;
    }
}
