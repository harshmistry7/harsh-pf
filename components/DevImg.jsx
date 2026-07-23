import Image from "next/image";

const DevImg = ({containerStyles, imgSrc, alt = ""}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt={alt} />
    </div>
  )
}

export default DevImg
