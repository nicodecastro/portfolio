import '../styles/globals.css';
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata = {
    title: "Nico De Castro",
    description: "A 20-year old computer science student studying at the University of the Philippines Los Baños",
    image: "/avatar.png",
    type: "website",
}

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
            <ThemeProvider enableSystem={false} attribute="class">
                <Navbar />
                {children}
                <Footer />
            </ThemeProvider>
        </body>
    </html>
  )
}

export default RootLayout