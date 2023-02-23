# SpectroCoin Home Task


## Table of Contents

- [Welcome to the SpectroCoin Home Task](#spectroCoin-home-task)
    - [Table of Contents](#table-of-contents)
    - [Introduction](#introduction)
    - [Getting started](#getting-started)
    - [Run Tests](#run-tests)
    - [General Information about framework](#general-information-about-framework)
    - [Manual part](#manual-part)

## Introduction
This repository includes automation part and manual part. 
For the automation part cypress and cucumber was used.

## Getting started
Information on how to setup cypress can be found here:
https://docs.cypress.io/guides/getting-started/installing-cypress

## Run Tests

##### 1. Run tests with configured scripts
```
npm run cy:run
```
##### 2. Run tests using npx tool
```
npx cypress run
```
## General Information about framework
1. This framework uses cucumber so all tests should have described scenarios and step definitions
2. New scenarios should be introduced in cypress/e2e/scenarios folder
3. New step definitions should be introduced in cypress/e2e/step-definition folder

## Manual part
1. Test cases for home task can be found in ManualPart folder
2. Postman script is under PostmanScript folder
>Postman folder contains postman collection which has one GET request and 3 tests configured. 
>To use it please import that collection in your postman account.