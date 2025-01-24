import { TRequestStatus } from '..'
import { EDocumentType, TDocumentsUploadTypePath } from '../file'

export enum ERole {
	ADMINISTRATOR = 'administrator',
	STUDENT = 'student',
	EDUCATOR = 'educator',
	PARENT = 'parent',
}

export type TUser = {
	id: string
	email: string
	firstName: string
	lastName: string
	role: ERole | null
	documentType: EDocumentType | null
	documentNumber: string
	documents: TDocumentsUploadTypePath
}

export interface IInitialUserState {
	user: TUser | null
	registration: TRequestStatus
}
