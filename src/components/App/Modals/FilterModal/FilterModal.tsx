import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import {
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'

import { FilterType } from '@api/types/Filter'
import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import useFilterData from '@/hooks/useFilterData'
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
	const { setUserOptions } = useAppState()
	const { control, handleSubmit } = useForm<FilterFormData>()

	const onPress = (data: FilterFormData) => {
		const transformedData: SearchRequestFilter = Object.entries(data).map(
			([sectionId, options]) => {
				const optionsIds: string[] = []
				for (const option in options) {
					if (options[option]) {
						optionsIds.push(option)
					}
				}
				return {
					id: sectionId,
					optionsIds,
					type: FilterType.OPTION
				}
			}
		)
		setUserOptions(transformedData)
		onClose()
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
