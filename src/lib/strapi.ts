import qs from "qs";

export const STRAPI_API_URL = import.meta.env.VITE_STRAPI_URL || "";

export function getStrapiURL(path = "") {
    return `${STRAPI_API_URL}${path}`;
}

export async function fetchAPI(
    path: string,
    urlParamsObject = {},
    options = {}
) {
    try {
        // Merge default and user options
        const mergedOptions = {
            ...options,
            headers: {
                "Content-Type": "application/json",
                // @ts-ignore
                ...options?.headers,
            },
        };

        // Build request URL
        const queryString = qs.stringify(urlParamsObject, {
            encodeValuesOnly: true, // prettify URL
        });
        const requestUrl = `${getStrapiURL(
            `/api${path}${queryString ? `?${queryString}` : ""}`
        )}`;

        console.log(`[Strapi Fetch] Fetching: ${requestUrl}`);

        // Trigger API call
        const response = await fetch(requestUrl, mergedOptions);

        if (!response.ok) {
            console.error(`[Strapi Fetch] Error status: ${response.status}`);
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`[Strapi Fetch] Error:`, error);
        throw error;
    }
}

export function getStrapiMedia(url: string | null) {
    if (url == null) {
        return null;
    }

    // Return the full URL if the media is hosted on an external provider
    if (url.startsWith("http") || url.startsWith("//")) {
        return url;
    }

    // Otherwise prepend the Strapi URL
    return `${STRAPI_API_URL}${url}`;
}
