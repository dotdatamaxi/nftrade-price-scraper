# NFTrade Price Scraper

This project is a price scraper for Non-Fungible Tokens (NFTs). It is written in TypeScript and uses Puppeteer for web scraping.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository
    ```bash
    git clone https://github.com/dotdatamaxi/nftrade-price-scraper.git
    ```

1. Install the dependencies
    ```bash
    npm install
    ```

## Usage

To use the scraper, you need to pass a URL as an argument when running the script.

```bash
npm run scrape --url=<URL>
```

The URL should be the link to the collection on the NFT marketplace. The URL should look like this: `https://nftrade.com/collection/{your_collection}`.

Once the script is done running, it will output the prices of the NFTs in JSON format.

## Built With

- [TypeScript](https://www.typescriptlang.org/)
- [Puppeteer](https://pptr.dev/)

## License

This project is licensed under the ISC License.
