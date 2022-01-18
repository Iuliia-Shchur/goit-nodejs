import User from '../../model/user/user';


const findById = async(id) => {
    return await User.findById(id)
}

export default findById;