import { useTranslation } from 'react-i18next'

import { ButtonProps } from '@chakra-ui/react'

import { PrimaryButton } from '@components/common'

const ApplyButton = (props: ButtonProps) => {
	const { t } = useTranslation('filter')
	return (
		<PrimaryButton
			height={['1.5rem', '2rem', '3rem']}
			px={[5, 5, 20]}
			py={[0, 0, 5, 25]}
			fontSize={['xs', 'md', 'lg']}
			title={t('apply')}
			{...props}
		/>
	)
}

export default ApplyButton
