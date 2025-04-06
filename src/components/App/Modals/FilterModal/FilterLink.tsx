import { useTranslation } from 'react-i18next'

import { Link } from '@chakra-ui/react'

interface Props {
	onClick?: () => void
}

const FilterLink = ({ onClick }: Props) => {
	const { t } = useTranslation('filter')
	return (
		<Link
			onClick={onClick}
			position={['relative', 'absolute', 'absolute']}
			right={'0'}
			fontSize={['xs', 12, 'sm']}
		>
			{t('clear_filters')}
		</Link>
	)
}

export default FilterLink
