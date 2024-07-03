# Wild Waters

Makers x Deloitte Final Engineering Project

## How to run the project

Install dependencies by running `npm install` in the `/frontend` directory

to run the backend server, ensure you are in the /api directory, and then run the command `mvn spring-boot:run`

the endpoint `/api/bathing-waters` returns a JSON object, an array/list of all bathing-waters in this format:
```
[{
    "eubwidNotation": "ukc2102-03600",
    "lat": 55.756856682381226,
    "lon": -1.988831300159957,
    "latestRiskPredictionLevel": "normal",
    "latestRiskPredictionExpiresAt": "2024-06-22T08:29:00",
    "name": "Spittal",
    "latestComplianceAssessment": "Excellent"
  },
  ....]
```

to run the React front end, ensure you are in the /frontend directory, and then run the command `npm start`
