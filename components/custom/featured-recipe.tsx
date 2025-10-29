import { Box } from "../ui/box";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { Clock } from "lucide-react-native";
import { ImageBackground, ScrollView } from "react-native";
import SectionTitle from "./section-title";

export default function FeaturedRecipe() {
  // dummy
  const recipeData = [
    {
      id: 716004,
      image: require("@/assets/images/noodle.png"),
      title: "Asian white noodle with extra seafood",
      readyInMinutes: 20,
    },
    {
      id: 321004,
      image: require("@/assets/images/taco.png"),
      title: "Healthy Taco Salad with fresh vegetable",
      readyInMinutes: 12,
    },
  ];

  return (
    <Box>
      <SectionTitle title="featured" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-6"
        contentContainerStyle={{
          paddingRight: 24,
        }}
      >
        {recipeData.map((recipe) => {
          return (
            <ImageBackground
              source={recipe.image}
              resizeMode="cover"
              imageStyle={{ borderRadius: 16 }}
              className="h-[172px] w-[260px] mr-4 rounded-2xl overflow-hidden flex justify-end p-4"
              key={recipe.id}
            >
              <Heading
                className="w-2/3 leading-tight text-white line-clamp-2"
                size="lg"
              >
                {recipe.title}
              </Heading>

              <Box className="flex flex-row items-center gap-1 mt-1">
                <Clock color="white" size={16} />
                <Text className="text-white" size="sm">
                  {recipe.readyInMinutes} Min
                </Text>
              </Box>
            </ImageBackground>
          );
        })}
      </ScrollView>
    </Box>
  );
}
