import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

export function Orders() {
    const orders = useSelector((state: RootState) => state.orders.value)

    return (
        <div className='space-y-2 flex-1 my-3 text-gray-800'>
            {
                orders.map((order) => {
                    return (
                        <div key={order.id} className='flex justify-between items-center rounded-md bg-blue-gray-100 p-3 w-full'>
                            <div className='flex items-center justify-center gap-2'>
                                <div className='w-16 h-16 flex justify-center items-center overflow-hidden rounded-md'>
                                    <img className='h-auto min-h-full w-full' src={order.img} alt={order.name} />
                                </div>
                                <div>
                                    <h2 className='font-semibold'>{order.name}</h2>
                                    <h3>{order.price} $</h3>
                                </div>
                            </div>
                            <div>
                                <h2 className='font-semibold'>Quantity</h2>
                                <h3>{order.quantity}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}