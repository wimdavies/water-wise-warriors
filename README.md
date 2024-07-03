# Wild Waters

Makers x Deloitte Final Engineering Project

## How to run the project

Core dependencies:

- a Java JDK @ 21
- a Maven version compatible with the above
- `node` @ 20
- `postgresql` @ 15

Create a development database named `water_wise_warriors_development`.

The simplest way to run the project is to navigate into `/api`, and run `mvn spring-boot: run`.
Due to the plugins configured in `pom.xml`, this will also run `npm build` and serve the entire app on `localhost:8080`.

In addition, you may navigate into `/frontend` and run `npm install` followed by `npm start`. This will start the frontend in development mode on `localhost:3000`, giving you access to hot reloading.

## API endpoints

The endpoint `/api/bathing-waters` returns a JSON array of all bathing waters in this format:

```json
[
  {
    "eubwidNotation": "ukc2102-03600",
    "lat": 55.756856682381226,
    "lon": -1.988831300159957,
    "latestRiskPredictionLevel": "normal",
    "latestRiskPredictionExpiresAt": "2024-06-22T08:29:00",
    "name": "Spittal",
    "latestComplianceAssessment": "Excellent"
  },
  ...
]
```

*~ more content to come ~*
