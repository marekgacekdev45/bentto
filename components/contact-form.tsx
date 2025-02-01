'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { formSchema } from '@/lib/schema'
import { send } from '@/lib/email'
import { toast } from 'sonner'
import { Textarea } from './ui/textarea'

const ContactForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			phone: '',
			email: '',
			message: '',
		},
	})

	const { isSubmitting } = form.formState

	function onSubmit(values: z.infer<typeof formSchema>) {
		// send(values)
		send(values).then(result => {
			if (result.success) {
				toast.success(result.message, {
					style: { backgroundColor: 'green', border: 'green', color: 'white' },
				})
				form.reset()
			} else {
				toast.error(result.message, {
					style: { backgroundColor: 'red', border: 'red', color: 'white' },
				})
			}
		})
	}

	return (
		<div className='bg-white px-6 py-12 sm:p-12 w-full'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-base'>Imię i nazwisko</FormLabel>
								<FormControl>
									<Input {...field} required />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='phone'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-base'>Telefon</FormLabel>
								<FormControl>
									<Input type='phone' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl className='text-base'>
									<Input type='email' {...field} required />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='message'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-base'>Wiadomość</FormLabel>
								<FormControl>
									<Textarea {...field} required />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<button
						type='submit'
						className='rounded-sm px-8 py-2.5 overflow-hidden relative group cursor-pointer border-2 font-semibold border-secondary-400 text-white bg-secondary-400 uppercase'
						disabled={isSubmitting}>
						<span className='absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease'></span>
						<span className='relative text-white transition duration-300 group-hover:text-secondary-400 ease'>
							Wyślij
						</span>
					</button>
				</form>
			</Form>
		</div>
	)
}

export default ContactForm
