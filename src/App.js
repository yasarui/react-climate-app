import React,{ Fragment } from 'react';
import Loading from './Components/Loading';
import Climate from './Components/Climate';

class App extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           lat:"",
           lng:"",
           errorMessage:""
       }
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position)=>{
            this.setState({
                lat:position.coords.latitude,
                lng:position.coords.longitude
            })
        },(error)=>{
            this.setState({
                errorMessage:error.message
            })
        })
    }
    renderContent(){
        return (<h1> Render Content </h1>)
    }
    render(){
       const { lat,lng,errorMessage } = this.state
       if(lat && lng){
          return <Climate lat={lat} lng={lng} />
       }else if(errorMessage != ""){
          return (
              <Fragment>
                <h3> Error: {this.state.errorMessage} </h3>
              </Fragment> 
           )
       }else{
          return <Loading />
       }
    }
}

export default App;