
export const items = [
    {id: 1, nombre: "Juana", telefono: "556232102"},
    {id: 2, nombre: "Panchito", telefono: "505235192"},
    {id: 3, nombre: "Fermín", telefono: "505268192"},
    {id: 4, nombre: "Oscar", telefono: "5052456292"},
    {id: 5, nombre: "Andrea", telefono: "5052654792"},
]

export function getContact(id){
    return items.find((item) => item.id == id)
}
