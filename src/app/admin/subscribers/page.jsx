export const metadata = {
  title: "Inscritos | Admin",
};
import { data } from "../../data/users.js";

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
          {data.map((subscriber) => (
            <tr key={subscriber.id} className="[&>*]:p-4">
              <td>{subscriber.id}</td>
              <td className="text-left">{subscriber.user}</td>
              <td>{subscriber.data_de_criacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
