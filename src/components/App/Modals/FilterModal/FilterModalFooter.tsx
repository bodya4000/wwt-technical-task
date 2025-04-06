import { useTranslation } from 'react-i18next'

import { ModalFooter } from '@chakra-ui/react'

import { ApplyButton, FilterLink } from '.'

interface Props {
	submit: () => void
}

const FilterModalFooter = ({ submit }: Props) => {
	const { t } = useTranslation()
	return (
		<ModalFooter
			justifyContent={['space-between', 'space-between', 'center']}
			position={'relative'}
			gap={4}
		>
			<ApplyButton
				type="submit"
				onClick={submit}
			>
				{t('apply')}
			</ApplyButton>
			<FilterLink />
		</ModalFooter>
	)
}

export default FilterModalFooter
