// Table component - akan dikembangkan lebih lanjut
const Table = ({ columns = [], data = [] }) => {
  return (
    <div className="overflow-x-auto rounded-xl shadow">
      <table className="min-w-full bg-white text-sm">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="px-6 py-3 text-left">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center text-gray-400">
                Tidak ada data
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                {Object.values(row).map((val, j) => (
                  <td key={j} className="px-6 py-3">{val}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
