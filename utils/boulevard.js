export async function boulevard(query, variables = {}) {
    const response = await fetch(
        process.env.NEXT_PUBLIC_BOULEVARD_API_URL,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Basic ' + process.env.NEXT_PUBLIC_BOULEVARD_AUTH,
            },
            body: JSON.stringify({ query, variables }),
        });
    return response.json()
}
