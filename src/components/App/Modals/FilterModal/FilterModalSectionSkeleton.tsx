import { memo } from 'react'

import { Grid, Heading, Skeleton, VStack } from '@chakra-ui/react'

const FilterModalSectionSkeleton = () => {
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
				<Skeleton
					height="24px"
					width="200px"
				/>
			</Heading>

			<Grid
				width={'100%'}
				templateColumns="repeat(3, 1fr)"
				gap={4}
			>
				{Array.from({ length: 4 }).map((_, i) => (
					<Skeleton
						key={i}
						height="20px"
					/>
				))}
			</Grid>
		</VStack>
	)
}
export default memo(FilterModalSectionSkeleton)
