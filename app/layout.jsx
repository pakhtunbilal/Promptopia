import '@styles/globals.css';

import Nav from '@components/Nav';

import Provider from '@components/Provider';

export const metadata = {
    title: "Promptopia",
    discription: "Discover the AI prompts"
}

const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            <Provider>
            <div className="main">
                <div className='gradient'  />
            </div>
            <main>
                <div className="app">
                    <Nav />
                    {children}
                </div>
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout