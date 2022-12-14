export async function storefront(query, variables = {}) {
    const response = await fetch(
            process.env.NEXT_PUBLIC_API_URL,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
                },
                body: JSON.stringify({ query, variables }),
            });
    return response.json()
}

export async function storefrontBulk(query) {
    const response = await fetch('https://thinkheyday.myshopify.com/admin/api/2020-04/graphql.json', 
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Access-Token": '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',
            },
            body: JSON.stringify({ query }),
        });

        return response.json()
}