# Mutants API

ExpressJS application - Postgresql


## Documentation

### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/v1/mutants/ | To get all mutants |
| GET | /api/v1/mutants/search?query= | To get mutant by name or place |
| GET | /api/v1/mutants/:mutantId| To get mutant by id |
| POST | /api/v1/mutants/ | To create mutant |
| PATCH | /api/v1/mutants/:mutantId | To update mutant info |
| DELETE | /api/v1/mutants/:mutantId | To delete mutant |
| GET | /api/v1/places/ | To get all places |
| GET | /api/v1/places/:placeId| To get place by id |
| POST | /api/v1/places/ | To create place |
| PATCH | /api/v1/places/:placeId | To update place info |
| DELETE | /api/v1/places/:placeId | To delete place |
| GET | /api/v1/vehicles/ | To get all vehicles |
| GET | /api/v1/vehicles/:vehicleId| To get vehicle by id |
| POST | /api/v1/vehicles/ | To create vehicle |
| PATCH | /api/v1/vehicles/:vehicleId | To update vehicle info |
| DELETE | /api/v1/vehicles/:vehicleId | To delete vehicle |
| GET | /api/v1/powers/ | To get all powers |
| GET | /api/v1/powers/:powerId| To get power by id |
| POST | /api/v1/powers/ | To create power |
| PATCH | /api/v1/powers/:powerId | To update power info |
| DELETE | /api/v1/powers/:powerId | To delete power |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

```
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_PORT=
```


## Installation

Install project dependencies:

```bash
  npm install
```
    
Run the development server:

```bash
  npm run dev
```

Then simply apply the migrations:

```bash
  npm run migrations:run
```
apply the seeds:

```bash
  npm run seed:run
```

You can now run the development server:

```bash
  npm run dev
```

## Deploy on Heroku

- https://db-mutants-api.herokuapp.com/