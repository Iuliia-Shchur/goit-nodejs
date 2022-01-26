import User from '../../model/user/user';

const updateAvatar = async (id, avatar) => {
    return await User.updateOne({_id: id}, {avatar})
}

export default updateAvatar;