const FormInput = (props) => {
    return(
        <>
            <div className="flex flex-col items-center justify-center mt-10 w-[60%]">
                <label className="font-bold">{props.nome}</label>
                <input name={props.name} className="font-bold text-black mt-1 block w-full w-[100%] bg-[#f5f5f5] flex flex-col" placeholder={props.placeholder} type={props.type}/>
            </div>
        </>
    )
}
export default FormInput