// const sizeKeys = [
//   'width',
//   'height',
//   'borderWidth',
//   'borderRadius',
//   'padding',
//   'fontSize',
//   'anchorX',
//   'anchorY',
// ];

// const toPx = (() => {
//   let width: number;
//   return (size: number) => {
//     if (!width) {
//       width = 200;
//     }
//     return size / (750 / width);
//   };
// })();
// const getSize = (item: any) => {
//   const _item: any = {};
//   Object.keys(item).forEach(key => {
//     const value = item[key];
//     if (key === 'id') {
//       _item.id = value;
//       _item.key = value;
//     } else if (sizeKeys.includes(key)) {
//       _item[key] = toPx(value);
//     } else if (typeof value === 'object') {
//       _item[key] = getSize(value);
//     } else {
//       _item[key] = value;
//     }
//   });
//   return _item;
// };

// export const getMarkers = (markers: any[]) => {
//   return (
//     markers?.map(item => {
//       const _item = getSize(item);
//       if (!_item.iconPath) {
//         _item.iconPath = '@/assets/marker.png';
//       }
//       if (!_item.width) {
//         _item.width = toPx(80);
//       }
//       if (!_item.height) {
//         _item.height = toPx(80);
//       }
//       if (_item.label) {
//         if (!_item.label.fontSize) {
//           _item.label.fontSize = toPx(24);
//         }
//       }
//       return _item;
//     }) || []
//   );
// };
