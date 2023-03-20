# Documentation for expense-tracker-API  
*by mcdanang*  
&nbsp;  

Install required modules: `npm install`  
Start Server: `nodemon index.js`  
Set PORT at ".env" file: `PORT=2000`  
API URL: `localhost:2000/expenses`  

**Available HTTP Method:**  
- `GET`  
- `POST`  
- `PATCH` 
- `DELETE` 

## GET Method:
> **To get all expenses**  
- `localhost:2000/expenses`  
&nbsp;  
> **To get expenses by ID**  
- `localhost:2000/expenses/2`  
- `localhost:2000/expenses/99` 
&nbsp;  
> **To get expenses by category**  
- `localhost:2000/expenses?category=food`  
- `localhost:2000/expenses?category=transportation`  
&nbsp;  
> **To get expenses by date range**
- `localhost:2000/expenses?date_start=2023-02-18&date_end=2023-02-20`  
&nbsp;  
> **To get expenses by start/end date**
- `localhost:2000/expenses?date_start=2023-02-18`  
- `localhost:2000/expenses?date_end=2023-02-18`  
&nbsp;  
## POST Method:
> **Put into request body as JSON as following** ( *assume that we've got the formatted date* )  
&nbsp;{  
&nbsp;&nbsp;&nbsp;"date": "2023-03-19",  
&nbsp;&nbsp;&nbsp;"name": "mcd panas spesial",  
&nbsp;&nbsp;&nbsp;"nominal": 45000,  
&nbsp;&nbsp;&nbsp;"category": "food"  
&nbsp;}  

- `localhost:2000/expenses`  
&nbsp;  

## DELETE Method:  
### **Note: id param is mandatory** ( *will return 404 if not found* )  
> **To delete by ID**  
- `localhost:2000/expenses/7`  
- `localhost:2000/expenses/999`  
&nbsp;  

## PATCH Method:  
### **Note: id param is mandatory** ( *will return 404 if not found* )  

> **Put into request body as JSON as following**  
&nbsp;{  
&nbsp;&nbsp;"nominal": 25000  
&nbsp;}  

- `localhost:2000/expenses/2`  
&nbsp;  