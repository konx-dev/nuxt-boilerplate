<template>
    <div>
        <div class="bg-black text-white">
            {{ entry.headingPlain }}
        </div>
        <div v-for="(item, i) in navigation" :key="i">
            {{ item.title }}
        </div>
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
    computed: {
        navigation() {
            return this.$store.state.general.navigation
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
