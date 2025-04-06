import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import {
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'

import useFilterData from '@/hooks/useFilterData'
import { FormTransformDataService } from '@/services'
import useAppState from '@/zustand/store'

import { FilterModalBody, FilterModalFooter } from '.'

type Props = {
	isOpen: boolean
	onClose: () => void
}

export type FilterFormData = {
	[key: string]: {
		[optionId: string]: boolean
	}
}

export const FilterModal = ({ isOpen, onClose }: Props) => {
	const { t } = useTranslation('filter')
	const { data, isLoading } = useFilterData()
	const { openConfirmModal } = useAppState()
	const { control, handleSubmit, reset, getValues } = useForm<FilterFormData>()

	const onPress = (data: FilterFormData) => {
		console.log(data)

		const transformedData =
			FormTransformDataService.transformFormDataToSearchRequestFilter(data)

		openConfirmModal(transformedData)
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
				<ModalHeader
					fontWeight={'500'}
					fontSize={'xl'}
				>
					{t('filter')}
				</ModalHeader>

				<ModalCloseButton _focus={{ boxShadow: 'none' }} />

				<FilterModalBody
					control={control}
					data={data}
					isLoading={isLoading}
				/>

				<FilterModalFooter
					reset={reset}
					getValues={getValues}
					submit={handleSubmit(onPress)}
				/>
			</ModalContent>
		</Modal>
	)
}
