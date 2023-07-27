export interface DashboardDto {
    dashboard_id: number;
    dashboard_name: string;
    dashboard_description?: string;
    items_qty: number;
    is_active: boolean;
    dt: string;
}