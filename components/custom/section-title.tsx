import { Link } from "expo-router";
import { Box } from "../ui/box";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";

type SectionTitleProps = {
  title: string;
  showAllRoute?: string;
};

export default function SectionTitle({
  title,
  showAllRoute,
}: SectionTitleProps) {
  return (
    <Box className="flex-row items-center justify-between px-6 mb-3">
      <Heading size="lg" className="capitalize">
        {title}
      </Heading>
      {showAllRoute && (
        <Link href={"/"}>
          <Text size="md" className="font-medium text-brand-secondary">
            See All
          </Text>
        </Link>
      )}
    </Box>
  );
}
