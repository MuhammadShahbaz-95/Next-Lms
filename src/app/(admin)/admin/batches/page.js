import { BatchesTable } from "@/components/ui/DataTables/BatchTable";
import { BatchDialog } from "@/components/ui/Modals/BatchModal";

export default function Batches() {
  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">

        <h1 className="text-3xl font-bold text-center">Batches</h1>
        < BatchDialog/>
      </div>  
       <BatchesTable />
    </div>
  );
}