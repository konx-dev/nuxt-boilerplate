<template>
    <div>
        <div>{{ entry.headingPlain }} - page template</div>
        <!-- <PageBuilder :blocks="entry.pageBuilder" /> -->
    </div>
</template>

<script>
import PageEntry from '~/apollo/content/structures/page'

// import PageBuilder from '~/components/builders/page-builder/PageBuilder.vue'

export default {
    components: {
        // PageBuilder
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
