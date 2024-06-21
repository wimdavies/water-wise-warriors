package com.water_wise_warriors.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.water_wise_warriors.api.dto.BathingWaterDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.client.RestClientTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.client.MockRestServiceServer;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.requestTo;
import static org.springframework.test.web.client.response.MockRestResponseCreators.withSuccess;

@RestClientTest(BWQService.class)
public class BWQServiceUnitTest {

    @Autowired
    MockRestServiceServer server;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    BWQService bwqService;

    @Test
    public void getBathingWatersReturnsListOfDTOsMappedCorrectly() {
        List<BathingWaterDTO> fakeBathingWaterDTOs = List.of(
                new BathingWaterDTO("ukc2102-03600", "Spittal", 55.756856682381226, -1.988831300159957, "Excellent", "normal","2024-06-22T08:29:00")
        );

        String fakeJsonBody = "{\n" +
                "  \"format\": \"linked-data-api\",\n" +
                "  \"version\": \"0.2\",\n" +
                "  \"result\": {\n" +
                "    \"_about\": \"https://environment.data.gov.uk/doc/bathing-water.json?_pageSize=1000\",\n" +
                "    \"definition\": \"https://environment.data.gov.uk/meta/doc/bathing-water.json\",\n" +
                "    \"extendedMetadataVersion\": \"https://environment.data.gov.uk/doc/bathing-water.json?_pageSize=1000&_metadata=all\",\n" +
                "    \"first\": \"https://environment.data.gov.uk/doc/bathing-water.json?_pageSize=1000&_page=0\",\n" +
                "    \"isPartOf\": {\n" +
                "      \"_about\": \"https://environment.data.gov.uk/doc/bathing-water.json\",\n" +
                "      \"definition\": \"https://environment.data.gov.uk/meta/doc/bathing-water.json\",\n" +
                "      \"hasPart\": \"https://environment.data.gov.uk/doc/bathing-water.json?_pageSize=1000\",\n" +
                "      \"type\": [\n" +
                "        \"http://purl.org/linked-data/api/vocab#ListEndpoint\"\n" +
                "      ]\n" +
                "    },\n" +
                "    \"items\": [\n" +
                "      {\n" +
                "        \"_about\": \"http://environment.data.gov.uk/id/bathing-water/ukc2102-03600\",\n" +
                "        \"appointedSewerageUndertaker\": {\n" +
                "          \"_about\": \"http://business.data.gov.uk/id/company/02366703\",\n" +
                "          \"companyProfile\": {\n" +
                "            \"_about\": \"http://business.data.gov.uk/companies/profile/02366703\",\n" +
                "            \"label\": [\n" +
                "              {\n" +
                "                \"_value\": \"Companies House profile for Northumbrian Water Limited\",\n" +
                "                \"_lang\": \"en\"\n" +
                "              }\n" +
                "            ]\n" +
                "          },\n" +
                "          \"name\": {\n" +
                "            \"_value\": \"Northumbrian Water Limited\",\n" +
                "            \"_lang\": \"en\"\n" +
                "          }\n" +
                "        },\n" +
                "        \"country\": {\n" +
                "          \"_about\": \"http://data.ordnancesurvey.co.uk/id/country/england\",\n" +
                "          \"name\": {\n" +
                "            \"_value\": \"England\",\n" +
                "            \"_lang\": \"en\"\n" +
                "          }\n" +
                "        },\n" +
                "        \"district\": [\n" +
                "          {\n" +
                "            \"_about\": \"http://data.ordnancesurvey.co.uk/id/7000000000043674\",\n" +
                "            \"name\": {\n" +
                "              \"_value\": \"Northumberland\",\n" +
                "              \"_lang\": \"en\"\n" +
                "            }\n" +
                "          },\n" +
                "          \"http://statistics.data.gov.uk/id/statistical-geography/E06000048\"\n" +
                "        ],\n" +
                "        \"envelope\": {\n" +
                "          \"_about\": \"http://location.data.gov.uk/so/common/Envelope/bwpf.eaew/ukc2102-03600:1\",\n" +
                "          \"label\": [\n" +
                "            {\n" +
                "              \"_value\": \"Map bounds for Spittal\",\n" +
                "              \"_lang\": \"en\"\n" +
                "            }\n" +
                "          ]\n" +
                "        },\n" +
                "        \"eubwidNotation\": \"ukc2102-03600\",\n" +
                "        \"latestComplianceAssessment\": {\n" +
                "          \"_about\": \"http://environment.data.gov.uk/data/bathing-water-quality/compliance-rBWD/point/03600/year/2023\",\n" +
                "          \"complianceClassification\": {\n" +
                "            \"_about\": \"http://environment.data.gov.uk/def/bwq-cc-2015/1\",\n" +
                "            \"name\": {\n" +
                "              \"_value\": \"Excellent\",\n" +
                "              \"_lang\": \"en\"\n" +
                "            }\n" +
                "          }\n" +
                "        },\n" +
                "        \"latestProfile\": \"http://environment.data.gov.uk/data/bathing-water-profile/ukc2102-03600/2024:1\",\n" +
                "        \"latestRiskPrediction\": {\n" +
                "          \"_about\": \"http://environment.data.gov.uk/data/bathing-water-quality/stp-risk-prediction/point/03600/date/20240621-084112\",\n" +
                "          \"expiresAt\": {\n" +
                "            \"_value\": \"2024-06-22T08:29:00\",\n" +
                "            \"_datatype\": \"dateTime\"\n" +
                "          },\n" +
                "          \"riskLevel\": {\n" +
                "            \"_about\": \"http://environment.data.gov.uk/def/bwq-stp/normal\",\n" +
                "            \"name\": {\n" +
                "              \"_value\": \"normal\",\n" +
                "              \"_lang\": \"en\"\n" +
                "            }\n" +
                "          }\n" +
                "        },\n" +
                "        \"latestSampleAssessment\": \"http://environment.data.gov.uk/data/bathing-water-quality/in-season/sample/point/03600/date/20240615/time/090000/recordDate/20240615\",\n" +
                "        \"name\": {\n" +
                "          \"_value\": \"Spittal\",\n" +
                "          \"_lang\": \"en\"\n" +
                "        },\n" +
                "        \"regionalOrganization\": {\n" +
                "          \"_about\": \"http://reference.data.gov.uk/id/public-body/environment-agency/unit/north-east-north-east-office\",\n" +
                "          \"name\": {\n" +
                "            \"_value\": \"North East\",\n" +
                "            \"_lang\": \"en\"\n" +
                "          }\n" +
                "        },\n" +
                "        \"sameAs\": \"http://environment.data.gov.uk/id/bathing-water/spittal\",\n" +
                "        \"samplingPoint\": {\n" +
                "          \"_about\": \"http://location.data.gov.uk/so/ef/SamplingPoint/bwsp.eaew/03600\",\n" +
                "          \"easting\": 400800,\n" +
                "          \"lat\": 55.7568566823812,\n" +
                "          \"long\": -1.98883130015996,\n" +
                "          \"name\": {\n" +
                "            \"_value\": \"Sampling point at Spittal\",\n" +
                "            \"_lang\": \"en\"\n" +
                "          },\n" +
                "          \"northing\": 651500\n" +
                "        },\n" +
                "        \"sedimentTypesPresent\": \"http://environment.data.gov.uk/def/bathing-water/sand-sediment\",\n" +
                "        \"type\": [\n" +
                "          \"http://environment.data.gov.uk/def/bathing-water/BathingWater\",\n" +
                "          \"http://environment.data.gov.uk/def/bathing-water/CoastalBathingWater\"\n" +
                "        ],\n" +
                "        \"uriSet\": {\n" +
                "          \"_about\": \"http://environment.data.gov.uk/id/bathing-water/\",\n" +
                "          \"label\": [\n" +
                "            {\n" +
                "              \"_value\": \"Bathing waters monitored by the Environment Agency for England and Wales.\",\n" +
                "              \"_lang\": \"en\"\n" +
                "            }\n" +
                "          ]\n" +
                "        },\n" +
                "        \"waterQualityImpactedByHeavyRain\": true,\n" +
                "        \"yearDesignated\": \"http://reference.data.gov.uk/id/year/1988\",\n" +
                "        \"zoneOfInfluence\": {\n" +
                "          \"_about\": \"http://location.data.gov.uk/so/ef/ZoneOfInfluence/bwzoi.eaew/ukc2102-03600:1\",\n" +
                "          \"name\": {\n" +
                "            \"_value\": \"Zone of influence at Spittal\",\n" +
                "            \"_lang\": \"en\"\n" +
                "          }\n" +
                "        }\n" +
                "      }\n" +
                "    ],\n" +
                "    \"itemsPerPage\": 1000,\n" +
                "    \"page\": 0,\n" +
                "    \"startIndex\": 1,\n" +
                "    \"type\": [\n" +
                "      \"http://purl.org/linked-data/api/vocab#Page\"\n" +
                "    ]\n" +
                "  }\n" +
                "}";

        server.expect(requestTo("https://environment.data.gov.uk/doc/bathing-water.json?_pageSize=1000"))
                .andRespond(withSuccess(fakeJsonBody, MediaType.APPLICATION_JSON));

        List<BathingWaterDTO> bathingWaterDTOs = bwqService.getBathingWaters();
        assertEquals(1, bathingWaterDTOs.size());
        assertEquals(fakeBathingWaterDTOs.getFirst().getClass(), bathingWaterDTOs.getFirst().getClass());
        assertEquals(fakeBathingWaterDTOs.getFirst().getName(), bathingWaterDTOs.getFirst().getName());
    }
}
