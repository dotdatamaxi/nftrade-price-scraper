import {ScraperStatus} from "@/scraper/ScraperStatus";
import {Offer} from "@/types/Offer";

export class ScraperData {
    items: Offer[];
    status: ScraperStatus;

    constructor() {
        this.items = [];
        this.status = new ScraperStatus();
    }
}
