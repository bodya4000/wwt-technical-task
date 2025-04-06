import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ButtonProps } from '@chakra-ui/react'

import SecondaryButton from '@components/common/SecondaryButton'

const UseOldBtn = (props: ButtonProps) => {
	const { t } = useTranslation('filter')
	return (
		<SecondaryButton
			{...props}
			flex={1}
			height={['1.5rem', '2.5rem']}
			fontSize={['xs', 'sm', 'md']}
			borderRadius={'sm'}
			title={t('use_old')}
		/>
	)
}

export default memo(UseOldBtn)
