

const Card = async ({ name, buy, sell, date }) => {

    const formaterNumber = (number) => {
        return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' })
            .format(number);
    }
    const formaterDate = (date) => {
        const newDate = new Date(date);
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        const formatter = new Intl.DateTimeFormat("es-AR", options).format(newDate)
        return formatter;
    }

    const nameToClass = {
        ["Dolar"]: 'bg-gradient-to-br  from-green-400 to-emerald-700',
        ["Euro"]: 'bg-gradient-to-br  from-green-400 to-emerald-700',
        ["Dolar Blue"]: 'bg-gradient-to-br from-cyan-400 to-blue-500 ',
        ["Euro Blue"]: 'bg-gradient-to-br from-cyan-400 to-blue-500 ',
    };

    // Obtén la clase de estilo correspondiente al nombreF
    const backgroundClass = nameToClass[name] || '';


    return (
        <section className={`${backgroundClass} p-4 rounded-md shadow-md shadow-gray-600 
                transition duration-200 ease-out hover:-translate-y-1  hover:shadow-lg hover:shadow-gray-800`}>
            <h3 className="pl-2 text-xl font-bold tracking-wide skew-x-6 skew-y-1 font-awesome_brands_6">
                {name}</h3>
            <div>
                <div className="grid grid-cols-2 ">
                    <p className="flex flex-col items-center justify-center text-xl font-bold font-awesome_brands_6">
                        <span className="font-sans text-lg font-semibold">Compra:</span>
                        {formaterNumber(buy)}
                    </p>
                    <p className="flex flex-col items-center justify-center text-xl font-bold font-awesome_brands_6">
                        <span className="font-sans text-lg font-semibold">Venta:</span>
                        {formaterNumber(sell)}
                    </p>
                </div>
                <p className="mt-2 text-sm font-semibold text-center">
                    Ultima Actualizacion: <span className="font-bold">{formaterDate(date)}</span>
                </p>
            </div>
        </section >
    )
}

export default Card