const getIndex = (id) => {
    return {
        type: "getIndex",
        payload: id,
    }
}

export default getIndex;