import ListItem from "./ListItem";

const ListGallery = ({ data, onClick }) => {
  return (
    <div>
      <ul style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {data.map(({ id, src, alt }) => {
          return (
            <ListItem
              key={id}
              src={src.medium}
              alt={alt}
              onClick={onClick}
              large={src.large}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ListGallery;
