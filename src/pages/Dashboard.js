import React from "react";
import CreateTaskCard from "../components/CreateTaskCard";
import Table from "../components/Table";
import SimpleCard from "../components/SimpleCard";
import "../css/Dashboard.css"

function Dashboard(){
    let head = ["value1", "value2", "value3"]
    let rows = [
        { name: "task1", time: "11-11-2011", status:"Running" },
    ];
    let ip = "123.12.12.123"
    let data = {
        user: "user1",
        accept: true,
        capacity: 100
    }

    const issuedTable = <Table
        heads = {head}
        rows = {rows}
    />

    const selfTable = <Table
        heads = {head}
        rows = {rows}
    />

    const generalInfo = (<React.Fragment>
        <p className="grey">Username: {data.user}</p>
        <p className="grey">{data.accept === true ? "Accepting Incoming Requests" : "Not accepting Incoming Requests"}</p>
        <p className="grey">Maximum workload capacity: {data.capacity}</p>
    </React.Fragment>)

    return(
        <div>
            <div className="page-title-row rows">
                <span className="title page-title">
                    Dashboard
                </span>
                <span id="" className="title">
                    IP Address: {ip}
                </span>
            </div>
            <div className="rows" id="dashboard-row1">
                <SimpleCard 
                    id="create-tasks"
                    title = "Create Tasks"
                    childComponent = {<CreateTaskCard/>}
                />
                
                <SimpleCard
                    id="general-info"
                    title = "General Information"
                    childComponent = {generalInfo}
                />
            </div>
            
            <div className="rows" id="dashboard-row2">
                <SimpleCard
                    id="outward-tasks"
                    title = "Outward Tasks"
                    childComponent = {issuedTable}
                />
                <SimpleCard
                    id="inward-tasks"
                    title = "Inward Tasks"
                    childComponent = {selfTable}
                />
            </div>

        </div>
    )
}

export default Dashboard;