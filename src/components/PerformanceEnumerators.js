import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import * as ReactBoostrap from 'react-bootstrap'
import { useResizeColumns } from 'react-table';
import Spinner from 'react-bootstrap/Spinner'
import ToolkitProvider, { CSVExport , Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import { Modal, Button } from 'react-bootstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';



const Regionalcaptures = () => {

  const [allcaps, setAllcaps] = useState([]);
  const [myloading, setLoading] = useState([true]);
 
 

  const getAllcaps = async () => {

    let username = 'noura.dahiru';
    let password = 'a12345678';
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    try {

      const data = await axios.get(
        "https://cavti.kedco.ng/meter-audit/api/v1/enumerators-performance/", { headers: { 'Authorization': `Basic ${token}` }, }


      );

      console.log(data);
      setAllcaps(data.data);
      setLoading(false);

    } catch (e) {

      console.log(e);



    }


  };



  const { ExportCSVButton } = CSVExport;
  const { SearchBar } = Search;
  const headerSortingStyle = { backgroundColor: '#c8e6c9' };



  const columns = [
    {
      dataField: "pk", text: "ID", sort: true
      , headerStyle: (column, colIndex) => {
        return { width: '50px' };
      },
      headerSortingStyle
    },
    {
      dataField: "username", text: "Username", sort: true
    },
    {
      dataField: "total_captures", text: "Total Captures", sort: true
    },
    {
      dataField: "captures_today", text: "Daily Captures", sort: true
    },
    {
      dataField: "captures_this_week", text: "Weekly Captures", sort: true
    },
    
    
    {
      dataField: "captures_this_month", text: " Monthly Captures", sort: true
    },


  ];

 

 

  useEffect(() => {

    getAllcaps();


  }, []);

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (



      <div>
        <p align="right">
          <button className="btn btn-success" onClick={handleClick}>Export Filtered/All </button>
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
                data={allcaps}
                columns={columns}
                exportCSV
                exportCSV={ { onlyExportFiltered: true, exportAll: false } }
                search

              >
                {
                  props => (
                    <div>
                      <br />
                      <MyExportCSV {...props.csvProps} />
                      <hr />
                      <h3>Search:</h3>
        <SearchBar 
          { ...props.searchProps}

           delay={ 1000 }
           placeholder="Search Captures"
          
         />
        <hr />
        <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>
      Enumerators Performance</h3>;
                     

                      <BootstrapTable
                        bootstrap4
                        {...props.baseProps}
                        rowStyle={{ backgroundColor: 'white' }}
                        keyField="id"
                        data={allcaps}
                        columns={columns}
                        pagination={paginationFactory()}
                        filter={ filterFactory() }
                        bordered={ false }



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



export default Regionalcaptures;
