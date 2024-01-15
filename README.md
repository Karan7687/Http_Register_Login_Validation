# Http_Register_Login_Validation
This repository contains a simple Express.js application for managing employee data .The GET,POST and PUT requests  are used to REGISTER,LOGIN and UPDATE data from database respectively.
Register Endpoint (/register):

Handles **POST requests** for registering employees.
Logs employee details (Employee ID, Employee Name, and Employee Salary) to a JSON file named Database.json.
Responds with a confirmation message.
Login Endpoint (/login):

Handles **GET requests** for employee login.
Reads employee data from Database.json and compares it with the provided credentials.
Outputs success or failure messages based on the comparison.
Update ID Endpoint (/updateId):

Handles **PUT requests** to update employee IDs.
Reads existing data from Database.json, updates the Employee ID, and writes back to the file.
Responds with a success message.
