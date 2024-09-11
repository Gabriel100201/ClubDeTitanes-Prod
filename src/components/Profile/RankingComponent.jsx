import { useEffect, useState } from "react";
import { getRanking } from "../../services/getRanking";

export const RankingComponment = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getRanking();
                setUsers(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers();
    }, []);

    return (

        <div className="w-full max-w-4xl">
            <h1 className="text-center text-white text-2xl font-bold mb-8">Ranking de Usuarios</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Posición</th>
                            <th scope="col" className="px-6 py-3">Nombre</th>
                            <th scope="col" className="px-6 py-3">Puntos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                    {user.username}
                                </td>
                                <td className="px-6 py-4">
                                    {user.points}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
