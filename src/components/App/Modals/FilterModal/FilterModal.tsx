import { FieldValues, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import {
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'

import useFilterData from '@/hooks/useFilterData'

import { FilterModalBody, FilterModalFooter } from '.'

type Props = {
	isOpen: boolean
	onClose: () => void
}

type FilterFormData = Record<string, Record<string, boolean>>

export const FilterModal = ({ isOpen, onClose }: Props) => {
	const { t } = useTranslation('filter')
	const { data, isLoading } = useFilterData()
	const { control, handleSubmit } = useForm<FilterFormData>()

	const onPress = (data: FieldValues) => {
		console.log(data)
	}
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

				<FilterModalBody
					control={control}
					data={data}
					isLoading={isLoading}
				/>

				<FilterModalFooter submit={handleSubmit(onPress)} />
			</ModalContent>
		</Modal>
	)
}
