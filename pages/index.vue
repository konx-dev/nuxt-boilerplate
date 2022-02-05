<template>
    <div>
        {{ entry.headingPlain }}
    </div>
</template>

<script>
import HomeEntry from '~/apollo/content/singles/home'

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
            query: HomeEntry,
            variables() {
                return {
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
