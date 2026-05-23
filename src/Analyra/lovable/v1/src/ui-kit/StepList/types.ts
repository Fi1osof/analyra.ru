export type Step = {
  title: string;
  description: string;
};

export type StepListProps = {
  steps: Step[];
  className?: string;
};
