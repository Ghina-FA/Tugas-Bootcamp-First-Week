import "./PerkenalanDiri.css";

function PerkenalanDiri (props) {
    return (
    <div class="data">
   <ul>
    <li>
        Nama:{props.Nama}
    </li>
    <li>
        Divisi:{props.Divisi}
    </li>
    <li>
        Jurusan:{props.Jurusan}
    </li>
   </ul>
    </div>
    )
}
export default PerkenalanDiri;