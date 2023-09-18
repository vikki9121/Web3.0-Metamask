import './App.css';
import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";

function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  async function connectWallet() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }

  return (
    <div className="App">
      <div className="floating-buttons">
        <a href="https://github.com/vikki9121" target="_blank" rel="noopener noreferrer" className="social-button github">
          <i className="fab fa-github"></i>
          GitHub
        </a>
        <a href="www.linkedin.com/in/vikki9121" target="_blank" rel="noopener noreferrer" className="social-button instagram">
          <i className="fab fa-linkedin"></i>
          Linkedin
        </a>
      </div>
      {account === null ? (
        <div>
          {isWalletInstalled ? (
            <button onClick={connectWallet}>Connect Wallet</button>
          ) : (
            <p>Install Metamask wallet</p>
          )}
        </div>
      ) : (
        <div className="connected">
          <h1>This is a mini project to connect Metamask wallet</h1>
          <h2>Metamask Connected</h2>
          <h3>Connected as: {account}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
