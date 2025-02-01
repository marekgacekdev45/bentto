import { Html, Button,Text,Heading } from "@react-email/components";


interface EmailTemplateProps {
	name: string;
	phone: string;
	email: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, phone, email, message }) => (
	// <div>
	// 	<h1>Siema, {name}!</h1>
  //   	<p>Tel: {phone}</p>
  //   	<p>Email: {email}</p>
	// 	<p>{message}</p>
	// </div>
  <Html lang="pl" dir="ltr">
     <Heading as="h2">Siema, {name}!</Heading>
  <Button href={`mailto:${email}`} style={{ color: "#61dafb" }}>
    Wyślij wiadomość
  </Button>
  <Button href={`tel:${phone}`} style={{ color: "#61dafb" }}>
    Zadzwoń
  </Button>
  <Text>{message}</Text>
</Html>
)
