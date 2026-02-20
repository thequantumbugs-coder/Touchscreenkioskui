interface KioskTableProps {
  headers: string[];
  rows: string[][];
}

export function KioskTable({ headers, rows }: KioskTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/20">
      <table className="w-full">
        <thead>
          <tr className="bg-white/15 backdrop-blur-xl">
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-6 py-6 text-left text-2xl font-semibold text-white"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? "bg-white/5" : "bg-white/10"
              } backdrop-blur-xl`}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-5 text-2xl text-white/90"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
