import type { ChangeEvent } from "react";

export function ImageSelector({
  handleFileChange,
}: {
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  const extraInputStyles: string = "file:cursor-pointer file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-600 dark:file:text-blue-100 dark:hover:file:bg-blue-500";

  return (
    <div className="font-geist flex flex-col gap-2 mb-2">
      <span>Select some page to visualize your story:</span>
      <input
        className={`w-fit py-1 px-2 bg-white border-1 border-solid border-platinum rounded-[10px] ${extraInputStyles}`}
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />
    </div>
  );
}