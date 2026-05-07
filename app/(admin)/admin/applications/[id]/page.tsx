export default function ApplicationDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Application Detail
      </h1>

      <p className="text-gray-500">
        ID: {params.id}
      </p>
    </div>
  );
}