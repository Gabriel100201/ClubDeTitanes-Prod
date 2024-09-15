import { RankingComponment } from "../components/Profile/RankingComponent"

export const Ranking = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-[calc(100vh-180px)] py-12 bg-gradient-to-b from-alternative-950 via-alternative-700 to-alternative-950">
        <RankingComponment />
      </div>
    </>
  )
}