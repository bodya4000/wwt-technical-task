import { useTranslation } from 'react-i18next'

import { ButtonProps } from '@chakra-ui/react'

import { PrimaryButton } from '@components/common'

const ApplyNewBtn = (props: ButtonProps) => {
	const { t } = useTranslation('filter')
	return (
		<PrimaryButton
			{...props}
			flex={1}
			height={['1.5rem', '2.5rem']}
			fontSize={['xs', 'sm', 'md']}
			borderRadius={'sm'}
			title={t('apply_new')}
		/>
	)
}

export default ApplyNewBtn
