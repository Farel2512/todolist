import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '10%' }}>
      <h1>Selamat Datang di ToDoList</h1>
      <h3>Mari Catat dan Lakukan Tugas hingga Cepat Selesai</h3>
      <Link to="/todo">
        <button className="btn btn-primary" style={{ margin: '10px', marginRight: '50%' }}>
          Mulai
        </button>
      </Link>
    </div>
  );
}

export default Home;
