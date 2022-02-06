import Craft from '~/apollo/general/craft'

export const state = () => ({
    navigation: []
})

export const mutations = {
    setNavigation(state, payload) {
        state.navigation = payload
    }
}

export const actions = {
    // Get global data from Craft
    loadCraft({ commit, dispatch, state }, data) {
        return new Promise((resolve, reject) => {
            const content = this.app.apolloProvider.defaultClient
            content.query({
                query: Craft,
                variables: {
                    siteId: process.env.SITE_ID
                }
            }).then(({ data }) => {
                commit('setNavigation', data.navigation)
                resolve()
            }).catch((error) => {
                reject(error)
            })
        })
    }
}
