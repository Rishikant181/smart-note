// This file contains various objects for holding data related to users

import { Deserializable } from "./deserializable";

// Object to hold the user credentials while creating new account
export class UserSignupCredential implements Deserializable {
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

// Object to hold user input credentials while logging in
export class UserCreds implements Deserializable {
    // Member data
    email: string;                                                          // To store input email
    pass: string;                                                           // To store input password

    // Member methods
    deserialize(data: any) {
        Object.assign(this, data);
        return this;
    }
}