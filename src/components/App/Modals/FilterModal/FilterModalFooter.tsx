import { memo, useCallback } from 'react'
import { UseFormGetValues, UseFormReset } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { ModalFooter } from '@chakra-ui/react'

import { ApplyButton, FilterFormData, FilterLink } from '.'

interface Props {
	reset: UseFormReset<FilterFormData>
	getValues: UseFormGetValues<FilterFormData>
	submit: () => void
}

const FilterModalFooter = ({ submit, getValues, reset }: Props) => {
	const { t } = useTranslation('filter')

	const resetAllParameters = useCallback(async () => {
		const { FormTransformDataService } = await import('@/services')
		const defaultValues =
			FormTransformDataService.getDefaultFormFieldValues(getValues())
		reset(defaultValues)
	}, [reset, getValues])
	return (
		<ModalFooter
			justifyContent={['space-between', 'space-between', 'center']}
			position={'relative'}
			gap={4}
		>
			<ApplyButton
				type="submit"
				onClick={submit}
			>
				{t('apply')}
			</ApplyButton>
			<FilterLink onClick={resetAllParameters} />
		</ModalFooter>
	)
}

export default memo(FilterModalFooter)
