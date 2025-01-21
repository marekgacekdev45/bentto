
import { ChefHat } from 'lucide-react'
import { defineField, defineType } from 'sanity'


export const realisation = defineType({
    name: 'realisation',
    title: 'Realizacja',
    type: 'document',
    icon:  ChefHat as any,

    fields: [
        defineField({
            name: 'title',
            title: 'Tytuł',
            type: 'string',
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
            validation: (Rule) => Rule.required(),
        }),
    ],
    
})