import { Box } from '@chakra-ui/react'

import useAppState from '@/zustand/store'

import { FilterButton, FilterModal, UserDataView } from '.'

export const App = () => {
	const { modalOpen, setModalOpen, usersOptions } = useAppState()

	return (
		<Box
			minH="100dvh"
			maxH="100vh"
			p={4}
			display={'flex'}
			flexDirection={['column', 'row', 'row']}
			gap={[4, 8, 12]}
		>
			<UserDataView data={usersOptions} />
			<Box
				flex={1}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<FilterButton onClick={() => setModalOpen(!modalOpen)} />
			</Box>

			<FilterModal
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
			/>
		</Box>
	)
}
