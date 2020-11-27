import React, { useState, useEffect } from "react";
import { Line, Bar, Pie, Doughnut, HorizontalBar, } from "react-chartjs-2";
import axios from "axios";

import Spinner from 'react-bootstrap/Spinner'





const State = () => {


    const [donutchartData, setdonutData] = useState({});
    const [myloading, setLoading] = useState([true]);



    //this is state capture
    const stateCap = () => {
        let amountOfcaptures = [];
        let capturesByregion = [];
        const username = 'noura.dahiru'
        const password = 'a12345678'

        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

        axios
            .get("https://cavti.kedco.ng/centrak/api/v2/captures-by-state", { headers: { 'Authorization': `Basic ${token}` }, })
            .then(res => {
                console.log(res);
                for (const dataObj of res.data) {
                    amountOfcaptures.push(dataObj.title);
                    capturesByregion.push(parseInt(dataObj.meter_audit_captures));
                }

                setdonutData({
                    labels: amountOfcaptures,
                    datasets: [
                        {
                            data: capturesByregion,
                            backgroundColor: ['#007bff', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
                        }
                    ]
                })
                setLoading(false);

            })
            .catch(err => {
                console.log(err);
            });
        console.log(amountOfcaptures, capturesByregion);
    };


    //using the functions
    useEffect(() => {
        stateCap();
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

                                <div className="col-md-12">
                                    {/* LINE CHART */}
                                    <div className="">
                                        <div className="card-header">
                                            <h3 className="card-title">CAPTURE BY STATE</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="chart">

                                                {myloading ? (

                                                    <>
                                                        <center><Spinner animation="border" variant="primary" /></center>
                                                    </>



                                                ) : (
                                                        <Doughnut
                                                            data={donutchartData}
                                                            donutOptions={{
                                                                maintainAspectRatio: false,
                                                                responsive: true,

                                                            }}
                                                        />

                                                    )}
                                            
                                        </div>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}


                                </div>

                            </div>

                        </div>
                        {/* /.row */}
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>


        </div>

    );
};

export default State;
