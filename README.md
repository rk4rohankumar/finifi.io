# Vendor Form Details

This project is a subsection of a form designed to take vendor details as input. It was developed as an assignment for a company. The form includes sections to capture various details about the vendor, including business details, location, and account information. The project is built using Next.js and TailwindCSS.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Assumptions](#assumptions)
- [License](#license)

## Features
- Capture Vendor Form Details
- Capture Business Details
- Vendor ID, Legal Name, Trade Name
- Vendor State and Location
- GST Registration and Certificate Upload
- PAN Number and Attachment Upload
- Payment Terms Policy
- MSME Details
- LDC Upper Limit and Date Range
- Additional Location for Supply
- POC (Point of Contact) Details
- Account Details including Bank, Account Name, Account Number

## Technologies Used
- Next.js
- React
- TailwindCSS

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/vendor-form-details.git
    ```
2. Navigate to the project directory:
    ```bash
    cd vendor-form-details
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3000` to view the vendor form details page.

## Assumptions
- The list of states and their respective cities,banks,Policy will be provided.
- The following sections and fields are included in the form:
  - Vendor Form Details
    - Vendor ID
    - Legal Name*
    - Trade Name*
    - Vendor State*
    - Vendor Location*
  - Business Details
    - GST Registered
    - GST Certificate*
    - Payment Terms
    - PAN Attachment*
    - Policy*
  - MSME Details
    - MSME Registered
    - Lower Exception
    - LDC Upper Limit
    - LDC Start Date*
    - LDC End Date*
    - PAN Number
  - Additional Location for Supply
    - State*
    - Location
    - Location GSTIn
    - Location GSTIn Certificate*
  - POC Details
    - POC Name*
    - POC Designation*
    - POC Email ID*
    - POC Mobile Number*
    - Address*
  - Account Details
    - Select Bank*
    - Account Name
    - Account Number
    - Confirm Account Number

## License
This project is licensed under the MIT License.
