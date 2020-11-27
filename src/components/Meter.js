import React, { useState, useEffect } from "react";
import { Line, Bar, Pie, Doughnut, HorizontalBar, } from "react-chartjs-2";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'



const Meter = () => {

    const [barchartData, setbarChartData] = useState({});
    const [myloading, setLoading] = useState([true]);




    //this is region captures 
    const meterCaps = () => {
        let meterCaptures = [];
        let meterType = [];
        let meterValue = [];

        const username = 'noura.dahiru'
        const password = 'a12345678'

        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

        axios
            .get("https://cavti.kedco.ng/centrak/api/v2/captures-by-metertype", { headers: { 'Authorization': `Basic ${token}` }, })
            .then(respose => {
                console.log(respose);
                for (const dataObj of respose.data) {
                    meterCaptures.push(parseInt(dataObj.meter_audit_captures));
                    meterType.push(dataObj.type_name);
                    meterValue.push(dataObj.value);

                }

                setbarChartData({
                    labels: meterType,
                    datasets: [
                        {
                            label: ['NON MD'],
                            backgroundColor: 'rgba(255,193,7)',
                            borderColor: 'rgba(60,141,188,0.8)',
                            pointRadius: false,
                            pointColor: '#3b8bba',
                            data: meterCaptures,
                            pointStrokeColor: 'rgba(60,141,188,1)',
                            pointHighlightFill: '#fff',
                            pointHighlightStroke: 'rgba(60,141,188,1)'
                        },
                        {
                            label: ['MD'],
                            backgroundColor: 'rgba(40, 167, 69)',
                            borderColor: 'rgba(210, 214, 222, 1)',
                            pointRadius: false,
                            pointColor: 'rgba(210, 214, 222, 1)',
                            pointStrokeColor: '#c1c7d1',
                            pointHighlightFill: '#fff',
                            pointHighlightStroke: 'rgba(220,220,220,1)',
                            data: meterCaptures
                        }
                    ]

                })
                setLoading(false);

            })
            .catch(err => {
                console.log(err);
            });
        console.log(meterCaptures, meterType, meterValue);
    };




    //using the functions
    useEffect(() => {
        meterCaps();

    }, []);
    return (
        <div className="content-wrapper">
           
            <br />
            {/* Info boxes */}

            <div>
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                {/* AREA CHART */}
                                {/* /.card */}
                                {/* DONUT CHART */}
                                <div className="">
                                    <div className="card-header">
                                        <h3 className="card-title">CAPTURE BY METER TYPE</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                                            </button>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
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

                            </div>
                            {/* /.col (LEFT) */}

                        </div>
                        {/* /.row */}
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>


        </div>

    );
};

export default Meter;
