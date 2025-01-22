import Footer from '@/components/footer'
import Header from '@/components/header'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer/>
		</>
	)
}

export default Layout
