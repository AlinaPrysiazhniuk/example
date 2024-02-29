/* eslint-disable react/prop-types */
const ListItem = ({ src, alt, onClick, large }) => {
  return (
    <li
      onClick={() => {
        onClick(large, alt);
      }}
    >
      <img src={src} alt={alt} style={{ width: 100, height: 100 }} />
    </li>
  );
};

export default ListItem;
