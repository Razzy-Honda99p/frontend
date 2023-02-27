import React from "react";
import Block from "../components/Blocks";
import StatisticsCard from "../components/StatisticsCard";
import "../css/GlobalView.css"

function GlobalView(props){
    let data = {
        numDevice: 4,
        numJobs: 1,
        jobStatus: 35.5,
        avgTime: 2.37,
        blocks: [
            {
                username: "name1",
                nonce: 1,
                data: "",
                prev: "",
            },
            {
                username: "name2",
                nonce: 2,
                data: "",
                prev: "",
            },
            {
                username: "name3",
                nonce: 3,
                data: "",
                prev: "",
            },
            {
                username: "name4",
                nonce: 4,
                data: "",
                prev: "",
            }
        ]
    }

    const blocks = data.blocks.map((block, index)=>(
        <Block
            key={index}
            username = {block.username}
            nonce = {block.nonce}
            data = {block.data}
            prev = {block.prev}
        />
    ))


    return(
        <div>
            <div className="page-title-row rows">
                <span className="title page-title">Global View</span>
            </div>
            
            <div className="rows"> {/* stastics summaries */}
                <StatisticsCard 
                    title = "# of Device"
                    content = {data.numDevice}
                />
                <StatisticsCard 
                    title = "# of Jobs Issued"
                    content = {data.numJobs}
                />
                <StatisticsCard 
                    title = "Job Status"
                    content = {data.jobStatus}
                />
                <StatisticsCard 
                    title = "Avg.Time"
                    content = {data.avgTime}
                />
            </div>
            
            <div> {/* All the blocks */}
                <p className="title">Blocks</p>
                <div className="rows">
                    {blocks}      
                </div>
                    
            </div>
        </div>
    )
}

export default GlobalView;