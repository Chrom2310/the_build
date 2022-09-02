interface IProps {
    active: boolean;
}

const Jungle = ({active}: IProps) => {
    return (
        <svg
            width={30}
            height={30}
            viewBox="0 0 100 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M30 30.5L19.5 0.5L33.5 22.5L45 44L54.5 68.5L55 82.5L54.5 97L51 110.5L33.5 92L17.5 78L15 64L0 30.5L21.5 46.5L33.5 64L30 30.5Z"
                fill={active ? "#FF7242" : "white"}
            />
            <path
                d="M75.5 54L88.5 40L100 32L88.5 50L84.5 63L82.5 78.5L66 95V83L75.5 54Z"
                fill={active ? "#FF7242" : "white"}
            />
            <path
                d="M72.5 10.5L80.5 0.5L74 18.5L67.5 39.5L66 54L63 64.5H61.5L54 44L72.5 10.5Z"
                fill={active ? "#FF7242" : "white"}
            />
        </svg>
    )
}

export default Jungle;