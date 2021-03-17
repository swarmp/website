import { GetterTree, ActionTree, MutationTree } from 'vuex'
import pathify, { make } from 'vuex-pathify'

export const state = () => ({
  showNavDrawer: false,
})

type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  ...make.getters(state),
}

export const mutations: MutationTree<RootState> = {
  ...make.mutations(state),
}

export const actions: ActionTree<RootState, RootState> = {
  ...make.actions(state),
}

export const plugins = [pathify.plugin]
