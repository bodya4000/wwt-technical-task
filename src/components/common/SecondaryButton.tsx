import { Button, ButtonProps } from '@chakra-ui/react'

import { colors } from '@providers/ThemeProvider/theme/base'

interface Props extends ButtonProps {}

const SecondaryButton = (props: Props) => {
	return (
		<Button
			_focus={{ boxShadow: 'none' }}
			bg="white"
			color="black"
			borderWidth={1}
			borderColor={colors.gray}
			_hover={{ bg: 'gray.100' }}
			variant="outline"
			{...props}
		>
			{props.title}
		</Button>
	)
}

export default SecondaryButton
