import React, { useState, useEffect } from "react";
import { Line, Bar, Pie, Doughnut, HorizontalBar } from "react-chartjs-2";
import axios from "axios";

import Spinner from 'react-bootstrap/Spinner'


const Feeder = () => {

    const [chartData, setPietData] = useState({});
    const [myloading, setLoading] = useState([true]);



    const feederCap = () => {
        let piecaptures = [];
        let piefeeder = [];

        const username = 'noura.dahiru'
        const password = 'a12345678'

        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

        axios
            .get("https://cavti.kedco.ng/centrak/api/v2/captures-by-feeder/", { headers: { 'Authorization': `Basic ${token}` }, })
            .then(respose => {
                console.log(respose);
                for (const dataObj of respose.data) {
                    piecaptures.push(parseInt(dataObj.meter_audit_captures));
                    piefeeder.push(dataObj.feeder_name);
                }

                setPietData({
                    labels: piefeeder,
                    datasets: [
                        {
                            label: 'Feeders',
                            data: piecaptures,
                            backgroundColor: [
                                '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954', '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#f56954', '#00a65a', '#f39c12', '#00c0ef',
                                '#f56954'
                            ]


                        }
                    ]
                })
                setLoading(false);

            })
            .catch(err => {
                console.log(err);
            });
        console.log(piefeeder, piecaptures);
    };



    //using the functions
    useEffect(() => {
        feederCap();
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
                        </div>

                        <div className="col-md-12">

                            <div className="">
                                <div className="card-header">
                                    <h3 className="card-title">CAPTURE BY FEEDER</h3>
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
                                                <HorizontalBar
                                                    data={chartData}

                                                />
                                            )}



                                    </div>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}

                        </div>


                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>


        </div>

    );
};

export default Feeder;







