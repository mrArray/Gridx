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




const Hourly = () => {

  const [getLr, setLr] = useState([]);
  const [getOp, setOp] = useState([]);

  const [myloading, setLoading] = useState([true]);


  const GetLoadReadings = async () => {

    let username = 'noura';
    let password = 'Pass@1234';

    //get current Date 
    const CurrentYear = new Date().getFullYear();
    const CurrentMonth = new Date().getMonth();
    const CurrentTime = new Date().getHours();
    console.log(`10` + `00`)

    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    try {

      const data = await axios.get(
        "http://18.192.109.219/ht/api/load-readings/",


        {

          // params: {
          //     month: `${CurrentMonth}`,
          //     year:  `${CurrentYear}`,
          //     hour:   `${`10`+`00`}`
          //    },

          headers: {
            'Authorization': `Basic ${token}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
            'Access-Control-Allow-Credentials': true
          },

        }


      );


      console.log(data);
      setLr(data.data);
      setLoading(false);

    } catch (e) {

      console.log(e);



    }


  };



  const GetOperations = async () => {

    let username = 'noura';
    let password = 'Pass@1234';

    //get current Date 
    const CurrentYear = new Date().getFullYear();
    const CurrentMonth = new Date().getMonth();
    const CurrentTime = new Date().getHours();
    console.log(`10` + `00`)

    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    try {

      const data = await axios.get(
        "http://18.192.109.219/ht/api/load-readings/",


        {

          // params: {
          //     month: `${CurrentMonth}`,
          //     year:  `${CurrentYear}`,
          //     hour:   `${`10`+`00`}`
          //    },

          headers: {
            'Authorization': `Basic ${token}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS',
            'Access-Control-Allow-Credentials': true
          },

        }


      );


      console.log(data);
      setOp(data.data);
      setLoading(false);

    } catch (e) {

      console.log(e);



    }


  };




  const renderHeader = () => {
    let headerElement = ['id', 'feeder', 'hour', 'date', 'power', 'power factor']

    return headerElement.map((key, index) => {
      return <th className="sorting_asc" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-sort="ascending" key={index}>{key.toUpperCase()}</th>
    })
  }



  const renderBody = () => {

    return getLr && getLr.map(({ pk, feeder_name, hour, date, power, power_factor }) => {
      return (
        <tr key={pk}>
          <td>{pk}</td>

          <td>{feeder_name}</td>

          <td>{hour}</td>
          <td>{date}</td>
          <td>{power}</td>
          <td> {power_factor}
          </td>
        </tr>
      )
    })
  }

  useEffect(() => {

    GetLoadReadings();
    GetOperations();


  }, []);




  return (
    <div className="content-wrapper">

    <br/>
    <br/>

      {
        myloading ? (
          <>
            <center><Spinner animation="border" variant="primary" /></center>


          </>

        ) : (
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Fixed Header Table</h3>
                  <div className="card-tools">
                    <div className="input-group input-group-sm" style={{ width: 150 }}>
                      <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body table-responsive p-0" style={{ height: 300 }}>
                  <table className="table table-head-fixed text-nowrap">
                    <thead>
                      <tr>
                        <th>feeder</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{getLr.feeder_name}</td>
                        <td>John Doe</td>
                        <td>11-7-2014</td>
                        <td><span className="tag tag-success">Approved</span></td>
                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                      </tr>
                      <tr>
                        <td>219</td>
                        <td>Alexander Pierce</td>
                        <td>11-7-2014</td>
                        <td><span className="tag tag-warning">Pending</span></td>
                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                      </tr>
                      <tr>
                        <td>657</td>
                        <td>Bob Doe</td>
                        <td>11-7-2014</td>
                        <td><span className="tag tag-primary">Approved</span></td>
                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                      </tr>
                      <tr>
                        <td>175</td>
                        <td>Mike Doe</td>
                        <td>11-7-2014</td>
                        <td><span className="tag tag-danger">Denied</span></td>
                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                      </tr>
                      <tr>
                        <td>134</td>
                        <td>Jim Doe</td>
                        <td>11-7-2014</td>
                        <td><span className="tag tag-success">Approved</span></td>
                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                      </tr>
                      <tr>
                        <td>494</td>
                        <td>Victoria Doe</td>
                        <td>11-7-2014</td>
                        <td><span className="tag tag-warning">Pending</span></td>
                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                      </tr>
                      <tr>
                        <td>832</td>
                        <td>Michael Doe</td>
                        <td>11-7-2014</td>
                        <td><span className="tag tag-primary">Approved</span></td>
                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                      </tr>
                      <tr>
                        <td>982</td>
                        <td>Rocky Doe</td>
                        <td>11-7-2014</td>
                        <td><span className="tag tag-danger">Denied</span></td>
                        <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>

          )}
    </div>
  );

};



export default Hourly;