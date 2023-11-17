export function getRequestOptions() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;


    if (!apiKey) {
        throw new Error("API KEY is not defined");
    }

    return {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
    };
}