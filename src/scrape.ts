require('module-alias/register')

import {Scraper} from "@/scraper/Scraper";
import {Offer} from "@/types/Offer";

(async () => {
    const url = process.env.npm_config_url;

    if (url === undefined) {
        console.log('[]');
        return
    }

    const scraper = new Scraper();
    let items = await scraper.scrape(url);

    items = items.map((item: Offer) => ({
        edition: Number.parseInt(item.tokenID),
        price: item.price
    }))

    console.log(JSON.stringify(items));
})();
