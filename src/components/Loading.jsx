import { ProgressBar } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ProgressBar
        visible={true}
        height="80"
        width="80"
        color="#f00"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
