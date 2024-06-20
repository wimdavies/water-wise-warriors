package com.water_wise_warriors.api.service;

import com.water_wise_warriors.api.dto.BathingWaterDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class BWQServiceTest {

    @Autowired
    BWQService bwqService;

    @Test
    public void testGetBathingWatersReturnsListOfDTOsWithEubwid() {
        List<BathingWaterDTO> bathingWaterDTOs = bwqService.getBathingWaters();
        assertEquals("ukc2102-03600", bathingWaterDTOs.getFirst().getEubwidNotation());
        assertEquals("ukc2102-03700", bathingWaterDTOs.get(1).getEubwidNotation());
    }

    @Test
    public void testGetBathingWatersReturnsListOfDTOsWithName() {
        List<BathingWaterDTO> bathingWaterDTOs = bwqService.getBathingWaters();
        assertEquals("Spittal", bathingWaterDTOs.getFirst().getName());
        assertEquals("Bamburgh Castle", bathingWaterDTOs.get(1).getName());
    }

    @Test
    public void testGetBathingWatersReturnsListOfDTOsWithLat() {
        List<BathingWaterDTO> bathingWaterDTOs = bwqService.getBathingWaters();
        assertEquals(55.756856682381226, bathingWaterDTOs.getFirst().getLat());
        assertEquals(55.610951487599735, bathingWaterDTOs.get(1).getLat());
    }

    @Test
    public void testGetBathingWatersReturnsListOfDTOsWithLon() {
        List<BathingWaterDTO> bathingWaterDTOs = bwqService.getBathingWaters();
        assertEquals(-1.988831300159957, bathingWaterDTOs.getFirst().getLon());
        assertEquals(-1.707902922897897, bathingWaterDTOs.get(1).getLon());
    }

    @Test
    public void testGetBathingWatersReturnsListOfDTOsWithLatestComplianceAssessment() {
        List<BathingWaterDTO> bathingWaterDTOs = bwqService.getBathingWaters();
        assertEquals("Excellent", bathingWaterDTOs.getFirst().getLatestComplianceAssessment());
        assertEquals("Excellent", bathingWaterDTOs.get(1).getLatestComplianceAssessment());
    }

    @Test
    public void testGetBathingWatersReturnsListOfDTOsWithLatestRiskPredictionLevel() {
        List<BathingWaterDTO> bathingWaterDTOs = bwqService.getBathingWaters();
        assertEquals("normal", bathingWaterDTOs.getFirst().getLatestRiskPredictionLevel());
        assertEquals("normal", bathingWaterDTOs.get(1).getLatestRiskPredictionLevel());
    }

    @Test
    public void testGetBathingWatersReturnsListOfDTOsWithLatestRiskPredictionExpiresAt() {
        List<BathingWaterDTO> bathingWaterDTOs = bwqService.getBathingWaters();
        assertEquals("2024-06-21T08:29:00", bathingWaterDTOs.getFirst().getLatestRiskPredictionExpiresAt());
        assertEquals("2024-06-21T08:29:00", bathingWaterDTOs.get(1).getLatestRiskPredictionExpiresAt());
    }
}
