import { useAuth } from "../../hooks/useAuth";
import { BannerFree } from "./BannerFree";
import { BannerProUser } from "./BannerProUser";

export const BannerCursos = () => {
  const { user } = useAuth()

  return (
    <>
      {user.isProUser ? <BannerProUser /> : <BannerFree />}
    </>
  )
}