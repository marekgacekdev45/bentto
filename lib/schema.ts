import { z } from 'zod'

export const formSchema = z.object({
	name: z
		.string()
		.nonempty('Pole wymagane.')
		.min(3, { message: 'Imię i nazwisko muszą mieć przynajmniej 3 znaki.' })
		.max(50, { message: 'Imię i nazwisko mogą mieć maksymalnie 50 znaków.' }),
	phone: z.string(),
	email: z
  .string()
  .nonempty("Pole wymagane.'")
  .email('Email jest niepoprawny.'),
	message: z
  .string()
  .nonempty('Pole wymagane.')
  .min(6, { message: 'Wiadomość musi mieć przynajmniej 3 znaki.' }),
})
