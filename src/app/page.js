import HomeContact from "@/components/home/containers/HomeContact";
import HomeDescription from "@/components/home/containers/HomeDescription";
import HomeFeature from "@/components/home/containers/HomeFeature";
import HomeHeader from "@/components/home/containers/HomeHeader";
import HomePartner from "@/components/home/containers/HomePartner";
import HomeProduct from "@/components/home/containers/HomeProduct";
import HomeService from "@/components/home/containers/HomeService";

export default function Home() {
  return (
    <main className="h-full">
      <HomeHeader />
      <HomeFeature />
      <HomeDescription />
      <HomeProduct />
      <HomeService />
      <HomePartner />
      <HomeContact />
    </main>
  )
}
