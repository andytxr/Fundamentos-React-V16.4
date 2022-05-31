import React from "react";

export const GoodEvening = props =>{

    return(

        <h1>Boa tarde {props.name}!</h1>

    )

}

export const GoodNight = props =>{


    return(

        <h1>Boa noite {props.name}!</h1>

    )

}

export default {GoodEvening, GoodNight};