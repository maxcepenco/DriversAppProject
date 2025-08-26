import {ADMIN_PASSWORD, ADMIN_USERNAME} from "../../src/core/middleware/suberAdminGuardMiddleware";


export function generateAdminAuthToken() {

    const credentials = `${ADMIN_USERNAME}:${ADMIN_PASSWORD}`
    const token = Buffer.from(credentials).toString('base64')

    return `Basic ${token}`
}