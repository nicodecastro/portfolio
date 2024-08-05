import '../styles/globals.css';
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata = {
    title: "Nico De Castro - Software Engineer",
    description: "A 20-year old aspiring software engineer studying at the University of the Philippines Los Baños",
}

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
  return (
    <html lang="en">
        <body className={inter.className}>
            <Navbar />
            {children}
            <Footer />
        </body>
    </html>
  )
}

export default RootLayout