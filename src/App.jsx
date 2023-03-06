import { useState } from "react";
import "./App.css";

const INITIAL_STATE = {
  propertyValue: 10000,
  downpayment: 0.2,
  term: 20,
  interestRate: 3,
};

function App() {
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: [e.target.value],
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Property Calculator</h1>
      </header>

      <main>
        <form>
          <FormField
            label="Interest Rate"
            name="interestRate"
            value={form.interestRate}
            handleChange={handleChange}
          />

          <FormField
            label="Property Value"
            name="propertyValue"
            value={form.propertyValue}
            handleChange={handleChange}
          />

          <FormField
            label="Loan Term"
            name="term"
            value={form.term}
            handleChange={handleChange}
          />
        </form>

        <div className="display">
          <div>Interest Rate: {form.interestRate}%</div>
          <div>Property Value: ${form.propertyValue.toLocaleString()}</div>
          <div>Loan Term: {form.term} years</div>
        </div>
      </main>
    </div>
  );
}

export default App;

const FormField = ({ label, value, name, handleChange }) => {
  return (
    <div className="formField">
      <label htmlFor={label}>{label} </label>
      <input type="number" value={value} onChange={handleChange} name={name} />
    </div>
  );
};
