import ClientMeteo from "../components/client_meteo";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function MeteoPage() {
  return <BrowserOnly fallback={<div>Loading map...</div>}>
    {() => (
      <ClientMeteo />
    )}
  </BrowserOnly>
}
