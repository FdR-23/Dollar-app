import Card from "@/components/Card";
import { getAllDollarsAndEuro } from "@/Services/Request";

const Home = async () => {
    const controller = new AbortController();
    const { oficial, blue, oficial_euro, blue_euro, last_update } = await getAllDollarsAndEuro(controller);

    return (
        <main className="flex flex-col w-full h-screen p-4 ">
            <div className="flex flex-col justify-center flex-grow gap-4 py-4 sm:flex-grow-0 sm:grid-cols-2 sm:grid sm:m-auto">
                <Card
                    name={"Dolar"}
                    buy={oficial.value_buy}
                    sell={oficial.value_sell}
                    date={last_update} />
                <Card
                    name={"Dolar Blue"}
                    buy={blue.value_buy}
                    sell={blue.value_sell}
                    date={last_update} />
                <Card
                    name={"Euro"}
                    buy={oficial_euro.value_buy}
                    sell={oficial_euro.value_sell}
                    date={last_update} />
                <Card
                    name={"Euro Blue"}
                    buy={blue_euro.value_buy}
                    sell={blue_euro.value_sell}
                    date={last_update} />

            </div>
        </main>
    );
}
export default Home