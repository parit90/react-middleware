import React,{Component} from 'react';

const googleMapStyle = {
    height: 150
}

class GoogleMap extends Component{
    componentDidMount(){
        new google.maps.Map(this.refs.map,{
          center: {lat: this.props.lat, lng: this.props.lon},
          zoom: 8
        })
    }

    render(){
        return (<div ref="map" style={googleMapStyle} />)
    }
}

export default GoogleMap;