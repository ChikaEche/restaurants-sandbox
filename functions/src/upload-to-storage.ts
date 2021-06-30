import { storage } from './config';

export const uploadImageToStorage = async (src: string) => {
  const storageRef = storage.bucket();

  const response = await storageRef.upload(src, {destination: 'restaurants/images/'});
  const url = await response[0].getSignedUrl({action: 'read', expires: 0})

}