import { ChangeEvent, useState, useEffect } from "react";
import { books_data, Data } from "./data";

interface AutocompleteArgs {
  id_name: string;
  placeholder: string;
  label: string;
}

const fetchData = async (): Promise<Data[]> => {
  await new Promise(resolve => setTimeout(resolve, 1500));

  return books_data;

}

const Autocomplete = (args: AutocompleteArgs) => {
  const [text, setText] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (text == "") {
      console.log("empty value");
    } else {
      console.log(text);
    }

    fetchData();
  }, [text]);

  return (
    <div>
      <div>
        <label htmlFor={args.id_name} className="block">
          {args.label}
        </label>

        <div className="bg-white rounded-md mt-1 shadow-md">
          <input
            type="text"
            placeholder={args.placeholder}
            id={args.id_name}
            name={args.id_name}
            className="w-full bg-white p-2 border-gray-200 rounded-sm"
            value={text}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div>
        {
          books_data.map((book) => (<AutocompleteOption id={book.id} str={book.str} />))
        }   
      </div>
    </div>
  );
};

const AutocompleteOption = (args: Data) => {
  return (
      <div 
        className="w-full p-2 bg-white border border-t-0 shadow-md border-gray-200 rounded-sm"
        data-value={args.id}
      >
        {args.str}
      </div>
  );
};

export default Autocomplete;
