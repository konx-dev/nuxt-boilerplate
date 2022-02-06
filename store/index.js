export const actions = {
    async nuxtServerInit ({ state, dispatch }, { req, error }) {
        await dispatch('general/loadCraft').catch((error) => {})
    }
}
