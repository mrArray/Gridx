import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import * as ReactBoostrap from 'react-bootstrap'
import { useResizeColumns } from 'react-table';
import Spinner from 'react-bootstrap/Spinner'
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import { Modal, Button } from 'react-bootstrap';
import filterFactory, { textFilter, dateFilter,selectFilter } from 'react-bootstrap-table2-filter';









const LoadReadings = () => {

  const [GetLoadandOperationData, setLoadandOperation] = useState([]);
  const [myloading, setLoading] = useState([true]);


  




const GetLoadandOperation = async () => {

    let username = 'noura';
    let password = 'Pass@1234';


    // const CurrentDate = new Date().getUTCDate(); 

    //   console.log(CurrentDate)


    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    try {

      const data = await axios.get(
        "http://18.192.109.219/ht/api/load-readings/combo/?date_for=2020-11-25", 


        {
          headers: { 
            // params: {
              
            //   date_for: `${CurrentDay}`
            //  }, 
            'Authorization': `Basic ${token}`,
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
           'Access-Control-Allow-Credentials': true }, 

           }


      );


      console.log(data);
      setLoadandOperation(data.data);
      setLoading(false);

    } catch (e) {

      console.log(e);



    }


  };










  const { ExportCSVButton } = CSVExport;
  const { SearchBar } = Search;
  const headerSortingStyle = { backgroundColor: '#c8e6c9' };



  
const selectOptions = {
  '0000': '0000',
  '0100': '0100',
  '0300': '0300',
  '0400': '0400',
  '0500': '0500',
  '0600': '0600',
  '0700': '0700',
  '0800': '0800',
  '0900': '0900',
  '1000': '1000',
  '1100': '1100',
  '1200': '1200',
  '1300': '1300',
  '1400': '1400',
  '1500': '1500',
  '1600': '1600',
  '1700': '1700',
  '1800': '1800',
  '1900': '1900',
  '2000': '2000',
  '2100': '2100',
  '2200': '2200',
  '2300': '2300',
  '2400': '2400'
};
  
  const columns = [
    
    {
      dataField: "transmission_station", text: "Transmission Station ", sort: true

    },
    
    {
      dataField: "feeder_name", text: "Feeder ", sort: true

    },
    
    {
      dataField: "date_for", text: "Date", sort: true, headerStyle: (column, colIndex) => {
        return { width: '110px' };
      }
    },
    {
      dataField: "hour", text: "hour", sort: true,

      headerStyle: (column, colIndex) => {
        return { width: '110px' };
      },
      formatter: cell => selectOptions[cell],
  filter: selectFilter({
    options: selectOptions,
    defaultValue: 5
  })
     
    },
    {
      dataField: "IA", text: "IA", sort: true, headerStyle: (column, colIndex) => {
        return { width: '50px' };
      }
    },
    {
      dataField: "IB", text: "IB", sort: true, headerStyle: (column, colIndex) => {
        return { width: '50px' };
      }
    },
    {
      dataField: "IC", text: "IC", sort: true, headerStyle: (column, colIndex) => {
        return { width: '50px' };
      }
    },
    {
      dataField: "VA", text: "VA", sort: true, headerStyle: (column, colIndex) => {
        return { width: '50px' };
      }
    },
    {
      dataField: "VB", text: "VB", sort: true, headerStyle: (column, colIndex) => {
        return { width: '50px' };
      }
    },
    {
      dataField: "VC", text: "VC", sort: true, headerStyle: (column, colIndex) => {
        return { width: '50px' };
      }
    },
    {
      dataField: "power", text: "Power", sort: true, headerStyle: (column, colIndex) => {
        return { width: '70px' };
      }
    },
    {
      dataField: "power_factor", text: "Power Factor", sort: true, headerStyle: (colIndex) => {
        return { width: '150px' };
      }
    },
    {
      dataField: 'operations[0].time_out_0', text: "Time Out", sort: true
   
    },
    {
      dataField: 'operations[0].time_in_0', text: "Time In", sort: true
    },
    
    {
      dataField: 'operations[0].time_out_1', text: "Time Out", sort: true
   
    },
    {
      dataField: 'operations[0].time_in_1', text: "Time In", sort: true
    },
    {
      dataField: 'operations[0].time_out_2', text: "Time Out", sort: true
   
    },
    {
      dataField: 'operations[0].time_in_2', text: "Time In", sort: true
    },
    {
      dataField: 'operations[0].time_out_3', text: "Time Out", sort: true
   
    },
    {
      dataField: 'operations[0].time_in_3', text: "Time In", sort: true
    },
    {
      dataField: 'operations[0].time_out_4', text: "Time Out", sort: true
   
    },
    {
      dataField: 'operations[0].time_in_4', text: "Time In", sort: true
    },
    {
      dataField: 'operations[0].time_out_5', text: "Time Out", sort: true
   
    },
    {
      dataField: 'operations[0].time_in_5', text: "Time In", sort: true
    },
    {
      dataField: 'operations[0].time_out_6', text: "Time Out", sort: true
   
    },
    {
      dataField: 'operations[0].time_in_6', text: "Time In", sort: true
    },
    {
      dataField: 'operations[0].time_out_7', text: "Time Out", sort: true
   
    },
    {
      dataField: 'operations[0].time_in_7', text: "Time In", sort: true
    },
    {
      dataField: 'operations[0].time_out_8', text: "Time Out", sort: true
   
    }
    


  ];



  useEffect(() => {

    GetLoadandOperation();

  }, []);

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (



      <div>
        <p align="right">
          <button className="btn btn-success" onClick={handleClick}>Download Sheet</button>
        </p>
      </div>
    );
  };


  return (

    <div className="content-wrapper">

      <div className="card-body">
        <br />
        <br />


        <div className="dataTables_wrapper dt-bootstrap4" >

          {myloading ? (
            <>
              <center><Spinner animation="border" variant="primary" /></center>


            </>

          ) : (





              <ToolkitProvider
                keyField="id"
                data={GetLoadandOperationData}
                columns={columns}
                exportCSV
                exportCSV={{ onlyExportFiltered: true, exportAll: false }}
                search
                filter={dateFilter}


              >
                {
                  props => (
                    <div>
                      <br />
                      <MyExportCSV {...props.csvProps} />
                      <hr />


                      <hr />

                      <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'red', border: '1px solid red', padding: '0.5em' }}>
                         FEEDER DATA COLLECTION              </h3>

                             {/* <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "0000" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "0100" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "0200" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "0300" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "0400" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "0500" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "0600" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "0700" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "0800" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "0900" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "1000" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "1100" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "1200" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "1300" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "1400" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "1600" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "1700" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "1800" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "1900" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "2000" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "2100" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "2200" '}</button>
                             <button className="btn btn-lg btn-primary" onClick={ handleClick }>{' "2300" '}</button> */}
                             



                      <BootstrapTable

                        {...props.baseProps}
                        rowStyle={{ backgroundColor: 'white' }}
                        keyField="id"
                        data={GetLoadandOperationData}
                        columns={columns}  
                        pagination={paginationFactory()}
                        filter={filterFactory()}
                        wrapperClasses="table-responsive"
                       


                      />  


                      
                    </div>
                  )
                }
              </ToolkitProvider>


            )

          }




        </div>
      </div>
    </div>

  );

};



  


export default LoadReadings;