export type TUploadDocumentType = 'front' | 'back' | 'selfie'

export enum EDocumentType {
	PASSPORT = 'passport',
	ID = 'id',
	SOCIAL_CARD = 'socialCard',
}

export type TDocumentsUploadTypePath = {
	front: string
	back: string
	selfie: string
}

export type TTempFileBody = {
	type: TUploadDocumentType | null
	fileType?: 'default' | 'pdf'
	path: string
}

export type TViewMode = 'default' | 'edit'

export interface IInitialFileState {
	viewMode: TViewMode
	isModalOpen: boolean
	currentUploadScreen: number
	tempFile: TTempFileBody
	paths: TDocumentsUploadTypePath
}
