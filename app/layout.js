import './globals.css'
export const metadata = {
  title: "Kuves's Store",
  description: 'Created by Barry',
}

export default function RootLayout({ children, }) {
  return (
 

    <html lang="en">
      <body>
      {children}
      </body>
    </html>

  )
}
