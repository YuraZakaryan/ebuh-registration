import { useState } from 'react'
import Cropper from 'react-easy-crop'
import { useAppDispatch, useAppSelector } from '@hooks/redux.ts'
import {
	setDocumentPath,
	toggleViewMode,
} from '@store/reducer'
import { TCrop } from '@types'
import { getCroppedImg } from '@/utils/image'
import { StyledModalFooter } from '../../styles'
import {
	StyledCropperToolsWrapper,
	StyledCropperWrapper,
	StyledModificationWrapper,
	StyledSlider,
	StyledToolContent,
	StyledToolIconWrapper,
} from '../../styles/documentModification'
import { StyledNextButton } from '../../styles/uploadDocument'
import BackIcon from '@assets/icon/back.svg'
import ForwardIcon from '@assets/icon/forward.svg'
import MinusIcon from '@assets/icon/minus.svg'
import PlusIcon from '@assets/icon/plus.svg'

export const DocumentModification = () => {
	const dispatch = useAppDispatch()
	const { tempFile } = useAppSelector(state => state.file)
	const [crop, setCrop] = useState({ x: 0, y: 0 })
	const [zoom, setZoom] = useState(1)
	const [rotation, setRotation] = useState(0)
	const [croppedImageBase64, setCroppedImageBase64] = useState<string | null>(
		null
	)

	const onCropComplete = async (
		_: TCrop,
		croppedAreaPixels: TCrop
	): Promise<void> => {
		const croppedImageBase64 = await getCroppedImg(
			tempFile.path,
			croppedAreaPixels,
			rotation
		)
		setCroppedImageBase64(croppedImageBase64)
	}

	const handleFinish = () => {
		if (croppedImageBase64) {
			const saved = dispatch(
				setDocumentPath({ ...tempFile, path: croppedImageBase64 })
			)

			if (saved) {
				dispatch(toggleViewMode())
			}
		}
	}

	const handleZoom = (type: 'minus' | 'plus') => {
		switch (type) {
			case 'plus':
				if (zoom < 10) {
					setZoom(prev => prev + 1)
				}
				break
			case 'minus':
				if (zoom >= 2) {
					setZoom(prev => prev - 1)
				}
				break
			default:
				return
		}
	}

	const handleRotation = (type: 'prev' | 'next') => {
		switch (type) {
			case 'next':
				if (rotation < 360) {
					setRotation(prev => prev + 1)
				}
				break
			case 'prev':
				if (rotation >= 1) {
					setRotation(prev => prev - 1)
				}
				break
			default:
				return
		}
	}

	return (
		<>
			<StyledModificationWrapper>
				<StyledCropperWrapper>
					<Cropper
						image={tempFile.path}
						crop={crop}
						zoom={zoom}
						rotation={rotation}
						aspect={tempFile.fileType === 'pdf' ? 7 / 9 : 4 / 4}
						onCropChange={setCrop}
						onCropComplete={onCropComplete}
						onZoomChange={setZoom}
						onRotationChange={setRotation}
					/>
				</StyledCropperWrapper>
				<StyledCropperToolsWrapper>
					<StyledToolContent>
						<StyledToolIconWrapper onClick={() => handleZoom('minus')}>
							<MinusIcon />
						</StyledToolIconWrapper>
						<StyledSlider min={1} max={10} onChange={setZoom} value={zoom} />
						<StyledToolIconWrapper onClick={() => handleZoom('plus')}>
							<PlusIcon />
						</StyledToolIconWrapper>
					</StyledToolContent>
					<StyledToolContent>
						<StyledToolIconWrapper onClick={() => handleRotation('prev')}>
							<BackIcon />
						</StyledToolIconWrapper>
						<StyledSlider
							min={0}
							max={360}
							onChange={setRotation}
							value={rotation}
						/>
						<StyledToolIconWrapper onClick={() => handleRotation('next')}>
							<ForwardIcon />
						</StyledToolIconWrapper>
					</StyledToolContent>
				</StyledCropperToolsWrapper>
			</StyledModificationWrapper>
			<StyledModalFooter>
				<StyledNextButton key='next' onClick={handleFinish}>
					Next
				</StyledNextButton>
			</StyledModalFooter>
		</>
	)
}
