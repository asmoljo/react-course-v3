import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';

const url =
  'https://api.unsplash.com/search/photos?client_id=ijSlor7QoC7r3urJDkJRowgA6qKSMCuOfafjmHYRLPM';

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    // u queryKey se kao drugi parametar dodaje 'searchTerm', jer inace ReacTquery vraca iz cash-a stanje, a ovako sa drugim parametrom ide novi upit
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="image"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
