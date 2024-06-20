package com.water_wise_warriors.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;
import java.util.Objects;

@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class BathingWaterDTO {
    private String eubwidNotation;
    private String name;
    private Double lat;
    private Double lon;
    private String latestComplianceAssessment;
    private String latestRiskPredictionLevel;
    private String latestRiskPredictionExpiresAt;

    public String getEubwidNotation() {
        return eubwidNotation;
    }

    public void setEubwidNotation(String eubwidNotation) {
        this.eubwidNotation = eubwidNotation;
    }

    public String getName() {
        return name;
    }

    @JsonProperty("name")
    private void setName(Map<String, String> nameValues) {
        this.name = nameValues.get("_value");
    }

    public Double getLat() {
        return lat;
    }

    public Double getLon() {
        return lon;
    }

    @JsonProperty("samplingPoint")
    private void setLatAndLon(Map<String, Object> samplingPointValues) {
        this.lat = (Double) samplingPointValues.get("lat");
        this.lon = (Double) samplingPointValues.get("long");
    }

    public String getLatestComplianceAssessment() {
        return latestComplianceAssessment;
    }

    @SuppressWarnings("unchecked")
    @JsonProperty("latestComplianceAssessment")
    public void setLatestComplianceAssessment(Map<String, Object> latestComplianceAssessmentValues) {
        Map<String, Object> complianceClassification = (Map<String, Object>) latestComplianceAssessmentValues.get("complianceClassification");
        Map<String, String> name = (Map<String, String>) complianceClassification.get("name");
        this.latestComplianceAssessment = name.get("_value");
    }

    public String getLatestRiskPredictionLevel() {
        return latestRiskPredictionLevel;
    }

    public String getLatestRiskPredictionExpiresAt() {
        return latestRiskPredictionExpiresAt;
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

    //
    // @JsonProperty("samplingPoint")
    // private void setLon(Map<String, Object> samplingPointValues) {
    // }

    //
    // public static class Name {
    //     private String _value;
    // }
    //
    // public static class SamplingPoint {
    //     private double lat;
    //     private double lon; // use 'lon' instead of 'long' as 'long' is a reserved keyword in Java
    // }
    //
    // public static class LatestComplianceAssessment {
    //     private ComplianceClassification complianceClassification;
    //
    //     public static class ComplianceClassification {
    //         private Name name;
    //     }
    // }
    //
    // public static class LatestRiskPrediction {
    //     private ExpiresAt expiresAt;
    //     private RiskLevel riskLevel;
    //
    //     public static class ExpiresAt {
    //         private String _value;
    //     }
    //
    //     public static class RiskLevel {
    //         private Name name;
    //     }
    // }
}
