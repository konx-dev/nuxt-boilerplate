<template>
    <div>{{ entry.headingPlain }} - page template</div>
</template>

<script>
import PageEntry from '~/apollo/content/structures/page'

export default {
    components: {
    },
    data() {
        return {
            entry: null
        }
    },
    apollo: {
        entry: {
            prefetch: true,
            manual: true,
            query: PageEntry,
            variables() {

                const url = this.$route.path.replace(/^\/+/g, '')
                return {
                    uri: url,
                    siteId: process.env.SITE_ID
                }
            },
            result({ data }) {
                this.entry = data.entry
            }
        }
    }
}

</script>
