// This file contains various helper methods related to authentication and authorization

import { SHA256 } from 'crypto-js';
import hex from 'crypto-js/enc-hex';

export function hashCredential(cred: string): string {
    return hex.stringify(SHA256(cred));
}