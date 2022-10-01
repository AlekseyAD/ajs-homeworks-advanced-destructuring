// const character = {
//   name: 'Лучник',
//   type: 'Bowman',
//   health: 50,
//   level: 3,
//   attack: 40,
//   defence: 10,
//   special: [
//     {
//       id: 8,
//       name: 'Двойной выстрел',
//       icon: 'http://...',
//       description: 'Двойной выстрел наносит двойной урон',
//     },
//     {
//       id: 9,
//       name: 'Нокаутирующий удар',
//       icon: 'http://...',
//       // <- обратите внимание, описание "засекречено"
//     },
//   ],
// };

export default function Destructuring(obj) {
  const arr = [];
  const { special } = obj;

  if (!special) {
    return [];
  }

  for (let i = 0; i < special.length; i += 1) {
    // console.log(special[i].description);

    if (!special[i].description) {
      special[i].description = 'Описание недоступно';
    }
    arr.push({
      id: special[i].id,
      name: special[i].name,
      icon: special[i].icon,
      description: special[i].description,
    });
  }
  // console.log(special);
  // console.log(arr);
  return arr;
}
// Destructuring(character);
