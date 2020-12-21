import firebase from 'firebase';

export const getImage = async (type, id) => {
  const storage = firebase.storage();
  const imgPath = type + '/' + id + '.jpg';
  try {
    return await storage.ref(imgPath).getDownloadURL();
  } catch (error) {
    return await storage.ref(type + '/' + 'default.jpg').getDownloadURL();
  }
}

export const getId = (entity) => {
  const id = entity.url.match((/\d+/))[0];
  return id;
}

export const getNumberOfPages = (count) => {
  return Math.ceil(count / 10);
}