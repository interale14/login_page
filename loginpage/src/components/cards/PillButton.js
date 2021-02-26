

function PillButton ({type, text, click}) {
    const myClasses = [
        "w-full", "flex", "items-center", "justify-center", "px-8",
        "py-4", "border", "text-base", "font-medium", "rounded-md",
        "bg-indigo-100", "hover:bg-indigo-200", "text-black",
        "my-4"
    ];

    return (
        <button className={myClasses.join(" ")} type={type} onClick={click}>
            {text}</button>
    );
}

export default PillButton;