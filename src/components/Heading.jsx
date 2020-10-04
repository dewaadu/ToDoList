import React, { useState } from 'react';

var today= new Date();
var option={
    weekday:"long",
    day:"numeric",
    month:"long"
};
var day=today.toLocaleDateString("en-US", option);

function Heading(){
    return<div>
        <h1>{day}</h1>
    </div>
}
export default Heading;