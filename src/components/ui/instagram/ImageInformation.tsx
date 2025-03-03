export function ImageInformation({
  file,
}: {
  file: File | null;
}) {
  const defaultData: string = "no data available";

  return (
    <div className="font-geist w-full py-1 px-2 bg-white border-1 border-solid border-platinum rounded-[10px]">
      {file !== null ? (
        <section>
          <span className="font-medium">File details:</span>
          <ul className="font-light text-sm">
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      ) : (
        <section>
          <span className="font-medium">File details:</span>
          <ul className="font-light text-sm">
            <li>Name: {defaultData}</li>
            <li>Type: {defaultData}</li>
            <li>Size: {defaultData}</li>
          </ul>
        </section>
      )}
    </div>
  );
}