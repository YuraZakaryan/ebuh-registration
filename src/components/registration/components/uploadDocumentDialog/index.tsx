import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@hooks/redux.ts'
import {
	setCurrentScreen,
	setIsModalOpen,
} from '@store/reducer'
import ArrowRightIcon from '@assets/icon/arrow-right.svg'
import { DocumentModification } from './components/documentModification'
import { ShowDocument } from './components/showDocument'
import UploadDocument from './components/uploadDocument'
import { StyledModalFooter, StyledUploadDialog } from './styles'
import { StyledBackButton, StyledNextButton } from './styles/uploadDocument'
import {StyledStepContentWrapper, StyledSteps} from "@components/registration/styles";
import {TStep} from "@components/registration/types";

export const UploadDocumentDialog = () => {
	const dispatch = useAppDispatch()
	const { currentUploadScreen, isModalOpen, viewMode, paths } = useAppSelector(
		state => state.file
	)
	const [labelPlacement, setLabelPlacement] = useState<
		'horizontal' | 'vertical'
	>('vertical')

	useEffect(() => {
		const handleResize = () => {
			setLabelPlacement(window.innerWidth >= 768 ? 'horizontal' : 'vertical')
		}

		handleResize()

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const prev = () => {
		if (currentUploadScreen !== 0) {
			dispatch(setCurrentScreen(currentUploadScreen - 1))
		}
	}

	const isNextDisable = () => {
		return (
			(currentUploadScreen === 0 && !paths.front) ||
			(currentUploadScreen === 1 && !paths.back) ||
			(currentUploadScreen === 2 && !paths.selfie)
		)
	}

	const next = () => {
		if (isNextDisable()) {
			return
		}

		dispatch(setCurrentScreen(currentUploadScreen + 1))
	}

	const handleClose = () => {
		dispatch(setIsModalOpen({ open: false }))
	}

	const steps = [
		{
			title: 'Document Front',
			content: paths.front ? (
				<ShowDocument type='front' path={paths.front} />
			) : (
				<UploadDocument
					label='Upload the front side of your document'
					type='front'
				/>
			),
			status: paths.front ? 'finish' : 'wait',
			type: 'front',
		},
		{
			title: 'Document Back',
			content: paths.back ? (
				<ShowDocument type='back' path={paths.back} />
			) : (
				<UploadDocument
					label='Upload the back side of your document'
					type='back'
				/>
			),
			status: paths.back ? 'finish' : 'wait',
			type: 'back',
		},
		{
			title: 'Selfie With Document',
			content: paths.selfie ? (
				<ShowDocument type='selfie' path={paths.selfie} />
			) : (
				<UploadDocument
					label='Upload the selfie with document'
					description='The document must be clear and readable, without glare or shadows. Hold it at face level for selfies.'
					type='selfie'
				/>
			),
			status: paths.selfie ? 'finish' : 'wait',
			type: 'selfie',
		},
	] as TStep[]

	return (
		<>
			<StyledUploadDialog
				title='Upload photo'
				open={isModalOpen}
				onCancel={handleClose}
				width={609}
				footer={false}
				centered
			>
				{viewMode === 'default' ? (
					<>
						<StyledSteps
							current={currentUploadScreen}
							items={steps}
							labelPlacement={labelPlacement}
							responsive={false}
						/>
						<StyledStepContentWrapper>
							{steps[currentUploadScreen].content}
						</StyledStepContentWrapper>
						<StyledModalFooter>
							{currentUploadScreen !== 0 ? (
								<StyledBackButton
									icon={<ArrowRightIcon />}
									key='back'
									onClick={() => prev()}
								>
									Back
								</StyledBackButton>
							) : null}
							{currentUploadScreen === 2 ? (
								<StyledNextButton
									key='done'
									disabled={isNextDisable()}
									onClick={() => handleClose()}
								>
									Done
								</StyledNextButton>
							) : (
								<StyledNextButton
									key='next'
									disabled={isNextDisable()}
									onClick={() => next()}
								>
									Next
								</StyledNextButton>
							)}
						</StyledModalFooter>
					</>
				) : (
					<DocumentModification />
				)}
			</StyledUploadDialog>
		</>
	)
}
