<template>
    <div>
        <div>{{ entry.headingPlain }}</div>
        <div>
            <ul>
                <li v-for="item in entries" :key="item.id">
                    <router-go :to="item.uri">
                        {{ item.title }}
                    </router-go>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import NewsEntry from '~/apollo/content/singles/news'
import NewsEntries from '~/apollo/content/channels/newsArticles'

export default {
    components: {
    },
    data() {
        return {
            entry: null,
            entries: null
        }
    },
    apollo: {
        entry: {
            prefetch: true,
            manual: true,
            query: NewsEntry,
            variables() {
                return {
                    siteId: process.env.SITE_ID
                }
            },
            result({ data }) {
                this.entry = data.entry
            }
        },
        entries: {
            prefetch: true,
            manual: true,
            query: NewsEntries,
            variables() {
                return {
                    siteId: process.env.SITE_ID
                }
            },
            result({ data }) {
                this.entries = data.entries
            }
        }
    }
}
</script>
