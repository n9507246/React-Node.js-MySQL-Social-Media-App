export default function({data, ...props}){
    console.log(data)
    return(
        <div className={props.className} >
            <img src={data.img} alr='...'/>
            <span>{data.name}</span>
        </div>
    )
}