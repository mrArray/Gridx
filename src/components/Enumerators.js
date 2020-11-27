import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import * as ReactBoostrap from 'react-bootstrap'
import { useResizeColumns } from 'react-table';
import Spinner from 'react-bootstrap/Spinner'
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import { Modal, Button } from 'react-bootstrap';


const Enumerators = () => {

    const [allcaps, setAllcaps] = useState([]);
    const [myloading, setLoading] = useState([true]);
    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState([false]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [totalCaptures, setTotal] = useState([]);



    const totalCaps = () => {

        const username = 'noura.dahiru'
        const password = 'a12345678'
        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

        axios
            .get("https://cavti.kedco.ng/meter-audit/api/v1/enumerators/", { headers: { 'Authorization': `Basic ${token}` }, })
            .then(res => {
                console.log(res);
                const totalCaptures = res.data.length;
                setTotal(totalCaptures);
                setLoading(false);

            });
    }






    const getAllcaps = async () => {

        let username = 'noura.dahiru';
        let password = 'a12345678';
        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
        try {

            const data = await axios.get(
                "https://cavti.kedco.ng/meter-audit/api/v1/enumerators/", { headers: { 'Authorization': `Basic ${token}` }, }


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
            dataField: "id", text: "SN", sort: true
            , headerStyle: (column, colIndex) => {
                return { width: '50px' };
            },
            headerSortingStyle
        },
        {
            dataField: "meter_number", text: "Meter Numbers", sort: true
        },
        {
            dataField: "feeder", text: "Feeders", sort: true
        },
        {
            dataField: "transformer", text: "Transformers", sort: true
        },
        {
            dataField: "region", text: "Regions", sort: true
        },
        {
            dataField: "csp", text: "CSP", sort: true
            , headerStyle: (column, colIndex) => {
                return { width: '150px' };
            }
        },
        {
            dataField: "phone_number", text: "Phone Number", sort: true
        },

        { dataField: "house_number", text: "Customer Address" }

    ];


    const rowEvents =
    {
        onClick: (e, row) => {
            console.log(row);
            setModalInfo(row)
            toggleTrueFalse();
        },
    }
    const toggleTrueFalse = () => {
        setShowModal(handleShow);
    };
    const ModalContent = () => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalInfo.phone_number}

                    </Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <h3> Meter Details</h3>
                    <ol>SN : {modalInfo.id}  </ol>
                    <ol>Meter Number : {modalInfo.meter_number}  </ol>
                    <ol>Meter Model : {modalInfo.meter_model}  </ol>
                    <ol>Feeder : {modalInfo.feeder}  </ol>
                    <ol>Region : {modalInfo.region}  </ol>
                    <ol>Transformer : {modalInfo.transformer}  </ol>
                    <ol>CSP : {modalInfo.csp}  </ol>
                    <ol>Address : {modalInfo.house_number} {modalInfo.street} {modalInfo.town} ,{modalInfo.state}   </ol>





                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}> Close   </Button>
                </Modal.Footer>

            </Modal>
        )
    }

    useEffect(() => {

        getAllcaps();
        totalCaps();

    }, []);

    const MyExportCSV = (props) => {
        const handleClick = () => {
            props.onExport();
        };
        return (

            <div>
                <p align="right">
                    <button className="btn btn-success" onClick={handleClick}>Export to CSV</button>
                </p>
            </div>
        );
    };


    return (

        <div className="content-wrapper">
            <br />

            {/* Info boxes */}
            <div className="row">
                <div className="col-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-warning"><i className="ion ion-stats-bars" /></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Total Captures</span>
                            <span className="info-box-number">
                                <div>
                                    {myloading ? (
                                        <Spinner animation="grow" size="sm" variant="success" />


                                    ) : (
                                            (totalCaptures)

                                        )}

                                </div>

                            </span>
                        </div>
                        {/* /.info-box-content */}
                    </div>
                    {/* /.info-box */}
                </div>
                {/* /.col */}


                <div className="card-body">
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
                                                    {...props.searchProps}

                                                    delay={1000}
                                                    placeholder="Search Captures"

                                                />
                                                <hr />
                                                <div class="col-sm-12 btn btn-primary">
                                                    Regional Captures Data                     </div>

                                                <BootstrapTable

                                                    {...props.baseProps}
                                                    rowStyle={{ backgroundColor: 'white' }}
                                                    keyField="id"
                                                    data={allcaps}
                                                    columns={columns}
                                                    pagination={paginationFactory()}
                                                    rowEvents={rowEvents}

                                                />
                                                {show ? <ModalContent /> : null}

                                            </div>
                                        )
                                    }
                                </ToolkitProvider>


                            )

                        }




                    </div>
                </div>
            </div>
                        </div>
  );

};


export default Enumerators;


























