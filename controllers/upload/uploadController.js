// eslint-disable-next-line no-unused-vars
import {UploadFileService, LocalFileStorage, CloudFileStorage } from '../../service/file-storage'

const uploadAvatar = async  (req, res, next) => {
    const uploadService = new UploadFileService(
        LocalFileStorage,
        req.file,
        req.user,
        )

    const avatarUrl = await uploadService.updateAvatar()
    
    res
    .status(200)
    .json({status: 'success', code: '200', data: {avatarUrl}})
        
      }

export default uploadAvatar;