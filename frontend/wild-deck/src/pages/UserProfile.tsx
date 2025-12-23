import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

export const UserProfile = () => {
    const { user, logout, updateUserData } = useAuth();

    const [username, setUsername] = useState(user?.username ?? "");
    const [email, setEmail] = useState(user?.email ?? "");
    const [password, setPassword] = useState("");

    const handleSave = async () => {
        try {
            const response = await axios.put(
                `http://localhost:8080/auth/update/${user?.id}`,
                { username, email, password },
                {
                    headers: {
                        Authorization: user?.token ? `Bearer ${user.token}` : ""
                    }
                }
            );

            updateUserData(response.data);
            alert("Usuario actualizado correctamente");
            setPassword(""); // limpiar campo contraseña
        } catch (error: any) {
            alert("Error al actualizar usuario: " + error.response?.data || error.message);
        }
    };

    return (
        <div className="flex justify-center mt-10 px-4">
            <div className="bg-gray-100 text-black rounded-xl shadow-md p-10 w-full max-w-3xl">

                {/* Header */}
                <div className="flex items-center gap-6 mb-10">
                    <div className="h-20 w-20 rounded-full bg-gray-400 flex items-center justify-center text-2xl font-bold">
                        {username[0]?.toUpperCase()}
                    </div>
                    <h1 className="text-3xl font-bold">Información Usuario</h1>
                </div>

                {/* Info editable */}
                <div className="grid grid-cols-2 gap-8 text-lg">
                    <div>
                        <p className="font-semibold">Usuario</p>
                        <input
                            className="mt-1 p-2 border rounded w-full"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <p className="font-semibold mt-6">Contraseña</p>
                        <input
                            type="password"
                            className="mt-1 p-2 border rounded w-full"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <p className="font-semibold">Email</p>
                        <input
                            type="email"
                            className="mt-1 p-2 border rounded w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                {/* Botones */}
                <div className="mt-10 flex justify-end gap-4">
                    <button
                        onClick={logout}
                        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
                    >
                        Cerrar sesión
                    </button>

                    <button
                        onClick={handleSave}
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
                    >
                        Guardar cambios
                    </button>
                </div>
            </div>
        </div>
    );
};
