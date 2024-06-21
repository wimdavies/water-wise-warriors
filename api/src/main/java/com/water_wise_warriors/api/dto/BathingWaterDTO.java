package com.water_wise_warriors.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class BathingWaterDTO {
    @Setter
    private String eubwidNotation;
    private String name;
    private Double lat;
    private Double lon;
    private String latestComplianceAssessment;
    private String latestRiskPredictionLevel;
    private String latestRiskPredictionExpiresAt;

    @JsonProperty("name")
    private void setName(Map<String, String> nameValues) {
        this.name = nameValues.get("_value");
    }

    @JsonProperty("samplingPoint")
    private void setLatAndLon(Map<String, Object> samplingPointValues) {
        this.lat = (Double) samplingPointValues.get("lat");
        this.lon = (Double) samplingPointValues.get("long");
    }

    @SuppressWarnings("unchecked")
    @JsonProperty("latestComplianceAssessment")
    public void setLatestComplianceAssessment(Map<String, Object> latestComplianceAssessmentValues) {
        Map<String, Object> complianceClassification = (Map<String, Object>) latestComplianceAssessmentValues.get("complianceClassification");
        Map<String, String> name = (Map<String, String>) complianceClassification.get("name");
        this.latestComplianceAssessment = name.get("_value");
    }

    @SuppressWarnings("unchecked")
    @JsonProperty("latestRiskPrediction")
    public void setLatestRiskPredictionLevelAndExpiresAt(Map<String, Object> latestRiskPredictionValues) {
        Map<String, Object> riskLevel = (Map<String, Object>) latestRiskPredictionValues.get("riskLevel");
        Map<String, String> name = (Map<String, String>) riskLevel.get("name");
        this.latestRiskPredictionLevel = name.get("_value");

        Map<String, String> expiresAt = (Map<String, String>) latestRiskPredictionValues.get("expiresAt");
        this.latestRiskPredictionExpiresAt = expiresAt.get("_value");
    }
}
