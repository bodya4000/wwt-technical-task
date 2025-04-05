import { Code } from '@chakra-ui/react'

import { FilterChoose } from '@api/types/Filter'

type Props = {
	data: FilterChoose[] | undefined
}

const UserDataView = ({ data }: Props) => {
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
			{JSON.stringify(data, null, 2)}
		</Code>
	)
}

export default UserDataView
