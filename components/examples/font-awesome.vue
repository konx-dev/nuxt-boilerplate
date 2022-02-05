<template>
    <div class="flex flex-row">
        <font-awesome-icon :icon="['fas', 'search' ]" />
        <font-awesome-icon :icon="['far', 'address-book' ]" />
        <font-awesome-icon :icon="['fal', 'play' ]" />
        <font-awesome-icon :icon="['fab', 'twitter' ]" />
    </div>
</template>
<script>
export default {}

/*

- Add .npmrc file (isn't tracked in git)
- Use above syntax, renders as svg. Use classes to target sizing / colour etc
- The icon array has to match the import in nuxt.config.js
- Icon imports: nuxt.config.js = camelCase, template: kebab
- Trailing letters after 'fa' stand for solid, regular, light & brand

*/

</script>
