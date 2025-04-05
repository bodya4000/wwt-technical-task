import { useTranslation } from 'react-i18next'

import { Box, ButtonProps } from '@chakra-ui/react'

import { PrimaryButton } from '@components/common'

interface Props extends ButtonProps {}

const FilterButton = (props: Props) => {
	const { t } = useTranslation('filter')

	return (
		<Box
			display={'flex'}
			flexDirection={'row'}
			flex={1}
		>
			<PrimaryButton
				flex={1}
				title={t('filters')}
				{...props}
			/>
		</Box>
	)
}

export default FilterButton
