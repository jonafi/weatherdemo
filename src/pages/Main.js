import React, { Component } from "react";
import API from "../utils/API"

class Main extends Component {
    componentDidMount() {
        this.loadDefaultData();
      }
    loadDefaultData = () =>{
        API.getSampleData()
            .then(res=>{
                console.log(res.data.forecast)
                //let output = res.data.forecast.forecastday[1].day.maxtemp_f; 
                let output = res.data.forecast.forecastday[1]; 
                document.write(JSON.stringify(output));
                   
            }
              )
    };
render (){
return(

 <div>Loading ...
 </div>
  
);

}
}
export default Main;