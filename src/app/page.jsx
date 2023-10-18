'use client'
import Card from "@/components/Card";
import { getAllDollarsAndEuro } from "@/Services/Request";
import { useEffect, useState } from "react";

const Home = () => {
    const [info, setInfo] = useState(undefined)
    useEffect(() => {
        getAllDollarsAndEuro()
            .then(data => {
                const { oficial, blue, oficial_euro, blue_euro, last_update } = data
                setInfo({ oficial, blue, oficial_euro, blue_euro, last_update })
            })
    }, [])
    return (
        <main className="flex flex-col w-full h-screen p-4 ">
            <div className="flex flex-col justify-center flex-grow gap-4 py-4 sm:flex-grow-0 sm:grid-cols-2 sm:grid sm:m-auto">
                {info && <>
                    <Card
                        name={"Dolar"}
                        buy={info.oficial.value_buy}
                        sell={info.oficial.value_sell}
                        date={info.last_update} />
                    <Card
                        name={"Dolar Blue"}
                        buy={info.blue.value_buy}
                        sell={info.blue.value_sell}
                        date={info.last_update} />
                    <Card
                        name={"Euro"}
                        buy={info.oficial_euro.value_buy}
                        sell={info.oficial_euro.value_sell}
                        date={info.last_update} />
                    <Card
                        name={"Euro Blue"}
                        buy={info.blue_euro.value_buy}
                        sell={info.blue_euro.value_sell}
                        date={info.last_update} />
                </>
                }
            </div>
        </main>
    );
}
export default Home