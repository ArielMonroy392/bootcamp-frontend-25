import { places } from './data.js';
import { getImageUrl } from './utils.js';
import { ImageSizeProvider, useImageSize } from './Context.jsx';

export default function App() {

  return (
    <>
      <ImageSizeProvider>
        <Page />
      </ImageSizeProvider>


    </>
  )
}

function Page() {
  const {  setSize } = useImageSize();
  return <>
    <label>
      <input
        type="checkbox"
        onChange={e => {
          setSize(e.target.checked ? 150 : 200);
        }}
      />
      Use large images
    </label>
    <hr />
    <List /></>
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const { size } = useImageSize()

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={size}
      height={size}
    />
  );
}
