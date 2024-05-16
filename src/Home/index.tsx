import { useAppSelector } from "../store"
import Tambah from "./Tambah"
import Testing from "./Testing"

const Home = () => { 
  const user = useAppSelector((state) => state.user)
  console.log(user)
  return (
    <div>
      <Testing />
      <Tambah />
    </div>
  )
}

export default Home

