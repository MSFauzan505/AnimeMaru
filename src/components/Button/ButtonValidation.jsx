export const ButtonPrimary = ({type='submit', text='text'}) => {
    return (
        <button type={type} className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-lg font-semibold'>
            {text}
        </button>
    );
}

export const buttonDanger = (type='submit', text='text', onButton=()=>{}) => {
    return (
        <button type={type} onClick={onButton} className='w-full bg-blue-400 text-white p-2 rounded hover:bg-red-500 text-lg font-semibold'>
            {text}
        </button>
    );
}