import { useState } from 'react'

import { Box } from '@chakra-ui/react'

import { FilterItemsData } from '@api/types/Filter'

import { FilterButton, FilterModal, UserDataView } from '.'

export const App = () => {
	const [usersFilters] = useState<FilterItemsData>({
		filterItems: []
	})

	const [filterModal, setFilterModal] = useState(false)

	return (
		<Box
			minH="100dvh"
			maxH="100vh"
			p={4}
			display={'flex'}
			flexDirection={['column', 'row', 'row']}
			gap={[4, 8, 12]}
		>
			<UserDataView data={usersFilters} />
			<Box
				flex={1}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<FilterButton onClick={() => setFilterModal(!filterModal)} />
			</Box>

			<FilterModal
				isOpen={filterModal}
				onClose={() => setFilterModal(false)}
			/>
		</Box>
	)
}
