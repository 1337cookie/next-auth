import {getSession} from "@/app/session";
import LogoutBtn from "@/app/LogoutBtn";
import LoginBtn from "@/app/LoginBtn";

const Home = async() => {
  const user = await getSession();

  if (user) {
    return (
        <div>
          Logged in
          <LogoutBtn />
          <h1>{user.user!.name}</h1>
        </div>
    )
  }

  return (
      <div>
        <LoginBtn />
      </div>
  )
}

export default Home;