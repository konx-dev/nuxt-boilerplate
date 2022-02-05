<template>
    <div>
        <div>GA Event capturing</div>
        <div>
            <button @click="clickCapture('GA Event button')">
                click to capture
            </button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        clickCapture(val) {
            this.$ga.event({
                eventCategory: 'Event',
                eventAction: 'click',
                eventLabel: val
            })
        }
    }
}

/*

- Google analytics is baked in on every page and the id declared in the nuxt.config.js
- To capture an event refer to the code block above

*/

</script>
