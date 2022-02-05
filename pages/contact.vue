<template>
    <div>
        {{ entry.headingPlain }}
    </div>
</template>

<script>
import ContactEntry from '~/apollo/content/singles/contact'

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
            query: ContactEntry,
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
