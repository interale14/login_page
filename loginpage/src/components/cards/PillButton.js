

function PillButton ({type, text, click}) {
    const myClasses = [
        "w-full", "flex", "items-center", "justify-center", "px-8",
        "py-4", "border", "text-base", "font-medium", "rounded-md",
        "bg-indigo-300", "hover:bg-indigo-600", "text-black",
        "my-4", "hover:text-white"
    ];

    return (
        <button className={myClasses.join(" ")} type={type} onClick={click}>
            {text}</button>
    );
}

export default PillButton;