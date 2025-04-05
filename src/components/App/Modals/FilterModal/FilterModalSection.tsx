import {
	Box,
	Checkbox,
	Grid,
	Heading,
	Skeleton,
	VStack
} from '@chakra-ui/react'

import { FilterChooseOption } from '@api/types/Filter'

import { colors } from '@providers/ThemeProvider/theme/base'

type Props = {
	title?: string
	options?: FilterChooseOption[]
	isLoading?: boolean
}

const FilterModalSection = ({ title, options = [], isLoading }: Props) => {
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
				{isLoading ? (
					<Skeleton
						height="24px"
						width="200px"
					/>
				) : (
					title
				)}
			</Heading>

			<Grid
				width={'100%'}
				templateColumns="repeat(3, 1fr)"
				gap={4}
			>
				{isLoading
					? Array.from({ length: 4 }).map((_, i) => (
							<Skeleton
								key={i}
								height="20px"
							/>
						))
					: options.map((opt, i) => (
							<Box
								key={i}
								fontSize={{ base: '0.7rem', sm: '0.7rem', md: 'sm', lg: 'lg' }}
								display={'flex'}
								alignItems={'center'}
							>
								<Checkbox
									borderWidth={[1, 2]}
									borderColor={colors.black}
									borderRadius={4}
									marginRight={[1, 2, 3, 4]}
									size={['xs', 'sm', 'md']}
								/>
								{opt.name}
							</Box>
						))}
			</Grid>
		</VStack>
	)
}
export default FilterModalSection
