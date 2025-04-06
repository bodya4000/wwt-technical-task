import { memo, useMemo } from 'react'

import { Code } from '@chakra-ui/react'
import isEqual from 'lodash.isequal'

import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

type Props = {
	data: SearchRequestFilter | undefined
}

const UserDataView = ({ data }: Props) => {
	const dataWithoutEmptyOptions = useMemo(() => {
		if (!data) {
			return {}
		}
		return data.filter(item => item.optionsIds.length > 0)
	}, [data])

	return (
		<Code
			flex={3}
			p={4}
			borderRadius="md"
			whiteSpace="pre"
			overflowX="auto"
			width="100%"
			lineHeight="1.4"
			fontSize={['xs']}
			background="gray.800"
			color="green.200"
			border="1px solid"
			borderColor="gray.700"
		>
			{JSON.stringify(dataWithoutEmptyOptions, null, 2)}
		</Code>
	)
}
export default memo(UserDataView, (prev, next) => {
	return isEqual(prev.data, next.data)
})
