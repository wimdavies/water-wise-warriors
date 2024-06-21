package com.water_wise_warriors.api.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.water_wise_warriors.api.dto.BathingWaterDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
public class BWQService {

    private final RestClient restClient;

    public BWQService(RestClient.Builder builder) {
        this.restClient = builder
                .baseUrl("https://environment.data.gov.uk/doc")
                .build();
    }

    // TODO: add error handling for non-200 response codes
    public List<BathingWaterDTO> getBathingWaters() {
        ResponseEntity<String> response = restClient.get()
                .uri("/bathing-water.json?_pageSize=1000")
                .retrieve()
                .toEntity(String.class);
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonRootNode = objectMapper.readTree(response.getBody());
            String items = jsonRootNode.get("result").get("items").toString();
            List<BathingWaterDTO> bathingWaterDTOS = objectMapper.readValue(items, new TypeReference<List<BathingWaterDTO>>() {});
            return bathingWaterDTOS;
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
