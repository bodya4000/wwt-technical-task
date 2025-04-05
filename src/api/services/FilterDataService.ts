import { FilterItemsData } from '@api/types/Filter'

class FilterDataService {
	private readonly URL = '../'
	private readonly ENDPOINT = 'src/temp/filterData.json'

	async fetchFilterData(): Promise<FilterItemsData> {
		const response = await fetch(`${this.URL}${this.ENDPOINT}`)
		if (!response.ok) {
			throw new Error('Failed to fetch filter data')
		}
		const data: FilterItemsData = await response.json()
		return data
	}
}

export default FilterDataService
