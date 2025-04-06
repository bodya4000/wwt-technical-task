import { Box } from '@chakra-ui/react'

import useAppState from '@/zustand/store'

import { FilterButton, FilterModal, UserDataView } from '.'
import { ConfirmModal } from './Modals/ConfirmModal/ConfirmModal'

export const App = () => {
	const {
		modalOpen,
		openFilterModal,
		closeFilterModal,
		notToConfirmNewUserOptions,
		oldUsersOptions,
		confirmModal
	} = useAppState()
	return (
		<Box
			minH="100dvh"
			maxH="100vh"
			p={4}
			display={'flex'}
			flexDirection={['column', 'row', 'row']}
			gap={[4, 8, 12]}
		>
			<UserDataView data={oldUsersOptions} />
			<Box
				flex={1}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<FilterButton onClick={openFilterModal} />
			</Box>

			<FilterModal
				isOpen={modalOpen}
				onClose={closeFilterModal}
			/>

			<ConfirmModal
				isOpen={confirmModal}
				onClose={notToConfirmNewUserOptions}
			/>
		</Box>
	)
}
