import { Box } from '@chakra-ui/react'

import useFilterData from '@/hooks/useFilterData'

import FilterButton from './FilterButton'
import UserDataView from './UserDataView'

export const App = () => {
	// const [usersFilters, setUserFilters] = useState<FilterItemsData>({
	// 	filterItems: []
	// })
	const { data } = useFilterData()

	return (
		<Box
			minH="100dvh"
			maxH="100vh"
			p={4}
			display={'flex'}
			flexDirection={['column', 'row', 'row']}
			gap={[4, 8, 12]}
		>
			<UserDataView data={data} />

			<Box
				flex={1}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<FilterButton />
			</Box>
		</Box>
	)
}
