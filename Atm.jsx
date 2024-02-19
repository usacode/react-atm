function Atm() {
  const [balance, setBalance] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [amount, setAmount] = React.useState('');

  const handleTransaction = (e) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (isNaN(value) || value <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    if (isDeposit) {
      setBalance((prevBalance) => prevBalance + value);
    } else {
      if (value > balance) {
        alert('Insufficient funds.');
        return;
      }
      setBalance((prevBalance) => prevBalance - value);
    }

    setAmount('');
  };

  return (
    <div className="atm-container">
      <h2>ATM</h2>
      <form onSubmit={handleTransaction}>
        <div>
          <label>
            <input
              type="radio"
              value="deposit"
              checked={isDeposit}
              onChange={() => setIsDeposit(true)}
            />
            Deposit
          </label>
          <label>
            <input
              type="radio"
              value="withdraw"
              checked={!isDeposit}
              onChange={() => setIsDeposit(false)}
            />
            Withdraw
          </label>
        </div>
        <div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
          <button className="transaction-button" type="submit">
            Transaction
          </button>
        </div>
      </form>
      <div>
        <h3>Balance: {balance}</h3>
      </div>
    </div>
  );
}
ReactDOM.render(<Atm />, document.getElementById('root'));
