import { BoxContent, ThemedText } from "@shared/components";
export interface IEpisodesFailedFeedbackProps {
  message: string;
}
const EpisodesFailedFeedback = ({ message }: IEpisodesFailedFeedbackProps) => {
  return (
    <BoxContent center>
      <ThemedText
        type="defaultSemiBold"
        numberOfLines={2}
        style={{ textAlign: "center" }}
      >
        {message}
      </ThemedText>
    </BoxContent>
  );
};

export default EpisodesFailedFeedback;
