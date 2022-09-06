import './orders.module.scss';

import { TitlePage, Title, PlacedOrder, ContainerElement } from '~/component';
import ordersInfo from '~/data/ordersInfo';

function Orders() {
    return (
        <>
            <TitlePage namePage="your orders" page="orders" />
            <section>
                <Title>placed orders</Title>
                <ContainerElement container40>
                    {ordersInfo.map((info) => (
                        <PlacedOrder
                            key={info.id}
                            time={info.time}
                            name={info.name}
                            number={info.number}
                            email={info.email}
                            address={info.address}
                            orders={info.orders}
                            total={info.total}
                            payMothod={info.payMothod}
                            payStatus={info.payStatus}
                        />
                    ))}
                </ContainerElement>
            </section>
        </>
    );
}

export default Orders;
