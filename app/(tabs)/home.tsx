import FeaturedRecipe from "@/components/custom/featured-recipe";
import HomeHeader from "@/components/custom/home-header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 !py-3 gap-6">
      <HomeHeader />
      <FeaturedRecipe />
    </SafeAreaView>
  );
}
