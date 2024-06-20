package com.water_wise_warriors.api.controller;

import com.water_wise_warriors.api.dto.BathingWaterDTO;
import com.water_wise_warriors.api.service.BWQService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BathingWaterController {

    @Autowired
    private BWQService bwqService;

    @GetMapping("/api/bathing-waters")
    public List<BathingWaterDTO> all() {
        return bwqService.getBathingWaters();
    }
}
