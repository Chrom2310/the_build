interface IProps {
    active: boolean;
}

const Mid = ({active}: IProps) => {
    return (
        <svg
            width={30}
            height={30}
            viewBox="0 0 160 161"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 0H104L82.5 24.5H25.5V80.5L0 103V0Z"
                fill={active ? "#FF7242" : "white"}
                fillOpacity="0.6"
            />
            <path
                d="M160 161L56 161L77.5 135.786L134.5 135.786L134.5 78.1553L160 55L160 161Z"
                fill={active ? "#FF7242" : "white"}
                fillOpacity="0.6"
            />
            <path d="M128.5 0H160V31.5L33.5 161H0V128.5L128.5 0Z" fill={active ? "#FF7242" : "white"} />
        </svg>
    )
}

export default Mid;