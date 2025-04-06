import { Control, FieldValues } from 'react-hook-form'

import { Grid, Heading, VStack } from '@chakra-ui/react'

import { FilterChooseOption } from '@api/types/Filter'

import { FilterModalFormOption } from '.'

type Props = {
	sectionId: string
	title?: string
	options?: FilterChooseOption[]
	formLoaded?: boolean
	control: Control<FieldValues>
}

const FilterModalSection = ({
	sectionId,
	control,
	title,
	options = [],
	formLoaded
}: Props) => {
	console.log(formLoaded)

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
export default FilterModalSection
