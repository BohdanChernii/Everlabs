import React, { useEffect, useState } from 'react';
const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState(photos);
  const [album, setAlbum] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((res) => setPhotos(res));
  }, []);

  const handleChange = (e) => {
    setAlbum(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="photos">
      <form className="photos__form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="photos__form-input"
          onChange={handleChange}
        />
        <button
          className="photos__form-button"
          onClick={() =>
            setFilteredPhotos(photos.filter((item) => item.albumId == album))
          }
        >
          Get photos
        </button>
      </form>
      {filteredPhotos.map((item) => (
        <img
          src={item.thumbnailUrl}
          alt={item.title}
          className="photos__item"
          key={item.id}
        />
      ))}
    </div>
  );
};
export default Photos;
