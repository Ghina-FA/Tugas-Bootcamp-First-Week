import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PerkenalanDiri from './PerkenalanDiri'
import Buah from './Buah'
import DaftarBuku from './DaftarBuku'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className='judul'>Tugas Bootcamp Minggu Pertama</h1>
      </div>
      <h2 class="profil">Profil</h2>
      <PerkenalanDiri Nama= "Ghina Fauziah Arso" Divisi= "Programming" Jurusan= "Akuntansi" />
      <h2 class="buah">Buah</h2>
      <Buah satu= "Apel" dua= "Jeruk" tiga= "Salak" />
      <DaftarBuku/>
    </>
  )
}

export default App
