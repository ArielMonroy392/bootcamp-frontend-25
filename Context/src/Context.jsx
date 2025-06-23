import { createContext, useContext ,useState } from "react";

const ImageSizeContext = createContext(null)

// eslint-disable-next-line react/prop-types
export const ImageSizeProvider = ({children}) => {
  const [size, setSize] = useState(150);

  return (
    <ImageSizeContext.Provider value={{ size, setSize }}>
      {children}
    </ImageSizeContext.Provider>
  );
}

export const useImageSize = () => {
  const context = useContext(ImageSizeContext);
  if (!context) {
    throw new Error('useImageSize must be used within an ImageSizeProvider');
  }
  return context;
}