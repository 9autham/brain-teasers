export default function Image({ src }) {
  return (
    <img
      src={src}
      style={{ width: 300, height: 300, justifyContent: "center" }}
      alt="/"
    />
  );
}
