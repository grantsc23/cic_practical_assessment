import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Tab, Table } from 'react-bootstrap';
import Papa from 'papaparse';
import moment from 'moment';




const VehicleTable: React.FC<{ data: Array<any> }> = (props) => {
  return (
    <Table>
      {/** TODO: CODE COMES HERE */}
    </Table>
  );
};




const App: React.FC = () => {

  const [data, setData] = useState<Array<any>>([]);


  const fileChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // intercept dates and convert them to date objects:
    const convertDateStringsToDates = (input: any) => {
      // Ignore things that aren't objects.
      if (typeof input !== "object") return input;

      for (var key in input) {
        if (!input.hasOwnProperty(key)) continue;

        var value = input[key];
        // Check for string properties which look like dates.
        if (typeof value === "string" && (moment(value, 'dd.MM.yyyy').isValid())) {
          input[key] = moment(value, 'dd.MM.yyyy').toDate();
        } else if (typeof value === "object") {
          // Recurse into object
          convertDateStringsToDates(value);
        }
      }
    };
    if(e.target.files) {
      Papa.parse(e.target.files[0], {
        header: true,
        complete: (result) => {
          if(result && result.data && result.data.length > 0) {
            convertDateStringsToDates(result.data);
          }
          setData(result.data);
        }
      });
    }
  };



  return (
    <React.Fragment>
      <h2>Vehicle Details</h2>
      <p className="lead m-3">VW and Audi vehicles.</p>
      <input type="file" accept=".csv" onChange={(e) => fileChanged(e)} />
      <br />
      <VehicleTable data={data} />
    </React.Fragment>
  );
}

export default App;
