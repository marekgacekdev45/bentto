import { PencilLine } from 'lucide-react';
import { defineField, defineType } from 'sanity';
import { FileConvertInfo, } from '../components/FileConvertInfo';

export const post = defineType({
	name: 'post',
	title: 'Post',
	type: 'document',
	icon: PencilLine as any,

	fields: [
		defineField({
			name: 'title',
			title: 'Tytuł',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'publishedAt',
			title: 'Data utworzenia',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
		}),
		defineField({
			name: 'thumbnail',
			title: 'Miniaturka',
			type: 'image',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'content',
			title: 'Treść',
			type: 'array',
			of: [
				{ type: 'block' },
				{
					type: 'image',
					fields: [
						{
							type: 'text',
							name: 'alt',
							title: 'Alt',
						},
					],
				},
			],
			validation: (Rule) => Rule.required(),
		}),
        defineField({
            name: "info",
            type: "string",
            components: {
              field: FileConvertInfo
            },
            readOnly: true
          }),
		defineField({
			name: 'pdf',
			title: 'PDF',
			type: 'file',
			options: {
				accept: 'application/pdf',
			},
           
		}),
       
	],
});
