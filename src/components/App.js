    import React from "react";
    import Spinner from "./Spinner";
    import Season from "./Season";

    class App extends React.Component{

        state = { latitude: null, errorMessage: ""}

        componentDidMount(){

            window.navigator.geolocation.getCurrentPosition(
                (position)=> this.setState({latitude: position.coords.latitude}),
                (error)=> this.setState({errorMessage: error.message})
            )
        }

        renderContent(){
            if( this.state.errorMessage && !this.state.latitude ){
                return <div>ERROR: { this.state.errorMessage} </div>
            }
            if( !this.state.errorMessage && this.state.latitude ){
                return <div> <Season lat = {this.state.latitude} /></div>
            }
            return <Spinner text = "Please, accept location request" />
        }

        render(){
            return(
                <div>
                {this.renderContent()}
                </div>
            )
        }
    }

    export default App;