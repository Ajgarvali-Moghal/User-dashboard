# UserManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.





# User Management Dashboard

This is a user management dashboard built with Angular, NgRx for state management, and json-server for a mock REST API backend.

## Features
- User authentication (dummy/localStorage)
- User CRUD operations (Add, Edit, Delete)
- State management with NgRx (Actions, Reducer, Effects, Selectors)
- Responsive and user-friendly UI

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start json-server (mock API)
Make sure you have `json-server` installed globally:
```bash
npm install -g json-server
```
Then run:
```bash
json-server --watch db.json --port 3000
```
This will serve your API at `http://localhost:3000/users`.

### 3. Start Angular development server
```bash
ng serve
```
Navigate to `http://localhost:4200/` in your browser.

## Running Unit Tests
Run:
```bash
ng test
```
This will execute unit tests via [Karma](https://karma-runner.github.io).

## Project Structure
- `src/app/components/` - Angular components (dashboard, login, user-list, etc.)
- `src/app/store/` - NgRx store files (actions, reducer, effects, selectors)
- `src/app/services/` - API service for user CRUD
- `db.json` - Mock database for json-server

## Notes
- All user data is managed via NgRx store and synced with json-server.
- For real API integration, replace json-server with your backend.

## Further Help
For Angular CLI help, run `ng help` or visit the [Angular CLI documentation](https://angular.io/cli).

