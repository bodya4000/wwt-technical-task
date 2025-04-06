import { Control } from 'react-hook-form'

import { ModalBody } from '@chakra-ui/react'

import { FilterItemsData } from '@api/types/Filter'

import {
	FilterFormData,
	FilterModalSection,
	FilterModalSectionSkeleton
} from '.'

interface Props {
	data: FilterItemsData | undefined
	control: Control<FilterFormData, unknown, FilterFormData>
	isLoading: boolean
}

const FilterModalBody = ({ control, data, isLoading }: Props) => {
	const optionsNotLoaded = !data || isLoading

	return (
		<ModalBody flex={1}>
			{optionsNotLoaded
				? Array.from({ length: 6 }).map((_, i) => (
						<FilterModalSectionSkeleton key={i} />
					))
				: data.filterItems.map(section => (
						<FilterModalSection
							key={section.id}
							title={section.name}
							options={section.options}
							sectionId={section.id}
							control={control}
						/>
					))}
		</ModalBody>
	)
}

export default FilterModalBody
