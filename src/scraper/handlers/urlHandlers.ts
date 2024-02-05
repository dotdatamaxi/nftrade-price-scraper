import {ScraperData} from "@/scraper/ScraperData";
import {Offer} from "@/types/Offer";
export function handleOffers(items: Offer[], data: ScraperData) {
    const filteredItems = items.filter((item: any) => item.price !== null)

    if (items.length !== filteredItems.length) {
        data.status.lastPageLoaded = true;
    }

    data.items.push(...filteredItems)
}
