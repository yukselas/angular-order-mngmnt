export interface Order {
    customerOrderNo?: string,
    departureAddress?: string,
    destinationAddress?: string,
    quantity?: number,
    quantityUnit?: string,
    weight?: number,
    weightUnit?: string
    materialCode?: string,
    material?: string
    note?: string,
    status?: string

  }