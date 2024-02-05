import {handleOffers} from "@/scraper/handlers/urlHandlers";
import {ScraperData} from "@/scraper/ScraperData";
import {autoScroll} from "@/utilities/scroller";
import {HTTPRequest, HTTPResponse, Page} from "puppeteer";

export async function handleResponse(response: HTTPResponse, page: Page, data: ScraperData): Promise<void> {
    const request: HTTPRequest = response.request();
    const requestUrl: string = request.url();

    const urlHandlers = {
        'tokens?contracts[]': handleOffers as (json: any, data: ScraperData) => void
    };

    if (!Object.keys(urlHandlers).some(urlPart => requestUrl.includes(urlPart))) {
        return;
    }

    if (response.ok() && request.resourceType() === 'xhr') {
        const json = await response.json()

        for (const [urlPart, handler] of Object.entries(urlHandlers)) {
            if (requestUrl.includes(urlPart)) {
                handler(json, data);
            }
        }

        try {
            await autoScroll(page);
        } catch (e) {
            data.status.lastPageLoaded = true;
        }
    }
}
