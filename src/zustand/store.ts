import { create } from 'zustand'

import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

interface AppState {
	usersOptions: SearchRequestFilter
	modalOpen: boolean

	setUserOptions: (options: SearchRequestFilter) => void
	setModalOpen: (value: boolean) => void
}

const useAppState = create<AppState>(set => ({
	modalOpen: false,
	usersOptions: [],

	setModalOpen: value => set({ modalOpen: value }),
	setUserOptions: options => set({ usersOptions: options })
}))

export default useAppState
