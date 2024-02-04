import { TableViewProps } from "@/types";

const TableView: React.FC<TableViewProps> = ({ tableData }) => {
  if (!tableData) {
//attention:
//this isn't an optimal way for loading , it is better to use the 
//file management technique 
    return <p>Loading...</p>;
  }

  {
    /* add:
    you can add more rows to the table with this structure
    */
  }
  const tableRows = tableData.map((data) => (
    <div key={data.s} className="flex  items-center">
      <div className="flex-1">{data.s}</div>
      <div>
        <div className="flex-1">{data.c}</div>
        <div className="flex-1 text-xs">{data.P}%</div>
      </div>
    </div>
  ));

  return <div>{tableRows}</div>;
};

export default TableView;
