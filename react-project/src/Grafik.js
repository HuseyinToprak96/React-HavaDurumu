import { Component } from "react";

export default class Grafik extends Component{
    
render(){
    const data =this.props.haftalik
    return (
        <>
        <div className="row w-100 mt-4">
<div className="col-6 offset-3">
<div className="card w-100">
            <div className="card-header">
            {data.city}
            </div>
            <div className="card-body">
             {data.result&& data.result.map((day,index)=>(
             <li>
             <img key={index} src={day.icon} height={"30px"} width={"30px"}/>
             | {day.date} | {day.day} | {day.description}
             
             </li>))}
            </div>
            <div className="card-footer">
         
            </div>
        </div>
</div>
        </div>
       
        </>
    )
}
}