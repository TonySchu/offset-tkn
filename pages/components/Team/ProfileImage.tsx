import Image from "next/image";

type Props = {
    alt: string;
    src: string;
};

function ProfileImage(props: Props) {
    return (
        <div className="col-xxl-4 col-xl-5 col-md-4 col-sm-6 col-7 mb-4 mb-xl-0">
            <Image
                alt={props.alt}
                src={props.src}
                height="207.5"
                width="207.5"
                className="rounded-circle"
            ></Image>
        </div>
    );
}

export default ProfileImage;
