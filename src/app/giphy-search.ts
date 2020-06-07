export interface GiphySearch {
    "data": Array<
        {
        "id": string,
        "url": string,
        "images": {
            "downsized_large":{
                "url": string
            }
        },
    }>
}
