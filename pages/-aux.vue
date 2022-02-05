<template>
    <div>{{ entry.headingPlain }} - aux template page</div>
</template>

<script>
import PageEntry from '~/apollo/content/structures/aux'

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
