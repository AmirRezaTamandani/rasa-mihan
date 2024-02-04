import TableView from "@/components/TableView";

export default function Home() {
  const mockData = [
    {
      s: "BTCUSDT",
      P: "250.00",
      c: "0.0025",
    },
  ];
  return (
    <>
      <div>
        <TableView tableData={mockData} />
      </div>
    </>
  );
}
