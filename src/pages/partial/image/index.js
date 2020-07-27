import React,{useState, useEffect} from 'react';

const Image = (props) => {
    const [imageData, setImageData] = useState({});
    useEffect(() =>{
       const getImage = async() =>{
        const blob = await fetch(props.imageSrc);
        const content = await blob.text();
        setImageData(content);
      }
      getImage();
    });

    return (
        <img src={imageData} style={{width: 100, borderRadius: '50%'}}></img> 
    )
}
export default Image;