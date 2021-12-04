// This file contains objects to hold various types of general data

import { Deserializable } from "./deserializable";

// Object to hold success or failure response
export class Response implements Deserializable {
    // Member data
    success: boolean;                                                   // To store whether task was successful or not
    type: string;                                                       // To store failure reason
    details: string;                                                    // To store the response message

    // Member methods
    // Method to deserialize input data into response object
    deserialize(data: any) {
        Object.assign(this, data);
        return this;
    }
}