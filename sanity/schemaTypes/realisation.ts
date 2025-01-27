import { ChefHat } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const realisation = defineType({
	name: 'realisation',
	title: 'Realizacja',
	type: 'document',
	icon: ChefHat as any,

	fields: [
		defineField({
			name: 'name',
			title: 'Nazwa',
			type: 'string',
			validation: Rule => Rule.required(),
		}),

		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
			},
			validation: Rule => Rule.required(),
		}),

        defineField({
			name: 'thumbnail',
			title: 'Miniaturka',
			type: 'image',
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'address',
			title: 'Adres',
			type: 'text',
		}),
		defineField({
			name: 'description',
			title: 'Opis',
			type: 'text',
		}),
		defineField({
			name: 'images',
			title: 'Zdjęcia',
			type: 'array',
			of: [{ type: 'image' }],
			validation: Rule => Rule.required(),
		}),
	],
})
