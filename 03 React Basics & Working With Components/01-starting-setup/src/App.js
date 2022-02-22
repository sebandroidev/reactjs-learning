import Expenses from "./components/Expenses"

function App() {

  const expenses = [
    {
      id: 'e1',
      title: "Car Insurance",
      amount: 45000,
      date: new Date(2022, 2, 16)
    },
    {
      id: 'e2',
      title: "Buy an iPhone",
      amount: 130000,
      date: new Date(2022, 3, 25)
    },
    {
      id: 'e3',
      title: "Pay backend developer",
      amount: 200000,
      date: new Date(2022, 3, 8 )
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses = {expenses} />
    </div>
  );
}

export default App;
