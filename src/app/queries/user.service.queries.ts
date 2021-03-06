/* This file contains various queries used by user service */

import { gql } from 'apollo-angular';

import {
    NewAccountDetails,
    UserCredential
} from "../models/user.models";

/* QUERIES */

// Query for verifying login credentials
export function loginUserQuery(cred: UserCredential) {
    return gql`
        query {
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
        }
    `;
}

/* MUTATIONS */

// Query for creating a new account
export function createAccountQuery(data: NewAccountDetails) {
    return gql`
        mutation {
            signup(
                cred: {
                    email: "${data.email}",
                    pass: "${data.newPass}"
                },
                details: {
                    firstName: "${data.firstName}",
                    lastName: "${data.lastName}"
                }
            ) {
                success
                type
                data
            }
        }
    `
};