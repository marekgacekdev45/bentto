
import { defineField, defineType } from 'sanity'


export const gallery = defineType({
    name: 'gallery',
    title: 'Galeria',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Tytuł',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'images',
            title: 'Zdjęcia',
            type: 'array',
            of: [{ type: 'image' }],
            validation: (Rule) => Rule.required(),
        }),
    ],
    
})