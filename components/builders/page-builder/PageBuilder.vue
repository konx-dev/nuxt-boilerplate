<template>
    <div>
        <component :is="block.typeHandle" v-for="(block, i) in blocks" :key="i" :block="block" />
    </div>
</template>
<script>
// Component Imports here
import ExampleA from '~/components/builders/page-builder/components/ExampleA.vue'

export default {
    components: {
        ExampleA
    },
    props: {
        blocks: {
            type: Array,
            required: true
        }
    }
}

</script>
