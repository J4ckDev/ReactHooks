export const getImagen = async () => {
  try {
    const apiKey = "Rl1kK89CR1QcpisRreVMMPBdUUH2omEK";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url

  } catch (error) {
    return 'No existe';
  }
};
