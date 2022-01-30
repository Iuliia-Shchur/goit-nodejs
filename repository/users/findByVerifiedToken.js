import User from '../../model/user/user';

const findByVerifiedToken = async (verifyTokenEmail) => {
    return await User.findOne({verifyTokenEmail})
}

export default findByVerifiedToken;