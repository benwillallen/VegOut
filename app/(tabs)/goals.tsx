import {
  StyleSheet,
  Image,
  Platform,
  View,
  SectionList,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useState } from "react";
import "react-native-get-random-values";
import tw from "twrnc";
import { v4 as uuidv4 } from "uuid";
import GoalItem from "../../components/goals_components/GoalItem";
// import { Collapsible } from "@/components/Collapsible";
// import { ExternalLink } from "@/components/ExternalLink";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";
// import { IconSymbol } from "@/components/ui/IconSymbol";

type ItemType = {
  id: string;
  title: string;
  description: string;
  date: string;
  completed?: boolean;
};

type SectionType = {
  id: string;
  title: string;
  data: ItemType[];
};

const sections: SectionType[] = [
  {
    id: uuidv4(),
    title: "Nutrition",
    data: [
      {
        id: uuidv4(),
        title: "Protein Intake",
        description: "Eat 100 grams of protein per day",
        date: "2025-03-08",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Protein Intake",
        description: "Eat 100 grams of protein per day",
        date: "2025-03-08",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Protein Intake",
        description: "Eat 100 grams of protein per day",
        date: "2025-03-08",
        completed: false,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Physical Activity",
    data: [
      {
        id: uuidv4(),
        title: "Cardio Target",
        description: "Do 45 minutes of cardio three times a week.",
        date: "2024-03-04",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Cardio Target",
        description: "Do 45 minutes of cardio three times a week.",
        date: "2024-03-04",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Cardio Target",
        description: "Do 45 minutes of cardio three times a week.",
        date: "2024-03-04",
        completed: false,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Lifestyle",
    data: [
      {
        id: uuidv4(),
        title: "Get Better Sleep",
        description: "Sleep 8 hours per night on average.",
        date: "2024-03-01",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Get Better Sleep",
        description: "Sleep 8 hours per night on average.",
        date: "2024-03-01",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Get Better Sleep",
        description: "Sleep 8 hours per night on average.",
        date: "2024-03-01",
        completed: true,
      },
    ],
  },
];

type GoalsProps = {
  goalData: SectionType[];
};

export default function Goals({ goalData = sections }: GoalsProps) {
  const [collapsedSections, setCollapsedSections] = useState<
    Record<string, boolean>
  >({});

  const toggleSection = (sectionId: string) => {
    setCollapsedSections((prevSections) => ({
      ...prevSections,
      [sectionId]: !prevSections[sectionId],
    }));
  };
  return (
    <View style={tw`bg-gray-100 flex-1 pt-4`}>
      <View style={tw`mt-0 mx-auto min-w-80`}>
        <SectionList
          sections={goalData}
          keyExtractor={(section) => section.id}
          renderItem={({ item, section }) => {
            return !collapsedSections[section.id] ? (
              <GoalItem {...item}></GoalItem>
            ) : null;
          }}
          renderSectionHeader={({ section }) => (
            <View style={tw`bg-gray-100 py-1 z-10`}>
              <TouchableOpacity
                onPress={() => toggleSection(section.id)}
                style={tw`bg-green-100 p-2 rounded-md flex-row justify-between border-green-500 border-l-4 mt-auto min-w-6 mt-2`}
              >
                <Text
                  style={tw`mt-0 flex-row items-center text-xl font-medium `}
                >
                  {section.title}
                </Text>
                <Text style={tw`text-gray-600`}>
                  {collapsedSections[section.id] ? "▼" : "▲"}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          stickySectionHeadersEnabled={true}
          contentContainerStyle={tw`pb-24`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
