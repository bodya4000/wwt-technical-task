import { Box, Code } from '@chakra-ui/react'

import useFilterData from '@/hooks/useFilterData'

export const App = () => {
	const { data } = useFilterData()

	return (
		<Box
			maxW="95vw"
			mx="auto"
			minH="100dvh"
			p={4}
		>
			<Code
				p={4}
				borderRadius="md"
				whiteSpace="pre-wrap"
				width="100%"
				fontSize="sm"
				background="gray.800"
				color="green.200"
			>
				{JSON.stringify(data, null, 2)}
			</Code>
		</Box>
	)
}
