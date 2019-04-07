
class AbstractModel {
    initialState = {}

    getReducer = () => () => {
        throw Error("You must override getReducer method")
    }
}

export default AbstractModel
