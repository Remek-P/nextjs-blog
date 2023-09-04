export function Lister({ list }) {
  return list.map(item => <li key={item}>{ item }</li>)
}