import './globals.css'

export const metadata = {
    title: 'Dollar App',
    description: 'Information about the dollar in Argentina',
    icons: {
        icon: [
            '/favicon.ico?v=4'
        ],
        apple: [
            '/apple-touch-ico.png?v=4'
        ],
        shortcut: [
            '/apple-touch-ico.png'
        ],
    },
    manifest: '/site.webmainfest'

}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <link
                    rel="icon"
                    href="./dollar_icon.png"
                    type="image/<generated>"
                    sizes="<generated>"
                />
            </head>
            <body >
                <header className='flex  border-b bg-slate-300 h-[120px] items-center justify-center rounded-b-sm'>
                    <h1 className="p-4 text-4xl font-bold tracking-widest font-awesome_brands_6">Dolar</h1>
                </header>
                {children}
            </body>
        </html>
    )
}
