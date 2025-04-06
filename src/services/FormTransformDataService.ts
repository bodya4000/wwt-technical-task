import { FilterType } from '@api/types/Filter'
import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import { FilterFormData } from '@components/App/Modals/FilterModal'

class FormTransformDataService {
	transformFormDataToSearchRequestFilter(data: FilterFormData) {
		const transformedData: SearchRequestFilter = Object.entries(data).map(
			([sectionId, options]) => {
				const optionsIds: string[] = []
				for (const option in options) {
					if (options[option]) {
						optionsIds.push(option)
					}
				}
				return {
					id: sectionId,
					optionsIds,
					type: FilterType.OPTION
				}
			}
		)
		return transformedData
	}

	getDefaultFormFieldValues(data: FilterFormData) {
		const defaultValues: FilterFormData = {}

		for (const sectionId in data) {
			const options = data[sectionId]
			defaultValues[sectionId] = {}

			for (const optionId in options) {
				defaultValues[sectionId][optionId] = false
			}
		}

		return defaultValues
	}
}

export default new FormTransformDataService()
