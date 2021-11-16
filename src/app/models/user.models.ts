// This file contains various objects for holding data related to users

import { Deserializable } from "./deserializable";

// Object to hold the user credentials while creating new account
export class NewUserCreds implements Deserializable {
    // Member data
    firstName: string;                                                      // To store first name
    lastName: string;                                                       // To store last name
    email: string;                                                          // To store email
    newPass: string;                                                        // To store the new password
    conPass: string;                                                        // To store confirmation password

    // Member methods
    deserialize(data: any) {
        Object.assign(this, data);
        return this;
    }
}