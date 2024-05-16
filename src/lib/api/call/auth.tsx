import Api from ".."

interface ILogin {
    email: string
    password: string
}

export const loginApi = async (body: ILogin) => {
    console.log(body, "test login")
    return await Api.post('auth/login', body)


}

// export const RegisterApi = async()