import { serviceGetSaved, servicePostSaved, servicePutSaved } from "../Service/apiService.js"

export async function controllerGet() {
    let response = await serviceGetSaved();
    return response
}

export async function controllerPost(data) {
    let response = await servicePostSaved(data);
    return response
}

export async function controllerUpdate(data) {
    let response = await servicePutSaved(data);
    return response
}