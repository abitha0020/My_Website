type titleprops ={
    title: string
}
export default function Title({title}:titleprops){
    return(
        <div className="container">
            <h2 className="text-6xl leading-10 font-normal tracking-wide">{title}</h2>
        </div>
    );

}