import {HTTPRequest} from "puppeteer";

export async function handleRequest(interceptedRequest: HTTPRequest): Promise<void> {
    if (interceptedRequest.isInterceptResolutionHandled()) return;

    if (interceptedRequest.resourceType() === 'image') {
        await interceptedRequest.abort()
        return;
    }

    await interceptedRequest.continue();
}
