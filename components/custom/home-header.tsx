import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Heading } from "../ui/heading";
import { Sun, Moon, Bell } from "lucide-react-native";

// Function to determine time of day and greeting
function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return { icon: Sun, greeting: "Good Morning" };
  } else if (hour >= 12 && hour < 18) {
    return { icon: Sun, greeting: "Good Afternoon" };
  } else if (hour >= 18 && hour < 22) {
    return { icon: Moon, greeting: "Good Evening" };
  } else {
    return { icon: Moon, greeting: "Good Night" };
  }
}

export default function HomeHeader() {
  const { icon: Icon, greeting } = getGreeting();

  return (
    <Box className="flex flex-row items-center justify-between w-full px-6 mt-4">
      <Box>
        <Box className="flex flex-row items-center gap-1 mb-1">
          <Icon size={20} color={"#4D8194"} />
          <Text size="sm" className="text-brand-primary">
            {greeting}
          </Text>
        </Box>
        <Heading className="text-brand-primary">Pusaka Manggala</Heading>
      </Box>
      <Bell size={20} className="bg-black" />
    </Box>
  );
}
