import Api from "../../index"

export const getProduct = async () => {
    return await Api.get('product')
}