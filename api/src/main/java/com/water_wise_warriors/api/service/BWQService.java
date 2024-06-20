package com.water_wise_warriors.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class BWQService {

    @Autowired
    private RestClient restClient;

    public ResponseEntity<String> getBathingWaters() {
        ResponseEntity<String> response = restClient.get()
                .uri("/bathing-water.json?_pageSize=1000")
                .retrieve()
                .toEntity(String.class);
        System.out.println(response);
        return response;
    }
}
