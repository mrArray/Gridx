

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

      //get current Date 
      const CurrentYear= new Date().getFullYear();
      const CurrentMonth = new Date().getMonth();
      const fulldate = new Date().getDate();
      const CurrentDay = new Date().getDate();

      console.log(fulldate)
      console.log(CurrentYear)
      console.log(CurrentMonth)
      console.log(CurrentDay)




    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    try {

      const data = await axios.get(
        "http://18.192.109.219/ht/api/load-readings/combo/?date_for=2020-11-25", 


        {
          headers: { 
            params: {
              
              date_for: `${CurrentDay}`
             }, 
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
      dataField: "pk", text: "SN", sort: true
      , headerStyle: (column, colIndex) => {
        return { width: '50px' };
      }
    },
    
    {
      dataField: "feeder_name", text: "Feeder ", sort: true

    },
    {
      dataField: "hour", text: "hour", sort: true,
      formatter: cell => selectOptions[cell],
  filter: selectFilter({
    options: selectOptions,
    defaultValue: 5
  })
     
    },
    {
      dataField: "date_for", text: "Date", sort: true, headerStyle: (column, colIndex) => {
        return { width: '110px' };
      }
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
      dataField: 'operations.time_out_0', text: "Time In", sort: true
    },
    ,
    {
      dataField:" operations.data.time_out_0", text: "Time Out", sort: true
   
    },



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
import filterFactory, { textFilter, dateFilter } from 'react-bootstrap-table2-filter';




const LoadReadings = () => {

  const [GetLoadandOperationData, setLoadandOperation] = useState([]);
  const [myloading, setLoading] = useState([true]);




  const GetLoadandOperation = async () => {

    const username = 'noura'
    const password = 'Pass@1234'
    const CurrentYear = new Date().getFullYear();
    const CurrentMonth = new Date().getMonth();
    const Currenthour = new Date().getHours();
    console.log(Currenthour)
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')


    let one =
        "http://18.192.109.219/ht/api/operations/";
    let two =
        "http://18.192.109.219/ht/api/load-readings/?hour=1000&date_for=2020-11-24";

    const requestOne = axios.get(one, {
        headers: {

            // params: {
            //     month: `${CurrentMonth}`,
            //     year: `${CurrentYear}`,
            //     hour: `${`10` + `00`}`
            // },
            'Authorization': `Basic ${token}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
            'Access-Control-Allow-Credentials': true
        },

    });
    const requestTwo = axios.get(two, {
        headers: {

            params: {
                // month: `${CurrentMonth}`,
                // year: `${CurrentYear}`,
                // hour: `${`10` + `00`}`
            },
            'Authorization': `Basic ${token}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
            'Access-Control-Allow-Credentials': true
        },

    });

    axios
        .all([requestOne, requestTwo])
        .then(
            axios.spread((...responses) => {
                const responseOne = responses[0].data;
                const responseTwo = responses[1].data;

                Array.prototype.push.apply(responseOne,responseTwo); 

                  console.log(responseOne)
             
                  setLoadandOperation(responseOne)

                
               
                // use/access the results
            })
        )
        .catch(errors => {
            // react on errors.
            console.error(errors);
        });

};




  const { ExportCSVButton } = CSVExport;
  const { SearchBar } = Search;
  const headerSortingStyle = { backgroundColor: '#c8e6c9' };



  const columns = [
    {
      dataField: "nature", text: "Nature", sort: true
    },

    {
      dataField: "pk", text: "SN", sort: true
      , headerStyle: (column, colIndex) => {
        return { width: '50px' };
      }
    },
    {
      dataField: "transmission_station", text: "Transmission Station", sort: true
    },
    {
      dataField: "feeder_name", text: "Feeder ", sort: true

    },
    {
      dataField: "hour", text: "hour", sort: true, headerStyle: (column, colIndex) => {
        return { width: '50px' };
      }
    },
    {
      dataField: "date_for", text: "Date", sort: true, headerStyle: (column, colIndex) => {
        return { width: '110px' };
      }
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
      dataField: 'time_in', text: " Total Time In", sort: true
    },
    ,
    {
      dataField: 'operations.time_out', text: "Total Time Out", sort: true
    },



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

                      <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'pink', border: '5px solid pink', padding: '0.5em' }}>
                        33KV FEEDER DATA COLLECTION              </h3>
                      <BootstrapTable

                        {...props.baseProps}
                        rowStyle={{ backgroundColor: 'white' }}
                        keyField="id"
                        data={GetLoadandOperationData.data}
                        columns={columns}
                        pagination={paginationFactory()}
                        filter={filterFactory()}




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










// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Api = () => {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     const username = 'noura.dahiru'
//     const password = 'a12345678'
//     const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
//    axios
//    .get("https://cavti.kedco.ng/centrak/api/v2/captures-by-state",  { headers: {  'Authorization': `Basic ${token}` }, })
//    .then(res => {
//       const photos = res.data;
//       setPhotos(photos);
//     });
//   }, []);

//   return (
//     <div>
//       <ul>
//         {photos.map(photo => (
//           <li key={photo.id}>

//             {photo.captures}, {photo.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Api;


const GetLoadandOperation = async () => {

    const username = 'noura'
    const password = 'Pass@1234'
    const CurrentYear = new Date().getFullYear();
    const CurrentMonth = new Date().getMonth();
    const Currenthour = new Date().getHours();
    console.log(Currenthour)
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')



    let one =
        "http://18.192.109.219/ht/api/operations/";
    let two =
        "http://18.192.109.219/ht/api/load-readings/?hour=1000&date_for=2020-11-24";

    const requestOne = axios.get(one, {
        headers: {

            // params: {
            //     month: `${CurrentMonth}`,
            //     year: `${CurrentYear}`,
            //     hour: `${`10` + `00`}`
            // },
            'Authorization': `Basic ${token}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
            'Access-Control-Allow-Credentials': true
        },

    });
    const requestTwo = axios.get(two, {
        headers: {

            params: {
                // month: `${CurrentMonth}`,
                // year: `${CurrentYear}`,
                // hour: `${`10` + `00`}`
            },
            'Authorization': `Basic ${token}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
            'Access-Control-Allow-Credentials': true
        },

    });

    axios
        .all([requestOne, requestTwo])
        .then(
            axios.spread((...responses) => {
                const responseOne = responses[0].data;
                const responseTwo = responses[1].data;

                const dataOne= responseOne[0];
                const dataTwo= responseTwo[1];


                Promise.all([dataOne, dataTwo]).then((values) => {
                    console.log(values);


                     setLoadandOperation(values)
                });
                // use/access the results
            })
        )
        .catch(errors => {
            // react on errors.
            console.error(errors);
        });

};












// import React, { Component } from 'react';
 
// const API = 'https://hn.algolia.com/api/v1/search?query=';
// const DEFAULT_QUERY = 'redux';
 
// class App extends Component {
//   constructor(props) {
//     super(props);
 
//     this.state = {
//       hits: [],
//     };
//   }
 
//   componentDidMount() {
//     fetch(API + DEFAULT_QUERY)
//       .then(response => response.json())
//       .then(data => this.setState({ hits: data.hits }));
//   }
 
//   render() {
//     const { hits } = this.state;
 
//     return (
//       <ul>
//         {hits.map(hit =>
//           <li key={hit.objectID}>
//             <a href={hit.url}>{hit.title}</a>
//           </li>
//         )}
//       </ul>
//     );
//   }
// }
// }
// export default App;

 
