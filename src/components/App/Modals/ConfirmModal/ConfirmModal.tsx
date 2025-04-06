import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import {
	Box,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'

import useAppState from '@/zustand/store'

import ApplyNewBtn from './ApplyNewBtn'
import UseOldBtn from './UseOldBtn'

type Props = {
	isOpen: boolean
	onClose: () => void
}

const ConfirmModalComponent = ({ isOpen, onClose }: Props) => {
	const { t } = useTranslation('filter')
	const { confirmNewUserOptions, notToConfirmNewUserOptions } = useAppState()

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			closeOnEsc
		>
			<ModalOverlay />
			<ModalContent
				display="flex"
				flexDirection="column"
				minW={['88vw', '88vw', '100%']}
				overflowX="hidden"
			>
				<Box
					display="flex"
					flexDirection="column"
					maxW={['xs', 'sm', 'xl']}
					mx={[2, 'auto', 'auto']}
				>
					<ModalHeader
						fontWeight={'500'}
						fontSize={[10, 'md', 'xl']}
						padding={[2, 6, 6]}
						margin={[2, 6, 6]}
					>
						{t('confirm_filter_text')}
					</ModalHeader>

					<ModalFooter
						marginTop={[20, 50, 100]}
						gap={8}
					>
						<UseOldBtn onClick={notToConfirmNewUserOptions} />
						<ApplyNewBtn onClick={confirmNewUserOptions} />
					</ModalFooter>

					<ModalCloseButton _focus={{ boxShadow: 'none' }} />
				</Box>
			</ModalContent>
		</Modal>
	)
}

export const ConfirmModal = memo(
	ConfirmModalComponent,
	(prev, next) => prev.isOpen === next.isOpen
)
