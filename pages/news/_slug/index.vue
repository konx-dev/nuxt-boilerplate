<template>
    <div>
        {{ entry.headingPlain }}
    </div>
</template>
<script>
import NewsEntry from '~/apollo/content/channels/newsArticle'

export default {
    data() {
        return {
            entry: null
        }
    },
    apollo: {
        entry: {
            prefetch: true,
            manual: true,
            query: NewsEntry,
            variables() {
                return {
                    slug: this.$route.params.slug,
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
