import React from "react";
import { Dimensions, Image } from "react-native";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Link } from "expo-router";
import { Text } from "@/components/ui/text";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Onboarding() {
  return (
    <Box className="relative flex-1 overflow-hidden bg-brand-secondary">
      {/* background pattern */}
      <Image
        source={require("../assets/images/pattern.png")}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: screenWidth,
          height: screenHeight,
        }}
      />

      <SafeAreaView className="flex-1">
        <Box className="items-center justify-between flex-1 px-6 py-8">
          {/* Top right "Later" link */}
          <Box className="items-end w-full">
            <Link href="/(tabs)/home">
              <Text className="font-semibold text-white" size="xl">
                Later
              </Text>
            </Link>
          </Box>

          {/* Main illustration */}
          <Image
            className="w-full h-auto"
            source={require("../assets/images/food-illustration.png")}
            resizeMode="contain"
          />

          {/* Bottom section */}
          <Box className="flex gap-6" style={{ marginBottom: 100 }}>
            <Heading size="2xl" className="font-sans text-center text-white">
              Help your path to health goals with happiness
            </Heading>
            <Box className="flex items-center gap-4">
              <Link href="/(tabs)/home" asChild>
                <Button className="w-full p-4 rounded-2xl h-fit bg-brand-primary">
                  <ButtonText size="md">Login</ButtonText>
                </Button>
              </Link>
              <Link href="/(tabs)/home">
                <Text size="lg" className="font-semibold text-white">
                  Create New Account
                </Text>
              </Link>
            </Box>
          </Box>
        </Box>
      </SafeAreaView>
    </Box>
  );
}
