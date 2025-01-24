import { FileWordOutlined } from '@ant-design/icons'
import React, { memo, useState } from 'react'
import EyeIcon from '../../../../../../assets/icon/eye.svg'
import RecycleIcon from '../../../../../../assets/icon/recycle.svg'
import { useAppDispatch } from '../../../../../../hooks/redux'
import { removePath } from '../../../../../../store/reducer/fileSlice'
import { IShowDocumentProps } from '../../../../types'
import {
	StyledDocumentActionButton,
	StyledDocumentContainer,
	StyledDocumentCover,
	StyledDocumentShowWrapper,
	StyledShowDocument,
	StyledShowDocumentText,
	StyledShowImage,
} from '../../styles'

export const ShowDocument: React.FC<IShowDocumentProps> = memo(props => {
	const { path, type } = props

	const dispatch = useAppDispatch()
	const [isPreviewVisible, setPreviewVisible] = useState<boolean>(false)

	const handlePreview = () => {
		setPreviewVisible(true)
	}

	const handleRemove = () => {
		dispatch(removePath(type))
	}

	const isApplicationType = path.startsWith('data:application')

	return (
		<StyledDocumentShowWrapper>
			<StyledDocumentContainer>
				{isApplicationType ? (
					<StyledShowDocument>
						<FileWordOutlined />
						<StyledShowDocumentText>document.docx</StyledShowDocumentText>
					</StyledShowDocument>
				) : (
					<StyledShowImage
						src={path}
						preview={{
							visible: isPreviewVisible,
							onVisibleChange: visible => setPreviewVisible(visible),
						}}
						width={208}
						height={208}
					/>
				)}

				<StyledDocumentCover>
					{!isApplicationType ? (
						<StyledDocumentActionButton
							icon={<EyeIcon />}
							onClick={handlePreview}
						/>
					) : null}
					<StyledDocumentActionButton
						icon={<RecycleIcon />}
						onClick={handleRemove}
					/>
				</StyledDocumentCover>
			</StyledDocumentContainer>
		</StyledDocumentShowWrapper>
	)
})

ShowDocument.displayName = 'ShowDocument'
