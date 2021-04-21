export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=hCv7R9XexRfhzAAeMjbiW7FeEX5J5Pd1`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        slug: img.slug,
        img: img.images.downsized_medium.url,
        url: img.url,
        type: img.type,
      }
    })
    return gifs;
  }