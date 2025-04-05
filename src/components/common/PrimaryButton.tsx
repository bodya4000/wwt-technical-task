import { Button, ButtonProps } from '@chakra-ui/react'

interface Props extends ButtonProps {}

const PrimaryButton = (props: Props) => {
	return (
		<Button
			colorScheme="brand"
			padding={4}
			{...props}
		>
			{props.title}
		</Button>
	)
}

export default PrimaryButton
