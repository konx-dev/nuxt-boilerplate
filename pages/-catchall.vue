<template>
    <component :is="type" v-if="type" :id="id" :url="url" />
</template>
<script>
import Url from '~/apollo/general/url'
import Pages from '~/pages/-page.vue'
import Auxiliary from '~/pages/-aux.vue'

const components = {
    Pages,
    Auxiliary
}

export default {
    components: components,
    async asyncData({ app, store, params, error, route, redirect }) {
        const client = app.apolloProvider.defaultClient
        const path = route.path.replace(/^\/+/g, '')

        return await client.query({
            prefetch: true,
            query: Url,
            variables: {
                url: path,
                siteId: process.env.SITE_ID
            }
        }).then(({ data }) => {
            // confirm entry exists
            if (data.entry == null) {
                throw ({ statusCode: 404, message: 'Page not found' })
            }

            const type = data.entry.typeHandle.charAt(0).toUpperCase() + data.entry.typeHandle.slice(1).toLowerCase()

            // Make sure entry type is valid
            if (Object.keys(components).includes(type) === -1) {
                throw ({ statusCode: 404, message: 'Page not found' })
            }

            return {
                type: type,
                id: parseInt(data.entry.typeId),
                url: path
            }
        }).catch((e) => {
            error(e)
        })
    }
}

</script>
