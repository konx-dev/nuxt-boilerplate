<template>
    <a v-if="isExternal" class="is-external" :href="to" target="_blank">
        <slot />
    </a>
    <nuxt-link v-else class="is-internal" :to="'/'+link">
        <slot />
    </nuxt-link>
</template>
<script>
export default {
    name: 'router-go',
    props: {
        to: {
            type: String,
            required: true
        }
    },
    computed: {
        link() {
            return this.to.replace(/^.*\/\/[^\/]+/, '').replace(/^\/+/g, '')
        },
        isExternal() {
            // Remove dev, staging and live links from the url
            // Sometimes Craft & Magento hard-codes the base url in the GraphQL responses
            // and this will cause issues when if dev and staging are using the same CMS, for example.
            
            const to = this.to.replace(process.env.dev, '').replace(process.env.staging, '').replace(process.env.live, '')
            
            return this.$isExternal(to)
        }
    }
}
</script>
