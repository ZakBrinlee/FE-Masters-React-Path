import Application from "./components/application"
import { ColorProvider } from "./context"

export const ColorsApplication = () => {
  return (
    <ColorProvider>
      <Application />
    </ColorProvider>
  )
}