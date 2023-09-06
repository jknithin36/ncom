import { PulseLoader } from "react-spinners";

export default function ComponentLevelLoader({ text, color, loading, size }) {
  return (
    <span>
      {text}
      <PulseLoader
        color={color}
        loading={loading}
        size={size || 10}
        data-testid="loader"
      />
    </span>
  );
}
