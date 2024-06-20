package com.water_wise_warriors.api.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.water_wise_warriors.api.dto.BathingWaterDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
public class BWQService {

    @Autowired
    private RestClient restClient;

    public List<BathingWaterDTO> getBathingWaters() {
        ResponseEntity<String> response = restClient.get()
                .uri("/bathing-water.json?_pageSize=1000")
                .retrieve()
                .toEntity(String.class);
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
            JsonNode jsonRootNode = objectMapper.readTree(response.getBody());
            JsonNode jsonItemsNode = jsonRootNode.get("result").get("items");
            String items = jsonItemsNode.toString();
            List<BathingWaterDTO> bathingWaterDTOS = objectMapper.readValue(items, new TypeReference<List<BathingWaterDTO>>() {});
            return bathingWaterDTOS;
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
