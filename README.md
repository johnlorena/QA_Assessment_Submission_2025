# QA Engineer Assessment: Web & API Testing Submission

This repository contains the results and deliverables for the QA Engineer Assessment, covering manual testing, Playwright automation for the Web Application (SauceDemo), and API testing (JSONPlaceholder).

## Objective

The goal of this assessment was to demonstrate core testing capabilities, including:
1.  Designing comprehensive positive, negative, and edge test cases.
2.  Automating a core web application flow using Playwright with best practices (Page Object Model).
3.  Executing and documenting API tests using Postman, including assertions and negative testing.
4.  Providing professional documentation and clear bug reporting.

## Repository Structure

The project is structured to easily locate all required deliverables:

| Folder/File | Description | Deliverable Covered |
| :--- | :--- | :--- |
| `web-app-testing/` | Contains the Playwright automation code. | Automation Script (Playwright) |
| `api-testing/` | Contains the Postman Collection and documentation. | API Testing |
| `documentation/` | Contains the formal test case matrix and bug reports. Screenshots | Test Documentation, Bug Reports |

---


## Deliverables Checklist

| Deliverable | Status | Location |
| :--- | :--- | :--- |
| Documented Test Cases (Web & API) | ✅ Complete | `documentation/test_cases.xlsx` |
| Bug Reports (if any) | ✅ Complete | `documentation/bug_reports.md` (Contains the JSONPlaceholder API risk) |
| Automation Script (Playwright) | ✅ Complete| `web-app-testing/` |
| Screenshots/Logs of Execution | ✅ Complete | `screenshots/` |
| Professional Presentation/Walkthrough | ✅ Complete | **This README.md** |

---

## 💻 Part 1: Web Application Testing (SauceDemo)

### 1. Manual Testing Summary

All manual test cases (including positive, boundary, and negative scenarios like locked user login and empty cart checkout) were executed. The strategy focused on high coverage to fulfill the **Test Case Quality** criteria.

* **Test Case Document:** [Link to your Test Case Google Sheet/Excel export]
* **Result:** **Two critical functional defects** were identified in the core checkout flow, and several other major/minor issues were found (e.g., login message overlap, `problem_user` data integrity).
* **Key Findings:**
    * The **Happy Path Purchase** (TC-O-001) **Passed**.
    * **CRITICAL FAILURE:** The system allows users to **complete the checkout process with an empty cart** (TC-O-002 Fail).
    * **MAJOR FAILURE:** Functional failures were found during **Add to Cart** and **Checkout** when using the specialized `problem_user` (TC-C-004 Fail).

### 2. Automation (Playwright)

The core user story ("Happy Path Purchase") was automated using Playwright.

* **Best Practice:** The code is structured using the **Page Object Model (POM)** for high **readability and maintainability**, as required by the evaluation criteria.
* **Location:** The code is located in `sauce-assessment/web-app-testing/`.
* **Flow Covered:** Login -> Add Item -> Go to Cart -> Enter Checkout Info -> Finish Purchase -> Assert Success Message.

#### Running the Automation Script

1.  **Clone the Repository:** `git clone https://github.com/johnlorena/QA_Assessment_Submission_2025.git`
2.  **Change Directory** Navigate to the project `cd sauce-assessment`.
3.  **Install Dependencies:** Navigate to the project root and run `npm install`.
4.  **Run the Test:** `npx playwright test web-app-testing/purchase.spec.ts`

---
## 🌐 Part 2: API Testing (JSONPlaceholder)

The API testing was performed using Postman (or an equivalent API client) and focused on rigorous testing of status codes, data integrity, and error handling.

### 1. API Test Cases & Assertions

All four required endpoints were tested using Positive, Negative, and Edge cases.

* **Location:** See **`api-testing/API_Testing_Documentation.md`** for detailed request/response breakdowns and analysis.
* **Postman Collection:** `api-testing/QA_Assessment_API_Collection.json`

| Endpoint | Method | Case Focus | Key Assertion |
| :--- | :--- | :--- | :--- |
| `/users` | GET | Retrieval | Status **200**, Response is an **Array**, and contains expected properties. |
| `/users/id` | GET | **Negative/Edge** | Invalid ID returns **404 Not Found**. |
| `/posts` | POST | **Negative** | Missing required fields (e.g., `title`) returns the response status. (Note: JSONPlaceholder behavior observed and documented). |
| `/posts/id` | PUT | **Data Integrity** | Status **200**, and the updated fields in the response **match** the requested payload. |

---