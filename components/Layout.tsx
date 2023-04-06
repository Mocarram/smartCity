import React, { useEffect, useState } from "react";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});
function Layout({ children }: { children: React.ReactNode }) {
  // This is a hack to prevent the DOM from rendering before the client is ready
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return domLoaded ? (
    <WagmiConfig client={client}>{children}</WagmiConfig>
  ) : (
    <div></div>
  );
}

export default Layout;
