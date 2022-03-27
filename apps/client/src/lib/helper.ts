import fetch, { Response } from "cross-fetch";

const url = "http://localhost:3000";

const build = async (path: string, method: string = "GET", payload: string | undefined = undefined): Promise<Response> => {
    return fetch(`${url}/${path}`, {
        method: !!payload ? "PUT" : "GET", // We only have add keyword so no post request here
        ...(!!payload &&
            {
                body: payload // No need to JSON structure here, just a simple text will work fine
            }
        )
    });
}

export const add = async (keyword: string) => {
    return build("", "PUT", keyword);
}

export const remove = async (keyword: string) => {
    return build("", "DELETE", keyword);
}

export const search = async (keyword: string) => {
    return build(`search/${keyword}`);
}

export const list = async () => {
    return build("");
}

export const suggest = async (prefix: string) => {
    return build(`suggest/${prefix}`);
}
