import User from '../../model/user/user';

const updateVerify = async (id, status) => {
    return await User.updateOne(
        {_id: id},
        {isVerify: status,
        verifyTokenEmail: null})
}

export default updateVerify;