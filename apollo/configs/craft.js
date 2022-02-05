import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import schema from '~/apollo/schemas/craft.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: schema
})

const getQueryStringParams = (query) => {
    return query
        ? (/^[?#]/.test(query) ? query.slice(1) : query)
            .split('&')
            .reduce((params, param) => {
                const [key, value] = param.split('=')
                params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : ''
                return params
            }, {}
            )
        : {}
}

export default ({ req, app }) => {
    const response = {
        httpEndpoint: process.env.CMS_URL + '/api',
        tokenName: 'craft-token',
        getAuth: () => null,
        cache: new InMemoryCache({ fragmentMatcher })
    }
    // Craft live preview token
    if (req && 'url' in req) {
        const query = getQueryStringParams(req.url)
        if ('token' in query) {
            response.httpLinkOptions = {
                headers: {
                    'x-craft-token': query.token
                }
            }
        }
    }
    return response
}
