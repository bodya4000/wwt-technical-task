import { create } from 'zustand'

import { FilterChoose } from '@api/types/Filter'

interface AppState {
	usersOptions: FilterChoose[]
	modalOpen: boolean

	setUserOptions: (options: FilterChoose[]) => void
	setModalOpen: (value: boolean) => void
}

const useAppState = create<AppState>(set => ({
	modalOpen: false,
	usersOptions: [],

	setModalOpen: value => set({ modalOpen: value }),
	setUserOptions: options => set({ usersOptions: options })
}))

export default useAppState
