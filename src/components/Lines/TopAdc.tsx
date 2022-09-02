interface IProps {
    top: boolean;
    active: boolean;
}

const TopAdc = ({top, active}: IProps) => {
    return (
        <svg
            width={30}
            height={30}
            viewBox="0 0 105 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x={40} y={40} width={28} height={28} fill={active ? "#FF7242" : "white"} />
            <path d="M0 0H95.5L76 20H20V77L0 96V0Z" fill={active ? "#FF7242" : "white"} fillOpacity={top === true ? "1" : "0.6"} />
            <path
                d="M104.777 107.265H9.27734L28.7773 87.2649H84.7773V30.2649L104.777 11.2649V107.265Z"
                fill={active ? "#FF7242" : "white"}
                fillOpacity={top === true ? "0.6" : '1'}
            />
        </svg>
    )
}

export default TopAdc;