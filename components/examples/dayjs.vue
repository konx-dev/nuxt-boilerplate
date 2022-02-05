<template>
    <div>
        {{ dayjsExample }}
    </div>
</template>
<script>
export default {
    computed: {
        dayjsExample() {
            return this.$dayjs('2019-02-02T18:16:01.296Z').format('DD MMMM YYYY')
        }
    }
}

/*

- Dayjs is globally accessible in the nuxt app so no need for an import.
- To use access on this.$dayjs() passing in the variable and chaining on the format (example above).
- See docs for format examples: https://day.js.org/docs/en/display/format

*/
</script>
