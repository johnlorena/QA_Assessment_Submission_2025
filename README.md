# QA Engineer Assessment: Web & API Testing Submission

This repository contains the results and deliverables for the QA Engineer Assessment, covering manual testing, Playwright automation for the Web Application (SauceDemo), and API testing (JSONPlaceholder).

## Objective

The goal of this assessment was to demonstrate core testing capabilities, including:
1.  Designing comprehensive positive, negative, and edge test cases.
2.  Automating a core web application flow using Playwright with best practices (Page Object Model).
3.  Executing and documenting API tests using Postman, including assertions and negative testing.
4.  Providing professional documentation and clear bug reporting.


## Deliverables Checklist

| Deliverable | Status | Location |
| :--- | :--- | :--- |
| Documented Test Cases (Web & API) | To-do | `documentation/test_cases.xlsx` |
| Bug Reports (if any) | To-do | `documentation/bug_reports.md` (Contains the JSONPlaceholder API risk) |
| Automation Script (Playwright) | To-do| `web-app-testing/` |
| Screenshots/Logs of Execution | To-do | `screenshots/` |
| Professional Presentation/Walkthrough | In Progress | **This README.md** |

That's a necessary update! Since you executed the manual tests and found critical flaws in the Checkout flow, your summary needs to be corrected to reflect those findings accurately and professionally.

Here is the updated "Manual Testing Summary" for your `README.md`, followed by the guidance for the Playwright Automation section.

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

---


