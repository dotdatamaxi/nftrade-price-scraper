export function forceSortParam(url: string): string {
    let urlObj = new URL(url);
    urlObj.searchParams.delete('sort');
    urlObj.searchParams.append('sort', 'min_price_asc');
    return urlObj.toString();
}
