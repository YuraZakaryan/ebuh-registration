import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { setIsModalOpen } from '../../../../store/reducer/fileSlice'
import { TUploadDocumentType } from '../../../../store/types/file'
import { LinkButton } from './components/linkButton'
import { StyledExistDocumentsWrapper } from './styles'

export const ExistDocuments = () => {
	const dispatch = useAppDispatch()
	const { paths } = useAppSelector(state => state.file)

	const handleClick = (type: TUploadDocumentType) => {
		dispatch(setIsModalOpen({ open: true, type }))
	}

	const isApplicationType = (type: TUploadDocumentType) => {
		const path = paths[type]

		if (path) {
			if (path.startsWith('data:image')) {
				return 'img'
			}
			if (path.startsWith('data:application')) {
				return 'docx'
			} else {
				return 'file'
			}
		}
	}

	return (
		<StyledExistDocumentsWrapper>
			{paths.front && (
				<LinkButton onClick={() => handleClick('front')}>
					{isApplicationType('front')}.1
				</LinkButton>
			)}
			{paths.back && (
				<LinkButton onClick={() => handleClick('back')}>
					{isApplicationType('back')}.2
				</LinkButton>
			)}
			{paths.selfie && (
				<LinkButton onClick={() => handleClick('selfie')}>
					{isApplicationType('selfie')}.3
				</LinkButton>
			)}
		</StyledExistDocumentsWrapper>
	)
}
