//jshint esversion:6

module.exports.getdate=getdate;

function getdate(){

    let today=new Date();
 
    let options={
        weekday: "long",
        day: "numeric", 
        month: "long"
    };
    let day=today.toLocaleDateString("en-US",options);

    return day;
};

// module.exports.getday=getday;

// function getday(){

//     let today=new Date();
 
//     let options={
//         weekday: "long",

//     };
//     let day=today.toLocaleDateString("en-US",options);

//     return day;
// }

