import React, {Component, useState} from 'react';
import {useAxiosGet} from "../../../Hooks/HttpRequest";




class SetErrorType{

    static convertType(type) {
        let errorType = null;

        switch (type){
            case 0:
                errorType = "Extreme Top";
                break;
            case 1:
                errorType = "Extreme bottom";
                break;
            case 2:
                errorType = "Normal Top";
                break;
            case 3:
                errorType = "Normal Bottom";
                break;
            case 4:
                errorType = "Next Difference";
                break;
        }

        return errorType;
    }
}

export default SetErrorType;