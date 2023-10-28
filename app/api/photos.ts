export const getPhotos= async <T>(): Promise<Awaited<T>> => {
  const photoList = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await photoList.json();
  return data;
};