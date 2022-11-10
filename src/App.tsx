import { useEffect, useState } from "react";

const App = () => {
  const [color, setColor] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [solution, setSolution] = useState<string>("");

  const RandomDigits = () => {
    const digits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "A",
      "B",
      "F",
      "C",
      "E",
    ];

    const colour = new Array(6)
      .fill("")
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join("");
    return `#${colour}`;
  };

  useEffect(() => {
    const correctColor = RandomDigits();
    setColor(correctColor);
    setAnswers(
      [correctColor, RandomDigits(), RandomDigits()].sort(
        () => 0.5 - Math.random()
      )
    );
  }, []);

  const HandleCorrectAnswer = (answer: any) => {
    if (answer === color) {
      setSolution("Correct!");
    } else {
      setSolution("Wrong!");
    }
  };

  const HandleRestart = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className="flex flex-col justify-center h-screen gap-20 p-20 bg-gray-50">
      <div
        className={`self-center w-2/4 rounded h-3/4`}
        style={{ backgroundColor: color }}
      ></div>
      <div className="flex flex-row self-center h-10 gap-10">
        {answers.map((answer, index) => (
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-offset-2"
            onClick={() => HandleCorrectAnswer(answer)}
            key={index}
          >
            {answer}
          </button>
        ))}
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-offset-2"
          onClick={HandleRestart}
        >
          RESTART
        </button>
      </div>
      <div className="flex self-center justify-center h-1/5">
        <h1
          className={`text-5xl font-semibold ${
            solution === "Correct!" ? "text-green-400" : "text-red-400"
          } `}
        >
          {solution}
        </h1>
      </div>
    </div>
  );
};

export default App;
