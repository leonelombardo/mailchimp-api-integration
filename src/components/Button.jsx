export const Button = ({ variant="primary", type="button", icon, onClick, style, children }) => {
    return (
        <>
            {
                variant === "icon" &&
                    <button type={type} onClick={onClick} className={`flex items-center justify-center gap-2 text-xl font-bold py-2 px-4 h-fit hover:scale-110 transition-transform ${style}`}>
                        <i className="text-xl">{icon}</i>
                        {children}
                    </button>
            }
        </>
    )
}