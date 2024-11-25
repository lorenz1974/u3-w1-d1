import React from 'react';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {

  // Updated array with a new `text` property
  const componentsInformation = [
    {
      src: 'https://placehold.co/300x200/black/white',
      message: 'Cliccami 1',
      text: 'messaggio 1',
    },
    {
      src: 'https://placehold.co/300x200/orange/black',
      message: 'Cliccami 2',
      text: 'messaggio 2',
    },
    {
      src: 'https://placehold.co/300x200/red/white',
      message: 'Cliccami 3',
      text: 'messaggio 3',
    },
  ];

  return (
    <div className="imageContainer">
      {componentsInformation.map((item, index) => (
        <div className="imageWrapper" key={index}>
          <ImageComponent src={item.src + '?text=' + index} alt={`Image ${index + 1}`} />
          <ButtonComponent
            text={item.message}
            alertMessage={item.text}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
