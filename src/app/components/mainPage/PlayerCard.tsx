import Image from "next/image";

type Props = {
    title: string,
    
}

const PlayerCard = ({ title }: Props) => {
    return (
        <div className="flex flex-col h-[322px] w-[277px] text-white text-xl rounded-lg">
            <div className="flex w-full h-[69px] items-center justify-center bg-primary-600 rounded-t-lg">
                {title}
            </div>
            <div className="flex flex-col items-center justify-center h-full bg-secondary-900 rounded-b-lg cursor-pointer">
                <Image src={'https://s3-alpha-sig.figma.com/img/89c0/5050/1d5d84b0c985e53d274d44caf8e9973c?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9A1cA85fNlz~Hfv14fpGjlnuk8u2OermQ1ow-hvI9AogS4GivkXbp32ACOks4YPtwQ7tA-pIuaOJxzXRxg2IOQRlj3CKLdBZegGN~X~hhTvCzUgAXhUCs7G6zvBHFIYsnBsi0hnkgQTAKqheCPmqpKRYKwVZowDDY4OkKHNJK46-xbloOVc5sDIaJ0NPuqHU2ok36ZbRgDdHShbiNYhvsRR8Eljc0KXpoMseiep6oMVxNHX8TWxNy8aqEqHc7-iXRSlu1xT06u8y98vOHqEg~rKQCjeykS3M4nc1nx-BIz-ZTJV4TCii~yhBrqIP7MgUTq6rW43MmJfVntdMugtdA__'}
                    alt="Entity picture"
                    width={88}
                    height={88}
                />
                <span className="flex max-w-[100px] max-h-[100px] mt-2 text-center text-2xl font-semibold">
                    English Premier league
                </span>
            </div>
        </div>
    );
}

export default PlayerCard;
