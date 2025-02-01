import { Button, Heading, Html, Body, Head, Text, Tailwind, Container, Section, Img } from '@react-email/components'

interface EmailTemplateProps {
	name: string
	phone: string
	email: string
	message: string
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ? process.env.NEXT_PUBLIC_SITE_URL : ''

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, phone, email, message }) => (
	<Html lang='pl' dir='ltr'>
		<Head />

		<Tailwind>
			<Body className='bg-white my-auto mx-auto font-sans px-2'>
				<Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]'>
					<Section className='mt-[32px]'>
						<Img src={`${baseUrl}/mail-logo.png`} width='40' height='37' alt='Bentto' className='my-0 mx-auto' />
					</Section>
					<Heading as='h1' className='text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
						Nowa wiadomość od <strong>{name}</strong>
					</Heading>
					<Heading as='h2' className='text-black text-[18px] font-normal p-0 mt-[30px] mx-0'>
						Oto jej treść:
					</Heading>
					<Text className='text-black text-[14px] leading-[24px]'>{message}</Text>

					<Heading as='h2' className='text-black text-[18px] font-bold p-0 mx-0'>
						Email: <span className='text-[14px]'>{email}</span>
					</Heading>
					{phone && (
						<Heading as='h2' className='text-black text-[18px] font-bold p-0 mx-0'>
							Telefon: : <span className='text-[14px]'>{phone}</span>
						</Heading>
					)}

					<Section className=' text-center mt-[32px] mb-[32px]'>
						<Button
							className='bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3 mr-6'
							href={`mailto:${email}`}>
							Napisz
						</Button>
						{phone && (
							<Button
								className='bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3'
								href={`tel:${phone}`}>
								Zadzwoń
							</Button>
						)}
					</Section>
				</Container>
			</Body>
		</Tailwind>
	</Html>
)
