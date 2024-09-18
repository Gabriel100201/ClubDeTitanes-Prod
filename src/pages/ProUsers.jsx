import { useEffect, useState } from "react";
import { getProUsers } from "../services/getProUsers";

export const ProUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getProUsers();
        setUsers(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <section className="bg-gradient-to-b from-alternative-950 to-alternative-500 w-full relative">
      <div className="absolute rounded-r-lg h-10 flex justify-center items-center bg-gradient-to-b from-primary-600 to-primary-400 bottom-7 left-0">
        <span className="text-white font-bold px-9">ADMIN</span>
      </div>
      <div className="w-full max-w-4xl mx-auto p-4 min-h-[calc(100vh-180px)] py-20">
        <h1 className="text-center text-white text-3xl lg:text-4xl font-bold mb-8">Lista de usuarios pagos</h1>

        {/* Diseño de tabla apilado para móviles */}
        <div className="shadow-lg sm:rounded-lg">
          <div className="block md:hidden">
            {users.map((user, index) => (
              <div key={user.id} className="border-b bg-primary-50 p-4 mb-2 rounded-lg shadow-sm shadow-primary-50">
                <p className="font-semibold text-gray-800">{index + 1}. {user.username}</p>
                <p className="text-gray-600"><span className="font-bold">Email:</span> {user.email}</p>
                <p className="text-gray-600"><span className="font-bold">Inicio de subscripción:</span> {user.start_date.substring(0, 10)}</p>
              </div>
            ))}
          </div>

          {/* Tabla tradicional para pantallas más grandes */}
          <div className="hidden md:block relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700 bg-white">
              <thead className="text-xs uppercase bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-600 text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 text-center">Nombre</th>
                  <th scope="col" className="px-4 py-3 text-left">Email</th>
                  <th scope="col" className="px-4 py-3 text-right">Inicio de subscripcion</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} className={`border-b transition duration-200 hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-4 py-3 text-center font-semibold">
                      {user.username}
                    </td>
                    <td className="px-4 py-3 text-left">
                      {user.email}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {user.start_date.substring(0, 10)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

  );
};
