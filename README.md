# Reshape Assignment

This repository contains the **backend** and **frontend** of the Reshape Assignment project.

## Project Structure

- **backend/** - Azure Functions app that handles API requests.
- **frontend/** - React app that interacts with the backend.

---
## Initial Setup

### Step 1: Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/cosmicsaurabh/reshape_assignment.git
cd reshape_assignment
```

## Backend Setup (Azure Functions)

The backend folder contains an Azure Functions project for handling the API requests. Follow the steps below to deploy it to Azure.

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed.
- [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local) installed.
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) installed.


1. **Navigate to the backend directory**:

    ```bash
    cd backend
    ```
2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Configure Environment Variables**:

    Create a `.env` file in the **backend** directory and add your function name (the Azure Function app name):
  ```bash
    AZURE_FUNCTION_NAME=<yourfunstion name>
```

### Steps to Deploy the Backend on Azure

1. **Login to Azure**:

    ```bash
    az login
    ```

2. **Create an Azure Function App**:

    Run the following command to create a new Azure Function App:

    ```bash
    az functionapp create --resource-group <resource-group-name> \
                          --consumption-plan-location <region> \
                          --runtime node \
                          --functions-version 4 \
                          --name <unique-function-app-name> \
                          --storage-account <storage-account-name>
    ```

3. **Deploy the Azure Function**:

    Use the Azure CLI to deploy the code to the created Function App:

    ```bash
    func azure functionapp publish <unique-function-app-name>
    ```

4. **Monitor Logs** (Optional):

    Stream logs from your deployed function using the following command:

    ```bash
    func azure functionapp logstream <unique-function-app-name>
    ```

### Steps Using Visual Studio Code (Azure Functions Extension)

1. **Install Required Extensions**:
    - Install the following extensions in VSCode:
        - **Azure Functions** (by Microsoft)
        - **Azure Account** (optional but recommended)

2. **Sign in to Azure**:
    - Click the Azure icon in the Activity Bar and sign in.

3. **Create a Function App**:
    - Click **Azure Functions: Create Function App in Azure (Advanced)** from the VSCode command palette (`Ctrl+Shift+P`).
    - Provide a unique name, select the **Node.js** runtime, version **20**, and choose a region.

4. **Deploy**:
    - Right-click your function and select **Azure Functions: Deploy to Function App...**. Choose the created function app and deploy.

---


## Frontend Setup (React App)

The frontend folder contains a React application that interacts with the Azure Function API. Follow the steps below to run the React app locally.

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed.
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/) installed.

### Steps to Run Locally

1. **Navigate to the frontend directory**:

    ```bash
    cd frontend
    ```

2. **Install dependencies**:

    Run the following command to install all necessary dependencies:

    ```bash
    npm install
    ```

3. **Configure Environment Variables**:

    Create a `.env` file in the **frontend** directory and add your backend URL (the Azure Function app URL):

    ```bash
    REACT_APP_BACKEND_BASE_URL=https://<your-function-app-name>.azurewebsites.net
    ```
    ```bash
    REACT_APP_GET_USERS_ENDPOINT = api //bydeafult it is api as of now
    ```
    ```bash
    REACT_APP_AZURE_FUNCTION_NAME  = <your specific function name>
    ```
    
    

4. **Run the React App**:

    Start the development server by running:

    ```bash
    npm start
    ```

5. **Build for Production**:

    To create a production build, run:

    ```bash
    npm run build
    ```

---

## Testing the Application

- Once both the **backend** and **frontend** are running, the React app will communicate with the deployed Azure Function backend.

- You can test the API endpoints by hitting the **GET** request on the `getusers-reshape-assessment` endpoint.

    Example URL:
    ```bash
    https://<your-function-app-name>.azurewebsites.net/<endpoint>/<specific finction>
    ```

---

## License

---
