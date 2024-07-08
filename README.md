# AWS-boilerplate-stepFunction

This is a serverless application that uses AWS Step Functions to orchestrate AWS Lambda functions. The application is configured using the Serverless Framework and includes two Lambda functions that are executed in sequence.

## Prerequisites

- Node.js v16.x
- Serverless Framework
- AWS CLI configured with appropriate permissions

## Getting Started

### Installation
  ```bash
  npm install
  ```

### Configuration

The configuration file `serverless.yml` defines the service, provider, functions, and step functions.

#### service

- **service:** The name of the service is `my-step-function`.

#### useDotenv

- **useDotenv:** Set to `true` to use environment variables from a `.env` file.

#### plugins

- **plugins:** Includes `serverless-step-functions` for AWS Step Functions integration.

#### provider

- **name:** AWS
- **runtime:** Node.js 16.x
- **region:** eu-west-3
- **environment:** Defines environment variables:
    - `ENV_TEST`: Loaded from `.env` file.

#### functions

- **init_lambda:**
  - **handler:** `lambdas/handler_lambda.init`
  - **timeout:** 30 seconds
- **process_lambda:**
  - **handler:** `lambdas/handler_lambda.process`
  - **timeout:** 30 seconds

#### stepFunctions

Defines the state machine `myWorkshopStateMachine` with the following states:

- **initLambda:**
  - **Type:** Task
  - **Resource:** Reference to `init_lambda` ARN
  - **Next:** `processLambda`
- **processLambda:**
  - **Type:** Task
  - **Resource:** Reference to `process_lambda` ARN
  - **End:** true

## Deployment

Deploy the service to AWS:

```bash
serverless deploy
```

## Usage

Invoke the state machine using AWS Step Functions. The `initLambda` function will be executed first, followed by the `processLambda` function.

## Clean Up

Remove the deployed service from AWS:

```bash
serverless remove
```

## Directory Structure

```plaintext
my-step-function/
├── lambdas/
│   └── handler_lambda.js
├── .env
├── package.json
├── serverless.yml
└── README.md
```

- `lambdas/handler_lambda.js`: Contains the Lambda function handlers.
- `.env`: Environment variables file.
- `package.json`: Node.js dependencies.
- `serverless.yml`: Serverless Framework configuration.
- `README.md`: Project documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to update this README with any additional information relevant to your project.