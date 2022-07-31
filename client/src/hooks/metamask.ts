import * as ethers from 'ethers';
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';

declare global {
  interface Window {
    ethereum: ExternalProvider;
  }
}

function useMetamask() {

  const connect = async () => {
    const provider = new Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log("Account:", await signer.getAddress());
  }

  return { 
    connect
  }
}

export { useMetamask }