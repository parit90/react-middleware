import {FETCH_WEATHER} from '../actions/index';

export default function (state = [],action){
    switch(action.type){
        case FETCH_WEATHER: 
            //dont mutate the state, always return the new state
            // concate return the new array, if push is been used it mutate the state or modify the state
            return state.concat([action.payload.data]);
            // return [action.payload.data, ...state];
    }
    return state;
}


// addRefreshRequest.js:694

// addRefreshRequest.js:677

// addRefreshRequest.js:336

// [ { _id: '58a6493e81edd120943e6020',
//     //emailID: 'singhdharminder506@gmail.com',
//     // phone: '0416670790',
//     // firstName: 'Harjid',
//     // lastName: 'Singh',
//     //rating: 3.765432098765432,
//     booking: 5,
//     image: '',
//     // device: [ [Object] ],
//     // isAvailable: true },
//   { _id: '58bf6a4065b08d36cea6a7c2',
//     emailID: 'dippatel009@gmail.com',
//     phone: '0414157670',
//     firstName: 'Dipan',
//     lastName: 'Patel',
//     rating: 3.022222222222222,
//     booking: 4,
//     image: '',
//     device: [ [Object] ],
//     isAvailable: true } ]


//     slot:{$elemMatch:{ epoch: { $gte: startTime, $lte: endTime }, "time": req.body.time}},
//             //device:1,
//             //isAvailable:1,
//             //rating:1,
//             //emailID:1,
//             // phone:1,
//             // firstName:1,
//             // lastName:1,
//             image:1,
//             booking:1