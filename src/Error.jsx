export default function Error({ query, error }) {
  return (
    <div>
      <p>
        Даних за запитом {query},{error} не знайдено
      </p>
    </div>
  );
}
