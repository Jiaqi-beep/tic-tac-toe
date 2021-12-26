import Head from "next/head";


export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Tic Tac Toe</title>
                <meta name="description" content="Coding challenge from Everlaw" />
            </Head>
            {children}
            <footer>
                Jiaqi's rendition
            </footer>
        </>
    )
}