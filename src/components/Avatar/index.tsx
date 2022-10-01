interface AvatarProps {
    /**
     * Sets avatar size
     */
    size: 'w-8' | 'w-12' | 'w-16' | 'w-24';

    /**
     * Avatar image url
     */
    imgUrl: string;

    /**
     * Avatar alt image description
     */
    altDesc: string;
}
export const Avatar = ({imgUrl, size, altDesc}:AvatarProps) => {
    return(
    <div className="avatar">
        <div className={`${size} rounded-full`}>
            <img src={imgUrl} alt={altDesc} />
        </div>
    </div>
)
};


export default Avatar;
