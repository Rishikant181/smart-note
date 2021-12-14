/* This file contains various queries used by user service */

import {
    NewAccountDetails,
    UserCredential
} from "../models/user.models";

/* QUERIES */

// Query for verifying login credentials
export function verifyLoginCredsQuery(cred: UserCredential) {
    return `query {
        login(
            cred: {
                email: "${cred.email}",
                pass: "${cred.pass}"
            }
        ) {
            success
            type
            data
        }
    }`;
}

/* MUTATIONS */

// Query for creating a new account
export function createAccountQuery(details: NewAccountDetails) {
    return `mutation {
        signup(
            cred: {
                email: "${details.email}",
                pass: "${details.newPass}"
            }
        ) {
            success
            type
        }
    
        updateDetails(
            email: "${details.email}",
            details: {
                firstName: "${details.firstName}",
                lastName: "${details.lastName}",
                phone: 0
            }
        ) {
            success
            type
            data
        }
    }`
};