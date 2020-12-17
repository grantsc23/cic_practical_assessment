# CIC Assessment

Follow all instructions below to complete the assessment. 

## Installation

Each package should be installed before you start coding. Open **cic_practical_ass_001** and use the command yarn install to install the packages for that package. Do the same for **cic_practical_ass_002**.

```bash
yarn install
```



## Task 1 - Backend
Use the code template of **cic_practical_ass_002** to complete this task.

Consider the following tables:

```
QUIZ_TBL
-------------------
 [QUIZ_ID]
,[TITLE]
,[DATE_ADDED]
,[TIME_LIMIT_MIN]
,[RSTATUS]
,[DESCRIPTION]
,[URL]
,[CSIURL]
-------------------

QUIZ_ASSESS_EMP_TBL
-------------------
 [QUIZ_ASSESS_EMP_ID]
,[EMP_DETAIL_ID]
,[RSTATUS]
,[QUIZ_ID]
,[QUIZ_ASSESSMENT_ID]
,[LOADED]
,[COMPLETED]
,[DATE_COMPLETED]
,[MARKED]
,[DATE_MARKED]
,[SCORE]
,[TIME_COMPLETED_MINS]
,[TOTAL_TIME]
,[DEPARTMENT_ID]
,[SHEDULED_DATE]
,[TEAM_ID]
,[TEAM_LEADER_ID]
------------------
```

Write a SQL query that will join these two tables by the **QUIZ_ID** field. Return the Title renamed as QuizTitle and an average of the score named as AverageScore.

***NOTE:*** if the RSTATUS is inactive, the record is disregarded by the user I.E deleted. Filter out all Inactive RSTATUS in both tables.

Your query should be inserted here:
```JavaScript
const query = `
    --Query comes here--
`;
```





## Task 2 - Frontend
Use the code template of **cic_practical_ass_001** to complete this task.

### GFV
Volkswagen provides a service called Guaranteed Future Value: A vehicle is provided to a customer at a low price. The condition is that the vehicle has to be returned after 3 years with less than 45000 KM. If the customer is in danger of breeching his/her contract, a warning has to be flagged against his profile and a call has to be made to the customer.

In the Repo there is a file called GFV Assessment Data.csv.
All the vehicles has been serviced on the 15th of December 2020.
Complete the application to display the data in this file in a Bootstrap table.
The React Component ***VehicleTable*** should be completed:

```JavaScript
const VehicleTable: React.FC<{ data: Array<any> }> = (props) => {
  return (
    <Table>
      {/** TODO: CODE COMES HERE */}
    </Table>
  );
};
```

Display all fields in the data array, and an extra field that show if a warning flagged or not. The warning should be a green tick if it is lower than the Average Mileage its suppose to be or a Cross if its exceeding the average mileage.

***IMPORTANT:*** in order to acheive this you need to calculate the daily recommend mileage, multiplied by how long the customer had the car till the service date, then compare that to the recorded mileage.