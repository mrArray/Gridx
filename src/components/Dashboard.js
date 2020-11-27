import React, { useState, useEffect } from "react";
import { Line, Bar, Pie, Doughnut, HorizontalBar, } from "react-chartjs-2";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'
import { Redirect } from 'react-router-dom';




const Dashboard = () => {

  const [barchartData, setbarChartData] = useState({});
  const [totalCaptures, setTotal] = useState([]);
  const [myloading, setLoading] = useState([true]);


  const totalCaps = () => {

    const username = 'noura.dahiru'
    const password = 'a12345678'
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

    axios
      .get("https://cavti.kedco.ng/centrak/api/v2/captures-statistics/", { headers: { 'Authorization': `Basic ${token}` }, })
      .then(res => {
        console.log(res);
        const totalCaptures = res.data.result.data;
        setTotal(totalCaptures);
        setLoading(false);

      });
  }

 
 
  //this is region captures 
  const regionCap = async () => {
    let amount = [];
    let region = [];

    const username = 'noura.dahiru'
    const password = 'a12345678'

    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

    await axios
      .get("https://cavti.kedco.ng/centrak/api/v2/captures-by-regions", { headers: { 'Authorization': `Basic ${token}` }, })
      .then(respose => {
        console.log(respose);
        for (const dataObj of respose.data) {
          amount.push(parseInt(dataObj.meter_audit_captures));
        }

        setbarChartData({
          labels: ['00:00','01:00','0200','0300','0400','0500','0600','0700','0800','0900','1000','1100','1200','1300',
          '1400','1500','1600','1700','1800','1900','2000','2100','2200','2300'],
          datasets: [
            {
              label: 'Load Sheeding',
              backgroundColor: 'rgba(60,141,188,0.9)',
              borderColor: 'rgba(60,141,188,0.8)',
              pointRadius: false,
              pointColor: '#3b8bba',
              data: amount,
              pointStrokeColor: 'rgba(60,141,188,1)',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(60,141,188,1)'
            },
            {
              label: 'Meters in Region',
              backgroundColor: 'rgba(210, 214, 222, 1)',
              borderColor: 'rgba(210, 214, 222, 1)',
              pointRadius: false,
              pointColor: 'rgba(210, 214, 222, 1)',
              pointStrokeColor: '#c1c7d1',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(220,220,220,1)',
              data: amount,
            },
            {
              label: 'Meters Captured',
              backgroundColor: 'rgba(60,141,188,0.9)',
              borderColor: 'rgba(60,141,188,0.8)',
              pointRadius: false,
              pointColor: '#3b8bba',
              data: amount,
              pointStrokeColor: 'rgba(60,141,188,1)',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(60,141,188,1)'
            },
            {
              label: 'Meters in Region',
              backgroundColor: 'rgba(210, 214, 222, 1)',
              borderColor: 'rgba(210, 214, 222, 1)',
              pointRadius: false,
              pointColor: 'rgba(210, 214, 222, 1)',
              pointStrokeColor: '#c1c7d1',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(220,220,220,1)',
              data: amount,
            },{
              label: 'Meters Captured',
              backgroundColor: 'rgba(60,141,188,0.9)',
              borderColor: 'rgba(60,141,188,0.8)',
              pointRadius: false,
              pointColor: '#3b8bba',
              data: amount,
              pointStrokeColor: 'rgba(60,141,188,1)',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(60,141,188,1)'
            },
            {
              label: 'Meters in Region',
              backgroundColor: 'rgba(210, 214, 222, 1)',
              borderColor: 'rgba(210, 214, 222, 1)',
              pointRadius: false,
              pointColor: 'rgba(210, 214, 222, 1)',
              pointStrokeColor: '#c1c7d1',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(220,220,220,1)',
              data: amount,
            }
          ]

          
        })
        setLoading(false);


      })

      .catch(err => {
        console.log(err);
      });
    console.log(amount, region);

  };


 

 

  //using the functions
  useEffect(() => {
   
    regionCap();
   
    totalCaps();


  }, []);


  if (!localStorage.getItem('user')) {
    return (<Redirect to={'/'} />)
}

  return (

    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          {/* Info boxes */}
          <br/>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box">
                <span className="info-box-icon bg-info elevation-1"><i className="fas fa-line-chart" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">CPU Traffic</span>
                  <span className="info-box-number">
                    10
              <small>%</small>
                  </span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-line-chart" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">41,410</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            {/* fix for small devices only */}
            <div className="clearfix hidden-md-up" />
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-success elevation-1"><i className="fas fa-line-chart" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Sales</span>
                  <span className="info-box-number">760</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-12 col-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-line-chart" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">New Members</span>
                  <span className="info-box-number">2,000</span>
                </div>
                {/* /.info-box-content */}
                </div>
                </div>
                </div>

         <div className="">
                                    <div className="card-header">
                                        <h3 className="card-title" color="blue"><b >Operations </b></h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget=""><i className="" />
                                            </button>
                                            <button type="button" className="btn btn-tool" data-card-widget=""><i className="" /></button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        {myloading ? (
                                            <>
                                                    <center><Spinner animation="border" variant="primary" /></center>
                                                </>

                                            


                                        ) : (
                                            <Bar
                                                data={barchartData}
                                                barChartOptions={{
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                    datasetFill: false
                                                }}

                                            />
                                                
                                            )}
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}


              
        </div>{/*/. container-fluid */}
      </section>

      {/* /.content */}
    </div>


  );
};

export default Dashboard;
