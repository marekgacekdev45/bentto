'use server'

import { z } from 'zod'
import { formSchema } from './schema'
import { EmailTemplate } from '@/mails/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
	try {
		const { data, error } = await resend.emails.send({
			from: `bennto.eu <${process.env.RESEND_FROM_EMAIL}>`,
			to: [`${process.env.RESEND_TO_EMAIL}`],
			subject: 'Nowa wiadomość ze strony bentto.eu',
			react: EmailTemplate(emailFormData),
		})

		if (error) {
			return { success: false, message: 'Nie udało się wysłać wiadomości. Spróbuj ponownie później.' }
		}

		return { success: true, message: 'Email został wysłany! Dziękujemy!' }
	} catch (e) {
		console.error(e)
		return { success: false, message: 'Wystąpił błąd. Spróbuj ponownie później.' }
	}
}

