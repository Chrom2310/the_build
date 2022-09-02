interface IProps {
    active: boolean;
}

const Support = ({active}: IProps) => {
    return (
        <svg
            width={35}
            height={35}
            viewBox="0 0 134 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M51 0H67.5H82.5L87 7V9L76.5 21L68 32H66.5L52.5 15L47 8.5V7L51 0Z"
                fill={active ? "#FF7242" : "white"}
            />
            <path d="M90 24H134L112 40H95L107 55.5L87 64L79 36L90 24Z" fill={active ? "#FF7242" : "white"} />
            <path d="M44 24L0 24L22 40H39L27 55.5L47 64L55 36L44 24Z" fill={active ? "#FF7242" : "white"} />
            <path
                d="M63.5 40L67 44.5L71 40L83 100.5L67 112L51.5 100.5L63.5 40Z"
                fill={active ? "#FF7242" : "white"}
            />
        </svg>
    )
}

export default Support;