import Counter from './Counter'


// Component StudentMark
export default function StudentMark({name, group}){
    return (
        <div style={{background:'white'}}>
            <p>Name: {name}</p>
            Mark: <Counter/>
            {group}
        </div>
    )
}