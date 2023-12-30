import { ChangeEvent, useState, useEffect } from "react";
import { books_data, Data } from "./data";

interface AutocompleteArgs {
  id_name: string;
  placeholder: string;
  label: string;
}



const Autocomplete = (args: AutocompleteArgs) => {
  const [text, setText] = useState<string>("");
  const [options, setOptions] = useState<Data[]>([]);

  const fetchData = async (): Promise<Data[]> => {
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    
    const filtered = books_data.filter((book) => {
      return book.str.includes(text)
    });

    return filtered.slice(0, 10);
  }
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    
    if (text == "") {
      console.log("empty value");
    } else {
      console.log(text);
    }

    // const fetchDataAsync =
    (async () => setOptions(await fetchData()))();
    // fetchDataAsync();
    
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

      <div id="optionsDiv" className="relative">
        {
          options.map((book) => (<AutocompleteOption id={book.id} str={book.str} key={book.id}/>))
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
