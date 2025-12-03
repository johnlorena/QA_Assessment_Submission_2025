#### Note: All evidence can be found on `documentation/test_cases.xlsx`
-----

# QA Engineer Assessment: Defect Tracking Log

This document tracks all defects and risks identified during the manual and API testing phases of the assessment.

## High Priority / Critical Defects

### Defect 001: Critical Flaw - Checkout Process Bypassed with Empty Cart

  * **Test Case Reference:** TC-O-002 (Checkout Process Tests)
  * **Priority:** High
  * **Severity:** Critical (Allows transaction completion with no items/value)
  * **Environment:** Web UI (SauceDemo)

#### Steps to Reproduce (STR):

1.  Log in as `standard_user` / `secret_sauce`.
2.  Ensure the shopping cart is completely empty (badge shows 0).
3.  Manually navigate to the Cart page: `https://www.saucedemo.com/cart.html`
4.  Click the **Checkout** button.
5.  Enter valid required information (First Name, Last Name, Postal Code).
6.  Click **Continue**.
7.  Click **Finish**.

#### Expected Result:

The system should block the user from proceeding from the Cart page or display a validation error on Checkout Step 1 stating, "Your cart is empty."

#### Actual Result:

The system allows the user to complete the entire checkout process and displays the **"Checkout: Complete\!"** page, even though the cart contained zero items. This is a critical logic failure.


-----

### Defect 002: Critical Functional Failures with `problem_user` Data

  * **Test Case Reference:** TC-C-004 (Add to Cart Tests)
  * **Priority:** High
  * **Severity:** Major (Functional failure, data integrity issues)
  * **Environment:** Web UI (SauceDemo)

#### Steps to Reproduce (STR):

1.  Log in as `problem_user` / `secret_sauce`.
2.  Attempt to add all six products to the cart.
3.  Go to the Cart page (`/cart.html`).

#### Observed Defects (Actual Result):

  * **Inconsistent Add:** The "Add to Cart" button fails to add specific items (e.g., the Fleece Jacket).
  * **Non-Functional Remove:** Items that are successfully added cannot be removed from the Cart page.
  * **Incorrect Price:** Prices displayed on the Products page and Cart page are often wrong or inconsistent.
  * **Missing Item:** The item count in the cart badge is inconsistent with the items listed inside the cart.

#### Expected Result:

Despite the visual/image defects associated with the `problem_user`, the core functional logic of adding, removing, and displaying correct prices/items in the cart should remain functional.

-----

## Medium Priority / Major Defects

### Defect 003: Flow Defect - Inconsistent "Cancel" Button Redirection

  * **Test Case Reference:** TC-O-004 (Checkout Process Tests)
  * **Priority:** Medium
  * **Severity:** Major (Breaks expected user flow)
  * **Environment:** Web UI (SauceDemo)

#### Steps to Reproduce (STR):

1.  Log in as `standard_user` and add at least one item to the cart.
2.  Proceed to **Checkout: Your Information** (Step 1).
3.  Fill in required information and click **Continue** to reach **Checkout: Overview** (Step 2).
4.  Click the **Cancel** button on the Overview page.

#### Expected Result:

The user should be consistently redirected back to the **Cart page** (`/cart.html`), preserving the items currently selected.

#### Actual Result:

The Cancel button on the Overview page incorrectly redirects the user to the **Products/Inventory page** (`/inventory.html`).


-----

## Low Priority / Cosmetic Defects & API Risks

### API Risk 001: POST Endpoint Accepts Missing Mandatory Fields (Risk to Data Integrity)

  * **Test Case Reference:** API-P002 (API Testing Documentation)
  * **Priority:** High (Due to potential data integrity issues in a real environment)
  * **Severity:** Low (JSONPlaceholder is a mock API, but represents a major risk)
  * **Environment:** API (JSONPlaceholder - `POST /posts`)

#### Request Details:

```json
{
  "body": "This is a post without a title.",
  "userId": 1
}
```

#### Expected Status:

`400 Bad Request` (as a real API should reject mandatory fields).

#### Actual Status:

`201 Created`

#### Analysis / Recommendation:

The JSONPlaceholder API allows data creation (`201 Created`) even when the mandatory `title` field is omitted. While this is expected of the mock API, it highlights a critical **data integrity risk** that must be addressed and tested rigorously in a production environment.

-----

### Defect 004: Cosmetic Defect - Invalid Login Error Message Overlap

  * **Test Case Reference:** TC-L-004 (Login & Access Tests)
  * **Priority:** Low
  * **Severity:** Cosmetic/Minor
  * **Environment:** Web UI (SauceDemo)

#### Steps to Reproduce (STR):

1.  Log in with invalid credentials (e.g., `invalid_user` / `wrong_password`).

#### Expected Result:

The error message, "Epic sadface: Username and password do not match any user in this service," should be displayed clearly and completely below the login form.

#### Actual Result:

The expected error message is displayed, but the warning text **overlaps with the login form/fields**, obscuring part of the message and creating a poor user experience.

