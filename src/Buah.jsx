import './Buah.css'

function Buah (props) {
    return (
       <div class="NamaBuah">
        <ul>
            <li>
                {props.satu}
            </li>
            <li>
                {props.dua}
            </li>
            <li>
                {props.tiga}
            </li>
        </ul>
       </div> 
    )
}
export default Buah;