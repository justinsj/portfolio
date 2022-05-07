import Image from "next/image";
import { useEffect, useState } from "react";


export function ImageFallback(props: any) {
  const { src, newSrc, className, width, height, alt} = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      onLoadingComplete={() => setImgSrc(newSrc)}
      onError={()=> setImgSrc(newSrc)}
    />
  );
}