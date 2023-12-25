import { ChangeEvent, useState, useEffect } from "react";

interface AutocompleteArgs {
  id_name: string;
  placeholder: string;
  label: string;
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
        <div className="w-full p-2 bg-white border border-t-0 shadow-md border-gray-200 rounded-sm">
            Holi
        </div>
        <div className="w-full p-2 bg-white border border-t-0 shadow-md border-gray-200 rounded-sm">
            Holi
        </div>
      </div>
    </div>
  );
};

export default Autocomplete;
