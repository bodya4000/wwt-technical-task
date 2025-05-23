import { memo, useMemo } from 'react'
import { Control, Controller } from 'react-hook-form'

import { Box, Checkbox } from '@chakra-ui/react'
import isEqual from 'lodash.isequal'

import { FilterChooseOption } from '@api/types/Filter'

import useAppState from '@/zustand/store'
import { colors } from '@providers/ThemeProvider/theme/base'

import { FilterFormData } from '.'

interface Props {
	opt: FilterChooseOption
	control: Control<FilterFormData>
	sectionId: string
}

const FilterModalFormOption = ({ opt, control, sectionId }: Props) => {
	const { oldUsersOptions } = useAppState()
	const inUse = useMemo(
		() => oldUsersOptions.some(section => section.optionsIds.includes(opt.id)),
		[oldUsersOptions]
	)
	return (
		<Controller
			name={`${sectionId}.${opt.id}`}
			control={control}
			defaultValue={inUse}
			render={({ field }) => {
				return (
					<Box
						as="label"
						htmlFor={`${sectionId}.${opt.id}`}
						cursor="pointer"
						fontSize={{ base: '0.7rem', sm: '0.7rem', md: 'sm', lg: 'lg' }}
						display="flex"
						alignItems="center"
					>
						<Checkbox
							id={`${sectionId}.${opt.id}`}
							isChecked={field.value}
							onChange={field.onChange}
							borderWidth={[1, 2]}
							borderColor={colors.black}
							borderRadius={4}
							marginRight={[1, 2, 3, 4]}
							size={['xs', 'sm', 'md']}
						/>

						{opt.name}
					</Box>
				)
			}}
		/>
	)
}

export default memo(
	FilterModalFormOption,
	(prev, next) =>
		prev.sectionId === next.sectionId && isEqual(prev.opt, next.opt)
)
