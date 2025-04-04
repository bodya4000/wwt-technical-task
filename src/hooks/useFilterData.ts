import { useQuery } from '@tanstack/react-query'

import { filterDataService } from '@api/services'

const useFilterData = () => {
	const data = useQuery({
		queryKey: ['filter_data'],
		queryFn: () => filterDataService.fetchFilterData()
	})
	return data
}

export default useFilterData
