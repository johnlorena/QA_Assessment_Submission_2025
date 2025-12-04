**Tool Used:** Postman (or equivalent API Client)

---

## 🧪 Test Case Matrix and Results

The following table summarizes the execution of all positive, negative, and edge test cases, demonstrating proper use of assertions for data integrity.

| Test ID | Endpoint | Method | Case Type | Test Description | Expected Status | Actual Status | Short Analysis / Result |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **API-G001** | `/users` | GET | Positive | Retrieve all users. | `200 OK` | 200 | **PASS**. Confirmed array structure and size (10 elements). Asserted presence of key properties. |
| **API-G002** | `/users` | GET | Edge | Use an invalid/ignored query parameter (e.g., `?limit=1`). | `200 OK` | 200 | **PASS**. API handled the unsupported parameter gracefully without failing (Edge case). |
| **API-G003** | `/users/1` | GET | Positive | Retrieve a specific user (ID 1). | `200 OK` | 200 | **PASS**. Verified structure is an object and the returned `id` matches the request. |
| **API-G004** | `/users/id` | GET | Negative | Retrieve a user with a non-existent ID (e.g., `/users/999`). | `404 Not Found` | 404 | **PASS**. Confirmed API correctly returns 404 for missing resources. |
| **API-P001** | `/posts` | POST | Positive | Create a new post with all mandatory fields. | `201 Created` | 201 | **PASS**. Resource successfully created and asserted that the returned `title` matches the requested `title`. |
| **API-P002** | `/posts` | POST | Negative | Attempt to create a post with the **title field missing**. | `400 Bad Request` | 201 | **FAIL**. API incorrectly returned **201 Created**. This is a Data Integrity Risk. |
| **API-U001** | `/posts/1` | PUT | Positive | Update the title and body of an existing post. | `200 OK` | 200 | **PASS**. Verified the updated `title` was correctly persisted and returned in the response. |
| **API-U002** | `/posts/id` | PUT | Edge | Attempt to update a non-existent post (e.g., `/posts/99999`). | `404 Not Found` | 404 | **PASS**. Confirmed API correctly handles attempts to modify a non-existent resource. |

---

## 📝 Request and Assertion Details

### 1. GET /users (Positive Case Example: API-G001)

* **Request URL:** `https://jsonplaceholder.typicode.com/users`
* **Request Body:** N/A
* **Key Assertions (Postman Script):**
    * `pm.response.to.have.status(200);`
    * `pm.expect(pm.response.json()).to.be.an('array');`
    * `pm.expect(pm.response.json().length).to.equal(10);`

### 2. POST /posts (Failure Case Example: API-P002)

* **Request URL:** `https://jsonplaceholder.typicode.com/posts`
* **Request Body (Sent Payload):**
    ```json
    {
      "body": "This post is intentionally missing a title.",
      "userId": 1
    }
    ```
* **Key Assertions (Postman Script):**
    * `pm.test("Status code is not 400 or 201", function () { ... });`
    * `pm.expect(pm.response.json().title).to.be.empty;` (Asserts the resulting title is empty, confirming the risk)

---

## ⚠️ Analysis and Key Risk

### **Primary Risk Identified: Data Validation Bypass (API-P002)**

The API failed to return the expected `400 Bad Request` when the mandatory **`title` field** was omitted from the `POST /posts` request. Instead, it returned a `201 Created` status with incomplete data.

* **Impact:** In a real application, this behavior poses a **critical data integrity risk**, allowing corrupt or incomplete records to be written to the database.
* **Action:** This issue is formally documented as **API Risk 001** in the `documentation/bug_reports.md` file.

This structured document, along with the exported Postman Collection (`api-testing/QA_Assessment_API_Collection.json`), fully covers your API testing deliverables.

---