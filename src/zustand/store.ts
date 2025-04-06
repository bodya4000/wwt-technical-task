import { create } from 'zustand'

import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

interface AppState {
	oldUsersOptions: SearchRequestFilter
	newUsersOptions: SearchRequestFilter
	modalOpen: boolean
	confirmModal: boolean

	openFilterModal: () => void
	closeFilterModal: () => void
	openConfirmModal: (newOptions: SearchRequestFilter) => void
	confirmNewUserOptions: () => void
	notToConfirmNewUserOptions: () => void
}

const useAppState = create<AppState>((set, get) => ({
	modalOpen: false,
	confirmModal: false,
	oldUsersOptions: [],
	newUsersOptions: [],
	openFilterModal: () => set({ modalOpen: true }),
	closeFilterModal: () => set({ modalOpen: false }),
	openConfirmModal: (newOptions: SearchRequestFilter) =>
		set({ newUsersOptions: newOptions, modalOpen: false, confirmModal: true }),
	confirmNewUserOptions: () => {
		set({
			newUsersOptions: [],
			oldUsersOptions: get().newUsersOptions,
			modalOpen: false,
			confirmModal: false
		})
	},
	notToConfirmNewUserOptions: () =>
		set({
			newUsersOptions: [],
			modalOpen: false,
			confirmModal: false
		})
}))

export default useAppState
