import React,{Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
    console.log("The type.......",props.type)
    function average(data){
        let addAll = 0;
        for(let i=0;i<data.length;i++){
            addAll = addAll+data[i];
        }
        
        if(props.type =='temp'){
            return ((addAll/data.length) - 273.15).toFixed(2)
        }
        else{
            return (addAll/data.length).toFixed(2);
        }
    }

    return (
        <div>
            <Sparklines data={props.data} width={100} height={50} >
                 <SparklinesLine color = {props.color} />
                 <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)}</div>
        </div>
    )
}