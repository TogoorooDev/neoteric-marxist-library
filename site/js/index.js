const client = new NetlifyAPI("NDlT3RgxN4y2e8fwlxg28OUvwXphzoys7KrjvA0Y_yY");
const sites = await client.listSites();
console.log(sites);