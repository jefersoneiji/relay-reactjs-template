import {
    CacheConfig,
    Environment,
    Network,
    RecordSource,
    RequestParameters,
    Store,
    UploadableMap,
    Variables
} from 'relay-runtime';

const base_url = 'http://localhost:4000';
async function fetchQuery(
    operation: RequestParameters,
    variables: Variables,
    _cacheConfig: CacheConfig,
    _uploadables?: UploadableMap | null
) {
    const response = await fetch(base_url + '/graphql', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    });
    return await response.json();
}

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

export const environment = new Environment({ network, store });