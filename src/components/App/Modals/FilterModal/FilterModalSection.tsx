import { memo } from 'react'
import { Control } from 'react-hook-form'

import { Grid, Heading, VStack } from '@chakra-ui/react'
import isEqual from 'lodash.isequal'

import { FilterChooseOption } from '@api/types/Filter'

import { FilterFormData, FilterModalFormOption } from '.'

type Props = {
	sectionId: string
	title?: string
	options?: FilterChooseOption[]
	formLoaded?: boolean
	control: Control<FilterFormData>
}

const FilterModalSection = ({
	sectionId,
	control,
	title,
	options = []
}: Props) => {
	return (
		<VStack
			align="start"
			spacing={[3, 4, 6]}
			paddingTop={[3, 8]}
			paddingBottom={[5, 6, 10]}
			marginTop={[5, 6, 8]}
			borderBottom="1px solid"
			borderColor="gray.200"
		>
			<Heading
				fontSize={['xs', 'md', 'xl']}
				fontWeight={'medium'}
			>
				{title}
			</Heading>

			<Grid
				width={'100%'}
				templateColumns="repeat(3, 1fr)"
				gap={4}
			>
				{options.map(opt => (
					<FilterModalFormOption
						key={opt.id}
						opt={opt}
						sectionId={sectionId}
						control={control}
					/>
				))}
			</Grid>
		</VStack>
	)
}
export default memo(
	FilterModalSection,
	(prev, next) =>
		prev.formLoaded === next.formLoaded &&
		prev.title === next.title &&
		isEqual(prev.options, next.options)
)
