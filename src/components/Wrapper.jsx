export const Wrapper = ({ children }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-12 max-w-screen w-full h-screen bg-primary-500 p-12">
                { children }
            </div>
        </>
    )
}