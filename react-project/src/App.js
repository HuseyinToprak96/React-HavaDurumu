import {Component} from 'react'
import Grafik from './Grafik'


export default class App extends Component {
  state={
    durum:{},
    days:[],
    currentCity:""
  }
  havaDurumu=async (city)=>{
    
     fetch("https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city="+city,
    {"headers":{"content-type": "application/json",
    "authorization": "apikey 4HmzuVhw9P1Gt4Jkr1FtCx:7CFt8nlfCxOd4ccsgitv6F"}})
    .then((response)=>response.json())
    .then((data)=>{
      this.setState({durum:data})
     this.setState({days:data.result})
    })
  }
  componentDidMount=async ()=>{
   await this.havaDurumu(this.state.currentCity);
  }
  cityChange=async (selectedCity)=>{
this.state.currentCity=selectedCity
await this.havaDurumu(selectedCity)
console.log(this.state.durum)
  }
  render(){
    var options=[
      {value:"ankara",label:"Ankara"},
      {value:"istanbul",label:"Istanbul"},
      {value:"adana",label:"Adana"},
      {value:"samsun",label:"Samsun"},
      {value:"eskisehir",label:"Eskişehir"},]
    
  return (
   <>
   <div className='container'>
   <h1>Hava Durumu {this.state.currentCity} {} </h1>
   <select className='form-control' value={this.state.currentCity} onChange={(e)=> this.cityChange(e.target.value)}>
    {options.map((city,index)=>(<option key={index} value={city.value}>{city.label}</option>))}
   </select>
   <Grafik haftalik={this.state.durum}/>
<h4></h4>
</div>
   </>
  );
}}

