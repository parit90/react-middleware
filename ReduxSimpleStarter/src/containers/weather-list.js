import React,{Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap  from '../components/google_map';

class WeatherList extends Component{
    renderWeather(cityData){
        const temprature = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const{lat,lon} =  cityData.city.coord;

        return(
            <tr key = {cityData.city.id}>
                <td>{cityData.city.name} <GoogleMap lon = {lon} lat = {lat}/> </td>
                {/*<td></td>*/}
                <td className="sparkLine">
                    <Chart data={temprature} color="blue" units="K" type="temp"/>
                </td>
                <td className="sparkLine">
                    <Chart data={pressure} color="orange" units="hPa"/>
                </td>
               <td className="sparkLine">
                    <Chart data={humidity} color="green" units="%"/>
                </td>
            </tr>
        )
    }

    render(){
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humedity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps(state){
    return {weather: state.weather};
}

export default connect(mapStateToProps,null)(WeatherList);
