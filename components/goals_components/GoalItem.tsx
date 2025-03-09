import tw from "twrnc";
import { View, Text } from "react-native";
type ItemType = {
  id: string;
  title: string;
  description: string;
  date: string;
  completed?: boolean;
};

type GoalItemProps = ItemType;

export default function GoalItem({
  id,
  title,
  description,
  date,
  completed,
}: GoalItemProps) {
  return (
    <View
      style={tw`m-2 p-3 bg-white rounded-xl shadow-sm shadow-black shadow-opacity-20`}
    >
      <Text style={tw`text-xl`}>{title}</Text>
      <Text style={tw`text-sm`}>{description}</Text>
      <Text>{date}</Text>
      <Text>{completed ? "Completed" : "In Progress"}</Text>
    </View>
  );
}
