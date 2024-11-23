import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [specialChar, setspecialChar] = useState("");
  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (specialChar) {
      str += "!@#$%^&*(){}?~`";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, specialChar]);

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    //   passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, specialChar, passwordGenerator]);

  return (
    <>
      <div className=" w-1/3 mx-auto shadow rounded-lg p-8 my-8 text-[#ffffff] bg-[#8998a0]">
        <h1 className="text-white text-center text-2xl font-medium mb-5">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordtoClipboard}
            className="rounded-sm bg-red-500 p-3 font-medium text-white hover:bg-red-300"
          >
            copy
          </button>
        </div>
        <div className="flex justify-between text-md  gap-x-2">
          <div className="flex items-center gap-x-l">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className="ms-1">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-l">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              Id:numberInput
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label className="ms-1">Number</label>
          </div>
          <div className="flex items-center gap-x-l">
            <input
              type="checkbox"
              defaultChecked={specialChar}
              Id="numberInput"
              onChange={() => {
                setspecialChar((prev) => !prev);
              }}
            />
            <label className="ms-1">Special Charector</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
