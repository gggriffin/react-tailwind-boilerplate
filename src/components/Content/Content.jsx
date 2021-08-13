import { ContentIntro } from "./ContentIntro";
import { ContentMain } from "./ContentMain";

export const Content = () => {
  return (
    <div className="flex-grow p-3">
      <ContentIntro /> 
      <ContentMain />
    </div>
  );
};
