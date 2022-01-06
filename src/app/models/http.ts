import { Deserializable } from './deserializable';

// Object to hold response data received from server
export class Response implements Deserializable {
    // Member data
    success: boolean;                                                   // To store success or failure code
    type: string;                                                       // To store type of response
    details: string;                                                    // To store additional details
    data: any;                                                          // To store returned data

    // Member methods
    // Method to deserialize input data into this object
    deserialize(data: any): this {
        Object.assign(this, data);
        return this;
    }
}