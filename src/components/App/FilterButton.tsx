import { useTranslation } from 'react-i18next'

import { Box, Button } from '@chakra-ui/react'

const FilterButton = () => {
	const { t } = useTranslation('filter')

	return (
		<Box
			display={'flex'}
			flexDirection={'row'}
			flex={1}
		>
			<Button
				flex={1}
				colorScheme="brand"
				padding={4}
			>
				{t('filters')}
			</Button>
		</Box>
	)
}

export default FilterButton
