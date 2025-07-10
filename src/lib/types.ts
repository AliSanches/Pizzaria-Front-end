export interface OrdersData {
    id: string;
    table: number;
    status: boolean;
    draft: boolean;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface PropsRequest {
    orders: OrdersData[]
}