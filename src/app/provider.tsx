
export default function Provider({ children }: { children: React.ReactNode; }) {
    return (

        <main className="dark m-auto max-w-max flex items-center justify-center h-screen text-foreground">
            {children}
        </main>
    );
}