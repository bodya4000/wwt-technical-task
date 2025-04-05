import { useTranslation } from 'react-i18next'

import {
	Link,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'

import useFilterData from '@/hooks/useFilterData'

import { ApplyButton, FilterModalSection } from '.'

type Props = {
	isOpen: boolean
	onClose: () => void
}

export const FilterModal = ({ isOpen, onClose }: Props) => {
	const { t } = useTranslation('filter')
	const { data, isLoading } = useFilterData()
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			closeOnEsc
		>
			<ModalOverlay />
			<ModalContent
				mx={0}
				p={[4, 6, 10]}
				display="flex"
				flexDirection="column"
				minW={['88vw', '100%', '100%']}
				overflowX="hidden"
			>
				<ModalHeader>{t('filter')}</ModalHeader>
				<ModalCloseButton _focus={{ boxShadow: 'none' }} />

				<ModalBody flex={1}>
					{isLoading
						? Array.from({ length: 5 }).map((_, i) => (
								<FilterModalSection
									key={i}
									isLoading
								/>
							))
						: data?.filterItems.map(section => (
								<FilterModalSection
									key={section.id}
									title={section.name}
									options={section.options}
								/>
							))}
				</ModalBody>

				<ModalFooter
					justifyContent={['space-between', 'space-between', 'center']}
					position={'relative'}
					gap={4}
				>
					<ApplyButton onClick={onClose}>{t('apply')}</ApplyButton>
					<Link
						position={['relative', 'absolute', 'absolute']}
						right={'0'}
						fontSize={['xs', 12, 'sm']}
					>
						{t('clear_filters')}
					</Link>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
