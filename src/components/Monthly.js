import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import * as ReactBoostrap from 'react-bootstrap'
import { useResizeColumns } from 'react-table';
import Spinner from 'react-bootstrap/Spinner'
import ToolkitProvider, { CSVExport,Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import { Modal, Button } from 'react-bootstrap';
import filterFactory, { textFilter, dateFilter } from 'react-bootstrap-table2-filter';




const Monthly = () => {

  const [allcaps, setAllcaps] = useState([]);
  const [myloading, setLoading] = useState([true]);
  const [modalInfo , setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState([false]);
  const [show , setShow] = useState(false);
  const handleClose =()=> setShow(false);
  const handleShow = () => setShow(true);


  const getAllcaps = async () => {

    let username = 'noura';
    let password = 'Pass@1234';

    //get current Date 
    const CurrentYear= new Date().getFullYear();
    const CurrentMonth = new Date().getMonth();
    const CurrentTime = new Date().getHours();
    console.log(`10`+`00`)

    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    try {

      const data = await axios.get(
        "http://18.192.109.219/ht/api/load-readings/", 
        
        
        {

                params: {
                    month: `${CurrentMonth}`,
                    year:  `${CurrentYear}`,
                    hour:   `${`10`+`00`}`
                   },
              
          headers: { 
            'Authorization': `Basic ${token}`,
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
           'Access-Control-Allow-Credentials': true }, 
          
           }


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
      dataField: "pk", text: "SN",    sort: true
,      headerStyle: (column, colIndex) => {
        return { width: '50px' };
      }
    },
    { dataField: "transmission_station", text: "Transmission Station" ,   sort: true
  },
    { dataField: "feeder_name", text: "Feeder " ,   sort: true
   
  },
  { dataField: "hour", text: "hour" ,   sort: true, headerStyle: (column, colIndex) => {
    return { width: '50px' };
  }
  },
  { dataField: "date_for", text: "Date" ,   sort: true, headerStyle: (column, colIndex) => {
    return { width: '110px' };
  }
  },
  { dataField: "IA", text: "IA" ,   sort: true,   headerStyle: (column, colIndex) => {
    return { width: '50px' };
  }
  },
 { dataField: "IB", text: "IB" ,   sort: true,   headerStyle: (column, colIndex) => {
    return { width: '50px' };
  }
  },
  { dataField: "IC", text: "IC" ,   sort: true ,   headerStyle: (column, colIndex) => {
    return { width: '50px' };
  }
  },
  { dataField: "VA", text: "VA" ,   sort: true ,   headerStyle: (column, colIndex) => {
    return { width: '50px' };
  }
  },
  { dataField: "VB", text: "VB" ,   sort: true ,   headerStyle: (column, colIndex) => {
    return { width: '50px' };
  }
  },
  { dataField: "VC", text: "VC" ,   sort: true  ,   headerStyle: (column, colIndex) => {
    return { width: '50px' };
  }
  },
  { dataField: "power", text: "Power" ,   sort: true, headerStyle: (column, colIndex) => {
    return { width: '70px' };
  }
},
  { dataField: "power_factor", text: "Power Factor" ,   sort: true, headerStyle: ( colIndex) => {
    return { width: '150px' };
  }
  },
  { dataField: 'operations.time_in', text: " Total Time In" ,   sort: true
  },
  ,
  { dataField: 'operations.time_out', text: "Total Time Out" ,   sort: true
  },
  
  
  
  ];

  const rowEvents =
  {
    onClick: (e,row) =>
    {
    console.log(row);
    setModalInfo(row)
    toggleTrueFalse();
    },
  }
  const toggleTrueFalse = () =>
  {
    setShowModal(handleShow);
  };
  const ModalContent = () =>
  {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
          {modalInfo.operations.nature}

          </Modal.Title>

        </Modal.Header>
        <Modal.Body>
      <h3> Meter Details</h3>
      <ol>SN : {modalInfo.operations.nature}  </ol>
      <ol>Meter Number : {modalInfo.meter_number}  </ol>
      <ol>Meter Model : {modalInfo.meter_model}  </ol>
      <ol>Feeder : {modalInfo.feeder}  </ol>
      <ol>Region : {modalInfo.region}  </ol>
      <ol>Transformer : {modalInfo.transformer}  </ol>
      <ol>CSP : {modalInfo.csp}  </ol>
      <ol>Address : {modalInfo.house_number} {modalInfo.street} {modalInfo.town} ,{modalInfo.state}   </ol>
      




        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary"  onClick={handleClose}> Close   </Button>
        </Modal.Footer>

      </Modal>
    )
  }


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
        <button className="btn btn-success"    onClick={ handleClick }>Download Sheet</button>
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
                filter = {dateFilter}

              
              >
                {
                  props => (
                    <div>
                  <br/>
                <MyExportCSV { ...props.csvProps } />
                    <hr />
                    
        
        <hr />

                            <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'pink', border: '5px solid pink', padding: '0.5em' }}>
                            33KV FEEDER DATA COLLECTION              </h3>           
                      <BootstrapTable
                      
                      { ...props.baseProps }
                        rowStyle={{ backgroundColor: 'white' }}
                        keyField="id"
                        data={allcaps}
                        columns={columns}
                        pagination={paginationFactory()}
                        rowEvents={rowEvents}
                        filter={ filterFactory() }
                        



                      />{show ? <ModalContent/> : null}

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



export default Monthly;