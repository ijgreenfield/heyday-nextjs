export async function getReviews(product) {
    const APP_KEY = process.env.NEXT_PUBLIC_YOTPO_APP_KEY;
    const response = await fetch(`https://api-cdn.yotpo.com/v1/widget/${APP_KEY}/products/${product}/reviews.json`, 
    {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })

    return response.json();
}