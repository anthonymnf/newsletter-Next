export const metadata = {
  title: "Inscritos | Admin",
};

const rows = [
  {
    id: 1,
    email: "usuario1@example.com",
    data_de_criacao: "10/04/2024",
  },
  {
    id: 2,
    email: "usuario2@example.com",
    data_de_criacao: "09/04/2024",
  },
  {
    id: 3,
    email: "usuario3@example.com",
    data_de_criacao: "08/04/2024",
  },
  {
    id: 4,
    email: "usuario4@example.com",
    data_de_criacao: "07/04/2024",
  },
  {
    id: 5,
    email: "usuario5@example.com",
    data_de_criacao: "06/04/2024",
  },
  {
    id: 6,
    email: "usuario6@example.com",
    data_de_criacao: "05/04/2024",
  },
  {
    id: 7,
    email: "usuario7@example.com",
    data_de_criacao: "04/04/2024",
  },
  {
    id: 8,
    email: "usuario8@example.com",
    data_de_criacao: "03/04/2024",
  },
  {
    id: 9,
    email: "usuario9@example.com",
    data_de_criacao: "02/04/2024",
  },
  {
    id: 10,
    email: "usuario10@example.com",
    data_de_criacao: "01/04/2024",
  },
];
export default async function Subscribers() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-8 text-center">
        Lista de inscritos
      </h1>
      <table className="w-full text-center">
        <thead className="border-b-[1px]">
          <tr className="[&>*]:py-4">
            <th>ID</th>
            <th>Email</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((subscriber) => (
            <tr key={subscriber.id} className="[&>*]:p-4">
              <td>{subscriber.id}</td>
              <td className="text-left">{subscriber.email}</td>
              <td>{subscriber.data_de_criacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
