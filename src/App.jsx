import { useEffect, useState } from 'react';

const API = (
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? 'http://localhost:3000' : '')
).replace(/\/+$/, '');

export default function App() {
  const [citas, setCitas] = useState([]);
  const [estado, setEstado] = useState('cargando');

  useEffect(() => {
    const url = `${API}/api/citas`;
    console.log('Consultando:', url);

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`El servidor respondió ${r.status}`);
        return r.json();
      })
      .then((datos) => {
        setCitas(datos);
        setEstado('listo');
      })
      .catch((e) => {
        console.error('Fallo al cargar las citas:', e);
        setEstado('error');
      });
  }, []);

  return (
    <main>
      <h1>✚ MediCitas</h1>
      <p className="mu">Citas médicas programadas</p>
      {estado === 'cargando' && <p>Cargando citas…</p>}
      {estado === 'error' && (
        <p className="er">
          No pudimos cargar las citas. Revisa tu conexión e intenta de nuevo.
        </p>
      )}
      {estado === 'listo' && citas.length === 0 && (
        <p>Aún no hay citas registradas.</p>
      )}
      {estado === 'listo' &&
        citas.map((c) => (
          <div className="card" key={c.id}>
            <div className="hora">{c.hora}</div>
            <div>
              <b>{c.paciente}</b>
              <div className="mu">
                {c.medico} · {c.especialidad}
              </div>
              <div className="mu">{c.fecha}</div>
            </div>
          </div>
        ))}
    </main>
  );
}