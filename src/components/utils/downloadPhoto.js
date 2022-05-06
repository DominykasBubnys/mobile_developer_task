import RNFetchBlob from 'rn-fetch-blob'
import { PermissionsAndroid, Platform } from 'react-native'

const checkPermission = async (photoURL) => {
  if (Platform.OS === 'ios') {
    downloadImage()
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'App needs access to your storage to download Photos'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage Permission Granted.')
        downloadImage(photoURL)
      } else {
        alert('Storage Permission Not Granted')
      }
    } catch (err) {
      console.warn(err)
    }
  }
}
const getExtention = (filename) => {
  console.log('fn: ', filename)
  // To get the file extension
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined
}

const downloadImage = (photoURL) => {
  const date = new Date()
  const imageURL = photoURL
  let ext = getExtention(imageURL)
  ext = '.' + ext[0]
  const { config, fs } = RNFetchBlob
  const PictureDir = fs.dirs.PictureDir
  const options = {
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      path:
        PictureDir +
        '/image_' +
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        ext,
      description: 'Image'
    }
  }
  config(options)
    .fetch('GET', imageURL)
    .then((res) => {
      console.log('res -> ', JSON.stringify(res))
      alert('Image downloaded successfully.')
    })
}

export default checkPermission
