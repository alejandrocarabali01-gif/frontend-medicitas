# MediCitas – Frontend
React + Vite. Al cargar, hace `GET {VITE_API_URL}/api/citas` y muestra las citas.

## Uso local
Copia `.env.example` a `.env`, ajusta `VITE_API_URL`, luego `npm install` y `npm run dev`.

## Despliegue (Vercel)
Importa el repo → Framework: Vite → variable de entorno `VITE_API_URL` con la URL del backend.
