import ReactSearchBox from "react-search-box";

export default function SearchBox() {
  return (
    <ReactSearchBox
      placeholder="Search..."
      data={[
        {
          key: "john",
          value: "John Doe"
        },
        {
          key: "jane",
          value: "Jane Doe"
        },
        {
          key: "mary",
          value: "Mary Phillips"
        },
        {
          key: "robert",
          value: "Robert"
        },
        {
          key: "karius",
          value: "Karius"
        }
      ]}
      onSelect={(record: any) => console.log(record)}
      onFocus={() => {
        console.log("This function is called when is focussed");
      }}
      onChange={(value) => console.log(value)}
      autoFocus
      leftIcon={<></>}
      iconBoxSize="40px"
      inputFontSize="18px
      "
    />
  );
}