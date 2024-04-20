# ContractTeamTracker

## Description

This contract implements functionality for managing a team and their payments. It allows for adding team members, assigning tasks to them, releasing payments upon completion of tasks, and managing the team's state.

## Steps to Run the Code

1. **Install Dependencies**: First, install the necessary dependencies by running the following command:

    ```bash
    npm install
    ```

2. **Run the Code**: After installing the dependencies, you can run the code using the following command:

    ```bash
    npm run start
    ```

## Contract Functions

### `addTeamMember`

- **Description**: Adds a new team member to the contract.
- **Parameters**:
  - `_walletAddress`: The wallet address of the team member.
  - `_name`: The name of the team member.
- **Modifiers**: None
- **Visibility**: Public

### `assignTask`

- **Description**: Assigns a task to a team member.
- **Parameters**:
  - `_teamMember`: The address of the team member.
  - `_taskDescription`: The description of the task.
- **Modifiers**: None
- **Visibility**: Public

### `completeTask`

- **Description**: Marks a task as completed by a team member.
- **Parameters**:
  - `_teamMember`: The address of the team member.
- **Modifiers**: None
- **Visibility**: Public

### `deactivateTeamMember`

- **Description**: Deactivates a team member.
- **Parameters**:
  - `_teamMember`: The address of the team member.
- **Modifiers**: None
- **Visibility**: Public

### `getAllTeamMembers`

- **Description**: Retrieves information about all team members.
- **Parameters**: None
- **Modifiers**: None
- **Visibility**: Public
- **Returns**:
  - Array of team member addresses
  - Array of team member names
  - Array of total tasks assigned to each team member
  - Array of total tasks completed by each team member
  - Array indicating if each team member is active

### `getTeamMemberCount`

- **Description**: Retrieves the total count of team members.
- **Parameters**: None
- **Modifiers**: None
- **Visibility**: Public
- **Returns**:
  - Total count of team members

### `owner`

- **Description**: Retrieves the owner address of the contract.
- **Parameters**: None
- **Modifiers**: None
- **Visibility**: Public
- **Returns**:
  - The address of the contract owner

### `receivedPayments`

- **Description**: Retrieves the total payments received by a team member.
- **Parameters**:
  - `_teamMember`: The address of the team member.
- **Modifiers**: None
- **Visibility**: Public
- **Returns**:
  - Total payments received by the team member

### `releasePayment`

- **Description**: Releases payment to a team member.
- **Parameters**:
  - `_teamMember`: The address of the team member.
  - `_amount`: The amount to be released as payment.
- **Modifiers**: None
- **Visibility**: Public

### `teamMemberAddresses`

- **Description**: Retrieves the list of team member addresses.
- **Parameters**:
  - Index: Index of the team member address.
- **Modifiers**: None
- **Visibility**: Public
- **Returns**:
  - The address of the team member at the specified index

### `teamMembers`

- **Description**: Retrieves information about a specific team member.
- **Parameters**:
  - `_teamMember`: The address of the team member.
- **Modifiers**: None
- **Visibility**: Public
- **Returns**:
  - Wallet address of the team member
  - Name of the team member
  - Total tasks assigned to the team member
  - Total tasks completed by the team member
  - Indicates if the team member is active

### `withdrawBalance`

- **Description**: Withdraws balance from the contract.
- **Parameters**: None
- **Modifiers**: None
- **Visibility**: Public

## Events

### `PaymentReleased`

- **Description**: Event emitted when a payment is released to a team member.
- **Parameters**:
  - `teamMember`: Address of the team member.
  - `amount`: Amount of payment released.

### `TaskAssigned`

- **Description**: Event emitted when a task is assigned to a team member.
- **Parameters**:
  - `teamMember`: Address of the team member.
  - `taskDescription`: Description of the task.

## Receive Function

- **Description**: Allows the contract to receive payments.
- **State Mutability**: Payable

