import { Button, ButtonProps } from '@chakra-ui/react'

interface Props extends ButtonProps {}

const PrimaryButton = (props: Props) => {
	return (
		<Button
			colorScheme="brand"
			{...props}
		>
			{props.title}
		</Button>
	)
}

export default PrimaryButton
